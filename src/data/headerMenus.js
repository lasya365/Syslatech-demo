import { withBase } from "../utils/withBase.js";


const solutions = [
  {
    title: "Web Testing",
    description: "Ensure web applications deliver reliable performance and quality.",
    icon: "mdi:web",
    href: withBase("/solutions/Web-testing.html"),
  },
  {
    title: "Mobile Testing",
    description: "Test mobile applications across devices and platforms.",
    icon: "mdi:cellphone",
    href: withBase("/solutions/Mobile-testing.html"),
  },
  {
    title: "API Testing",
    description: "Validate APIs for functionality, reliability, and performance.",
    icon: "mdi:code-braces",
    href: withBase("/solutions/API-testing.html"),
  },
  {
    title: "Desktop Testing",
    description: "Improve the quality of desktop applications through testing.",
    icon: "mdi:monitor",
    href: withBase("/solutions/Desktop-testing.html"),
  },
  {
    title: "Salesforce Testing",
    description: "Verify Salesforce workflows and business applications.",
    icon: "mdi:cloud-check",
    href: withBase("/solutions/Salesforce-testing.html"),
  },
  {
    title: "Database Testing",
    description: "Check database accuracy, consistency, and reliability.",
    icon: "mdi:database-check",
    href: "solutions/Database-testing.html",
  },
];

const services = [
  {
    title: "Intelligent Testcare",
    description: "Smart test intelligence for reliable software quality.",
    icon: "mdi:lightbulb-outline",
    href: withBase("/services/intelligent-testcare"),
  },
  {
    title: "Natural Language Test Authoring",
    description: "Write test cases as easily as plain English commands.",
    icon: "mdi:message-text-outline",
    href: withBase("/services/natural-language-test-authoring"),
  },
  {
    title: "Quality Test Scripts",
    description: "Robust, accurate scripts built for real-world scenarios.",
    icon: "mdi:file-code-outline",
    href: withBase("/services/quality-test-scripts"),
  },
  {
    title: "AI Powered Framework Development",
    description: "AI-driven test frameworks that build themselves.",
    icon: "mdi:graph-outline",
    href: withBase("/services/ai-powered-framework-development"),
  },
  {
    title: "Adaptive Test Maintenance",
    description: "Self-healing tests that evolve with your application.",
    icon: "mdi:autorenew",
    href: withBase("/services/adaptive-test-maintenance"),
  },
  {
    title: "Supports All Platforms",
    description: "Unified automation across web, mobile, desktop, and APIs.",
    icon: "mdi:view-grid-outline",
    href: withBase("/services/supports-all-platforms"),
  },
  {
    title: "Automate Without Requirement",
    description: "Create automation even before requirements are defined.",
    icon: "mdi:auto-fix",
    href: withBase("/services/automate-without-requirements"),
  },
  {
    title: "AI Powered Test Optimisation",
    description: "AI that improves coverage, speed, and stability.",
    icon: "mdi:chart-line",
    href: withBase("/services/ai-powered-test-optimisation"),
  },
  {
    title: "Multi-Source Support",
    description: "Seamless testing from multiple data and system sources.",
    icon: "mdi:source-branch",
    href: withBase("/services/multi-source-support"),
  },
];

const partners = [
  {
    title: "Experts in AI Tools",
    description:
      "AI-powered testing for better accuracy and speed. Smart tools for advanced automation workflows. Reliable quality with intelligent test solutions.",
    icon: "mdi:creation",
    href: "",
  },
  {
    title: "Industries We Serve",
    description:
      "Quality assurance for multiple business domains. Industry-focused testing strategies and tools. Scalable solutions for growing enterprises.",
    icon: "mdi:domain",
    href: "",
  },
  {
    title: "Customised Solutions",
    description:
      "Tailored solutions for unique business needs, flexible automation frameworks, and scalable quality workflows.",
    icon: "mdi:tune-variant",
    href: "",
  },
  {
    title: "End-to-End Quality Delivery",
    description:
      "From validation to final sign-off, our QA teams take responsibility for quality delivery—ensuring your product is release-ready, reliable, and user-approved.",
    icon: "mdi:check-circle-outline",
    href: "",
  },
];

const tools = [
  {
    title: "Testsigma",
    description:
      "Low-code automation powered by AI. Faster test creation with minimal scripting.",
    icon: "mdi:robot-outline",
    logo: withBase("/images/tools/Testigma.png"),
    href: "https://testsigma.com/",
  },
  {
    title: "Selenium",
    description:
      "Scalable open-source web automation framework for web automation.",
    icon: "mdi:application-brackets-outline",
    logo: withBase("/images/tools/Selenium.png"),
    href: "https://www.selenium.dev/",
  },
  {
    title: "Playwright",
    description:
      "Fast and reliable end-to-end testing for modern applications.",
    icon: "mdi:play-circle-outline",
    logo: withBase("/images/tools/Playwrite.png"),
    href: "https://playwright.dev/",
  },
  {
    title: "Katalon Studio",
    description:
      "Unified testing for web, mobile, API and desktop applications.",
    icon: "mdi:monitor-dashboard",
    logo: withBase("/images/tools/Katalon%20Studio.png"),
    href: "https://katalon.com/",
  },
  {
    title: "Tricentis Tosca",
    description:
      "Enterprise-grade automation testing for complex business systems.",
    icon: "mdi:widgets-outline",
    logo: withBase("/images/tools/Tricentis%20Tosca.png"),
    href: "https://www.tricentis.com/",
  },
  {
    title: "Cypress",
    description:
      "Developer-friendly end-to-end testing for modern front-end applications.",
    icon: "mdi:check-box-outline",
    logo: withBase("/images/tools/Cypress.png"),
    href: "https://www.cypress.io/",
  },
];

const menus = [
  {
    label: "Solutions",
    key: "solutions",
    eyebrow: "OUR SOLUTIONS",
    heading: "Quality at every level.",
    description:
      "Explore software testing solutions built around your quality goals.",
    action: "Explore solutions",
    href: "",
    items: solutions,
  },
  {
    label: "Services",
    key: "services",
    eyebrow: "OUR SERVICES",
    heading: "Smarter testing. Better outcomes.",
    description:
      "Discover services that help simplify software quality engineering.",
    action: "Explore services",
    href: "",
    items: services,
  },
  {
    label: "Why Partner With Us",
    key: "partners",
    eyebrow: "WHY SYSLATECH",
    heading: "A partner in quality.",
    description:
      "Learn how expertise and tailored solutions can support your team.",
    action: "Why Syslatech",
    href: withBase("/#why-partner-with-us"),
    items: partners,
  },
  {
    label: "Tools & Tech",
    key: "tools",
    eyebrow: "TOOLS & TECHNOLOGY",
    heading: "The right tools for quality.",
    description:
      "Explore technologies used in modern software testing.",
    action: "Explore technologies",
    href: withBase("/#tools-tech"),
    items: tools,
  },
];

export {
  solutions,
  services,
  partners,
  tools,
  menus,
};
