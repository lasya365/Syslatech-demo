// Prepares SVG icons for astro-icon.
//
// Design exports often wrap a PNG inside an SVG (<image href="data:image/png;base64,...">).
// astro-icon/Iconify rejects those ("Unexpected element: <image>"), so this integration
// copies every icon from `srcDir` into `outDir`, tracing embedded PNGs into vector paths
// with potrace on the way. Point astro-icon's `iconDir` at `outDir`.
import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { basename, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import potrace from 'potrace';

const EMBEDDED_PNG = /<image\b[^>]*?href="data:image\/png;base64,([^"]+)"/;

function trace(png) {
  const tracer = new potrace.Potrace({ color: '#000000', background: 'transparent' });
  return new Promise((done, fail) =>
    tracer.loadImage(png, (err) => (err ? fail(err) : done(tracer.getSVG())))
  );
}

async function convertFile(file, outDir, logger) {
  const svg = await readFile(file, 'utf8');
  const match = svg.match(EMBEDDED_PNG);
  const out = join(outDir, basename(file));

  if (!match) {
    await writeFile(out, svg);
    return;
  }

  try {
    await writeFile(out, await trace(Buffer.from(match[1], 'base64')));
    logger.info(`vectorized ${basename(file)}`);
  } catch (err) {
    logger.warn(`could not vectorize ${basename(file)}: ${err.message}`);
  }
}

async function convertAll(srcDir, outDir, logger) {
  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });
  const files = (await readdir(srcDir)).filter((f) => f.endsWith('.svg'));
  await Promise.all(files.map((f) => convertFile(join(srcDir, f), outDir, logger)));
}

/**
 * @param {{ srcDir: string, outDir: string }} options paths relative to the project root
 * @returns {import('astro').AstroIntegration}
 */
export default function vectorizeIcons({ srcDir, outDir }) {
  let src;
  let out;

  return {
    name: 'vectorize-icons',
    hooks: {
      // Runs before astro-icon's Vite plugin loads the icon folder.
      'astro:config:setup': async ({ config, logger }) => {
        const root = fileURLToPath(config.root);
        src = resolve(root, srcDir);
        out = resolve(root, outDir);
        await convertAll(src, out, logger);
      },
      // Re-convert when an icon is added or changed during `astro dev`;
      // astro-icon picks up the change from `outDir`.
      'astro:server:setup': ({ server, logger }) => {
        server.watcher.add(src);
        const onChange = (file) => {
          if (file.endsWith('.svg') && !relative(src, file).startsWith('..')) {
            convertFile(file, out, logger);
          }
        };
        server.watcher.on('add', onChange);
        server.watcher.on('change', onChange);
      },
    },
  };
}
