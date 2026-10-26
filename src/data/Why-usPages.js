import webTestingHero from "../assets/solutions/web-testing-hero.png";
import webTestingChallenge from "../assets/solutions/web-testing-challenge.jpg";
import webTestingSolution from "../assets/solutions/web-testing-solution.jpg";

import mobileTestingHero from "../assets/solutions/mobile-testing-hero.png";
import mobileTestingChallenge from "../assets/solutions/mobile-testing-challenge.jpg";
import mobileTestingSolution from "../assets/solutions/mobile-testing-solution.jpg";

import apiTestingHero from "../assets/solutions/api-testing-hero.png";
import apiTestingChallenge from "../assets/solutions/api-testing-challenge.jpg";
import apiTestingSolution from "../assets/solutions/api-testing-solution.jpg";

import desktopTestingHero from "../assets/solutions/desktop-testing-hero.png";
import desktopTestingChallenge from "../assets/solutions/desktop-testing-challenge.jpg";
import desktopTestingSolution from "../assets/solutions/desktop-testing-solution.jpg";

// Iconify Material Design Icons
const icons = {
  web: "mdi:web",
  mobile: "mdi:cellphone",
  api: "mdi:api",
  performance: "mdi:speedometer",
  desktop: "mdi:desktop-classic",
  rocket: "mdi:rocket-launch",
  wallet: "mdi:wallet",
  layers: "mdi:layers",
  target: "mdi:target",
  shield: "mdi:shield-check",
  building: "mdi:domain",
  activity: "mdi:chart-line",
  refresh: "mdi:refresh",
  check: "mdi:check-circle",
};

export const whyUsData = {
  // 1. Experts in AI Tools
  expertsInAITools: {
    title: "Smarter Testing. Faster Releases. Better Quality.",
    subtitle: "Explore Our AI-Driven Testing Capabilities",
    description:
      "Discover how our AI-driven testing capabilities improve software quality and accelerate releases.",

    heroImage: webTestingHero,

    cta: {
      label: "Explore Our Services",
      href: "/services/",
    },

    challenge: {
      title: "THE CHALLENGE",
      description:
        "Traditional testing struggles to keep up with rapid development cycles, frequent changes, and complex digital ecosystems, resulting in higher costs and delayed releases.",
      image: webTestingChallenge,
      imageAlt: "Challenges in traditional software testing",
    },

    solution: {
      title: "Our AI POWERED Solution",
      description:
        "We integrate artificial intelligence into every stage of testing to automate repetitive tasks, enhance test coverage, and detect defects earlier in the development lifecycle.",
      image: webTestingSolution,
      imageAlt: "AI-powered software testing solution",
    },

    whatWeTest: {
      title: "What Our AI Tools Deliver?",
      cards: [
        {
          icon: "mdi:robot",
          title: "Intelligent Test Case Generation",
          description: "Auto-creates optimized test cases",
        },
        {
          icon: "mdi:bug-check",
          title: "Early Defect Detection",
          description: "Identifies issues before they reach production",
        },
        {
          icon: icons.rocket,
          title: "Faster Test Execution",
          description: "Reduces testing cycles significantly",
        },
        {
          icon: "mdi:auto-fix",
          title: "Self-Healing Automation",
          description: "Adapts to UI and code changes",
        },
        {
          icon: "mdi:chart-box",
          title: "Predictive Analytics",
          description: "Improves test efficiency over time",
        },
      ],
    },

    approach: {
      title: "OUR APPROACH",
      description:
        "We leverage AI-powered testing tools to improve accuracy, speed, and defect detection. Our approach focuses on intelligent automation that reduces manual effort and ensures high-quality outcomes across complex applications.",
    },

    businessImpact: {
      title: "Business Impact",
      items: [
        {
          icon: icons.rocket,
          text: "Faster releases with fewer defects",
        },
        {
          icon: icons.wallet,
          text: "Reduced testing effort and costs",
        },
        {
          icon: icons.layers,
          text: "Scalable QA for growing applications",
        },
        {
          icon: icons.target,
          text: "Improved test coverage",
        },
      ],
    },
  },

  // 2. Industries We Serve
  industriesWeServe: {
    title: "Industry-Focused Testing That Delivers Results",
    subtitle: "Discover Industry-Specific QA Solutions",
    description:
      "Industry-focused testing solutions tailored to business workflows, compliance, performance, and scalability.",

    heroImage: mobileTestingHero,

    cta: {
      label: "Explore Our Services",
      href: "/services/",
    },

    challenge: {
      title: "THE CHALLENGE",
      description:
        "Each industry faces unique challenges, from compliance and security to performance and scalability. Generic testing approaches often fall short.",
      image: mobileTestingChallenge,
      imageAlt: "Challenges faced by different industries",
    },

    solution: {
      title: "Our Industry-Driven Approach",
      description:
        "We align testing strategies with industry requirements, business workflows, and compliance standards to deliver precise and effective QA solutions.",
      image: mobileTestingSolution,
      imageAlt: "Industry-driven software testing solutions",
    },

    whatWeTest: {
      title: "Industries We Support",
      cards: [
        {
          icon: "mdi:code-braces",
          title: "IT & Software Products",
          description: "Agile and DevOps-ready QA",
        },
        {
          icon: "mdi:bank",
          title: "Fintech",
          description: "Secure, compliant, and high-performance testing",
        },
        {
          icon: "mdi:hospital-box",
          title: "Healthcare",
          description: "Data privacy, accuracy, and regulatory compliance",
        },
        {
          icon: "mdi:cart",
          title: "E-Commerce",
          description: "High-traffic and user experience validation",
        },
        {
          icon: icons.building,
          title: "Enterprise Solutions",
          description: "Scalable and integration-focused testing",
        },
      ],
    },

    approach: {
      title: "OUR EXPERTISE",
      description:
        "We apply industry-specific testing strategies tailored to unique business challenges. Our approach ensures compliance, performance, and reliability across finance, healthcare, e-commerce, and enterprise systems.",
    },

    businessImpact: {
      title: "Business Impact",
      items: [
        {
          icon: icons.shield,
          text: "Reduced compliance risks",
        },
        {
          icon: icons.building,
          text: "Industry-ready applications",
        },
        {
          icon: icons.activity,
          text: "Improved performance and reliability",
        },
        {
          icon: icons.rocket,
          text: "Faster go-to-market",
        },
      ],
    },
  },

  // 3. Customized Solutions
  customizedSolutions: {
    title: "QA Strategies Built Around Your Business",
    subtitle: "Request a Custom QA Strategy",
    description:
      "Flexible QA strategies tailored to business goals, technology stacks, and evolving project requirements.",

    heroImage: apiTestingHero,

    cta: {
      label: "Request a Custom QA Strategy",
      href: "/contact/",
    },

    challenge: {
      title: "THE CHALLENGE",
      description:
        "Standard testing models often fail to address evolving requirements, modern tech stacks, and business priorities.",
      image: apiTestingChallenge,
      imageAlt: "Challenges with standard testing models",
    },

    solution: {
      title: "Our Custom QA Solution",
      description:
        "We create flexible testing frameworks that adapt to your product's lifecycle, whether you're a startup, growing business, or enterprise.",
      image: apiTestingSolution,
      imageAlt: "Customized quality assurance solutions",
    },

    whatWeTest: {
      title: "What We Customize?",
      cards: [
        {
          icon: icons.target,
          title: "Testing Scope & Strategy",
          description: "Aligned with business goals",
        },
        {
          icon: "mdi:layers-triple",
          title: "Technology Stack",
          description: "Web, mobile, API, cloud, and legacy systems",
        },
        {
          icon: icons.refresh,
          title: "Delivery Model",
          description: "Agile, DevOps, or hybrid",
        },
        {
          icon: icons.activity,
          title: "Scalability",
          description: "Grows as your product evolves",
        },
        {
          icon: "mdi:account-group",
          title: "Engagement Model",
          description: "On-demand or dedicated teams",
        },
      ],
    },

    approach: {
      title: "OUR APPROACH",
      description:
        "We design flexible testing frameworks based on project requirements and business goals. Our approach adapts to changing needs, ensuring scalable and efficient quality assurance at every stage of development.",
    },

    businessImpact: {
      title: "Business Impact",
      items: [
        {
          icon: icons.target,
          text: "Better alignment with business goals",
        },
        {
          icon: icons.refresh,
          text: "Faster adaptation to change",
        },
        {
          icon: icons.wallet,
          text: "Optimized testing costs",
        },
      ],
    },
  },

  // 4. End-to-End Quality
  endToEndQuality: {
    title: "End-to-End Quality Delivery, Quality You Can Trust at Every Stage",
    subtitle: "Explore Our Quality Delivery Approach",
    description:
      "End-to-end quality delivery that integrates validation throughout the development lifecycle.",

    heroImage: desktopTestingHero,

    cta: {
      label: "Explore Our Quality Delivery Approach",
      href: "/contact/",
    },

    challenge: {
      title: "THE CHALLENGE",
      description:
        "Quality gaps often occur when testing is treated as a phase rather than a continuous process. Late validation, inconsistent execution, and lack of ownership can lead to defects, rework, and release delays.",
      image: desktopTestingChallenge,
      imageAlt: "Challenges in end-to-end quality delivery",
    },

    solution: {
      title: "Our End-to-End Quality Delivery Model",
      description:
        "We embed quality across the development lifecycle by combining structured test planning, continuous validation, and release readiness checks, ensuring issues are identified early and resolved before reaching users.",
      image: desktopTestingSolution,
      imageAlt: "End-to-end quality delivery model",
    },

    whatWeTest: {
      title: "What Our Quality Delivery Covers?",
      cards: [
        {
          icon: "mdi:clipboard-check",
          title: "Requirement Validation",
          description:
            "Ensures clarity, coverage, and testability from day one",
        },
        {
          icon: icons.refresh,
          title: "Continuous Testing",
          description: "Validates functionality throughout development cycles",
        },
        {
          icon: "mdi:connection",
          title: "System & Integration Validation",
          description: "Confirms stability across components and platforms",
        },
        {
          icon: "mdi:check-decagram",
          title: "Release Readiness Assurance",
          description: "Verifies performance, usability, and reliability",
        },
        {
          icon: "mdi:monitor-dashboard",
          title: "Post-Release Quality Monitoring",
          description: "Ensures stability beyond go-live",
        },
      ],
    },

    approach: {
      title: "Our Approach",
      description:
        "We take end-to-end ownership of quality delivery, integrating validation throughout the lifecycle to ensure predictable, release-ready outcomes.",
    },

    businessImpact: {
      title: "Business Impact",
      items: [
        {
          icon: icons.shield,
          text: "Reduced production defects",
        },
        {
          icon: icons.check,
          text: "Improved release confidence",
        },
        {
          icon: icons.rocket,
          text: "Faster and smoother go-live cycles",
        },
        {
          icon: icons.layers,
          text: "Consistent quality across versions",
        },
      ],
    },
  },
};

// Preserve exports for individual Why Us pages.
export const industriesWeServe = whyUsData.industriesWeServe;
export const customizedSolutions = whyUsData.customizedSolutions;
export const endToEndQuality = whyUsData.endToEndQuality;