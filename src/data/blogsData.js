
import blogImage1 from "../assets/Tools/blog1.png";
import blogImage2 from "../assets/Tools/blog2.png";
import blogImage3 from "../assets/Tools/blog3.png";
import { withBase } from "../utils/withBase.js";

export const blogs = [
  {
    image: blogImage1,
    alt: "Software testing automation",
    category: "Automation",
    title:
      "The Future of Software Testing: Why Automation Is No Longer Optional",
    description:
      "In today's fast-paced digital world, software quality is no longer a differentiator—it's a requirement.",
    href: withBase("/Blogs/blogs1"),

  },
  {
    image: blogImage2,
    alt: "Quality assurance strategy",
    category: "Strategy",
    title:
      "Why QA Should Be Embedded from Day One: A Strategic Move for Modern Businesses",
    description:
      "For many organizations, quality assurance is still treated as the final step before deployment...",
    href: withBase("/Blogs/blogs2"),

  },
  {
    image: blogImage3,
    alt: "Software testing tools",
    category: "Tools & Tech",
    title:
      "Top Testing Tools of 2025: What Industry Leaders Are Using and Why It Matters",
    description:
      "The software testing ecosystem evolves rapidly. As applications become more complex—from microservices...",
    href: withBase("/Blogs/blogs3"),

  },
];
