import logo from "../assets/Tools/Logo.png";

import testsigma from "../assets/Tools/navtool-testigma.webp";
import selenium from "../assets/Tools/navtool-selenium.webp";
import playwright from "../assets/Tools/navtool-playwrite.webp";
import cypress from "../assets/Tools/navtool-cypress.webp";
import katalon from "../assets/Tools/navtool-katalon-studio.webp";
import tosca from "../assets/Tools/navtool-tricentis-tosca.webp";

export const toolsTechnology = {
  logo,
  kicker: "TOOLS & TECHNOLOGY",
  heading: "A curated suite of",
  highlight: "industry-leading tools",
  description:
    "At Syslatech, we leverage a curated suite of industry-leading automation tools to deliver precision, scalability, and unmatched testing performance, tailored to your technical needs and business goals.",
  tools: [
    {
      name: "Testsigma",
      image: testsigma,
      angle: 0,
      description:
        "Low-code automation powered by AI. Faster test creation with minimal scripting.",
      href: "https://testsigma.com/",
    },
    {
      name: "Selenium",
      image: selenium,
      angle: 60,
      description:
        "Scalable open-source web automation framework. Ideal for complex and enterprise applications.",
      href: "https://www.selenium.dev/",
    },
    {
      name: "Playwright",
      image: playwright,
      angle: 120,
      description:
        "Fast and reliable end-to-end testing. Built for modern JavaScript applications.",
      href: "https://playwright.dev/",
    },
    {
      name: "Cypress",
      image: cypress,
      angle: 180,
      description:
        "Fast and developer-friendly testing framework. Perfect for modern front-end applications.",
      href: "https://www.cypress.io/",
    },
    {
      name: "Katalon Studio",
      image: katalon,
      angle: 240,
      description:
        "Unified testing for web, mobile, API and desktop. Quick setup with built-in integrations.",
      href: "https://katalon.com/",
    },
    {
      name: "Tricentis Tosca",
      image: tosca,
      angle: 300,
      description:
        "Enterprise-grade model-based automation tool. Designed for complex business systems.",
      href: "https://www.tricentis.com/",
    },
  ],
};
