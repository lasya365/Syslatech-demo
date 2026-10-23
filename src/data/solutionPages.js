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
import salesforceTestingHero from "../assets/solutions/salesforce-testing-hero.png";
import salesforceTestingChallenge from "../assets/solutions/salesforce-testing-challenge.jpg";
import salesforceTestingSolution from "../assets/solutions/salesforce-testing-solution.jpg";
import databaseTestingHero from "../assets/solutions/database-testing-hero.png";
import databaseTestingChallenge from "../assets/solutions/database-testing-challenge.jpg";
import databaseTestingSolution from "../assets/solutions/database-testing-solution.jpg";
import webIcon from "../assets/Icons/web-black.svg";
import mobileIcon from "../assets/Icons/mobile-black.svg";
import apiIcon from "../assets/Icons/api-black.svg";
import desktopIcon from "../assets/Icons/desktop-black.svg";
import performanceIcon from "../assets/Icons/performance.svg";
import businessIcon1 from "../assets/Icons/bussiness-icons1.svg?url";
import businessIcon2 from "../assets/Icons/bussiness-icons2.svg?url";
import businessIcon3 from "../assets/Icons/bussiness-icons3.svg?url";
import businessIcon4 from "../assets/Icons/bussiness-icons4.svg?url";
import { withBase } from "../utils/withBase.js";


export const solutions = {
  "web-testing": {
    title: "WEB APPLICATION TESTING SOLUTIONS",
    subtitle:
      "Flawless Web Application Testing for Superior User Experience",
    description:
      "Reliable, secure, and scalable web testing for seamless user experiences.",
    heroImage: webTestingHero,

    cta: {
      label: "Request a Web Testing Assessment",
      href: withBase("/contact"),
    },

    challenge: {
      title: "THE CHALLENGE",
      description:
        "Web applications must function seamlessly in a fragmented digital ecosystem. Browser inconsistencies, performance bottlenecks, and security vulnerabilities can break user trust and impact conversions.",
      image: webTestingChallenge,
      imageAlt: "Web application testing challenge",
    },

    solution: {
      title: "OUR SOLUTION",
      description:
        "We deliver end-to-end web testing that validates functionality and usability, resulting in reliable user experiences across all environments.",
      image: webTestingSolution,
      imageAlt: "Web application testing solution",
    },

    whatWeTest: {
      title: "WHAT WE TEST",
      cards: [
        {
          icon: webIcon,
          title: "Cross-Browser Compatibility",
          description: "Chrome, Firefox, Safari, Edge",
        },
        {
          icon: mobileIcon,
          title: "Responsive UI",
          description: "Mobile, tablet, & desktop views",
        },
        {
          icon: apiIcon,
          title: "Functional Workflows",
          description: "Business-critical scenarios",
        },
      ],
    },

    approach: {
      title: "OUR APPROACH",
      description:
        "We ensure your web applications perform flawlessly across browsers and devices through a mix of manual and automated testing. Our approach focuses on functionality, usability, security, and performance to deliver a smooth user experience.",
    },

    businessImpact: {
      title: "BUSINESS IMPACT",
      items: [
        {
          icon: businessIcon1,
          text: "Consistent user experience",
        },
        {
          icon: businessIcon2,
          text: "Reduced production issues",
        },
        {
          icon: businessIcon3,
          text: "Faster time-to-market",
        },
        {
          icon: businessIcon4,
          text: "Improved customer satisfaction",
        },
      ],
    },
  },
  
"mobile-testing": {
  title: "MOBILE APPLICATION TESTING SOLUTIONS",

  subtitle:
    "Powering High-Quality Mobile App Performance",

  description:
      "Comprehensive mobile app testing for speed, stability, and usability.",

  heroImage: mobileTestingHero,

  cta: {
    label: "Schedule a Mobile App Consultation",
    href: withBase("/contact"),
  },

  challenge: {
    title: "THE CHALLENGE",
    description:
      "Mobile users demand speed, stability, and intuitive design—any lag or crash leads to immediate uninstall",
    image: mobileTestingChallenge,
    imageAlt: "Mobile application testing challenges across devices",
  },

  solution: {
    title: "OUR MOBILE TESTING SOLUTION",
    description:
      "We validate mobile apps across real devices and network conditions to ensure consistent performance and usability.",
    image: mobileTestingSolution,
    imageAlt: "Mobile application testing and quality assurance",
  },

  whatWeTest: {
    title: "WHAT WE TEST",
    cards: [
      {
        icon: webIcon,
        title: "Device & OS Compatibility",
        description: "Android & iOS",
      },
      {
        icon: mobileIcon,
        title: "Performance & Stability",
        description: "Crash-free experience",
      },
      {
        icon: apiIcon,
        title: "Network Conditions",
        description: "2G to 5G scenarios",
      },
      {
        icon: performanceIcon,
        title: "UI & Usability",
        description: "Intuitive design flow",
      },
      {
        icon: "mdi:shield-check",
        title: "Mobile Security",
        description: "Data protection & privacy",
      },
    ],
  },

  approach: {
    title: "OUR APPROACH",
    description:
      "Our mobile testing approach validates applications across multiple devices, screen sizes, and operating systems. We focus on performance, usability, and compatibility to ensure reliable and high-quality mobile experiences.",
  },

  businessImpact: {
    title: "BUSINESS IMPACT",
    items: [
      {
        icon: businessIcon1,
        text: "Higher app ratings",
      },
      {
        icon: businessIcon2,
        text: "Improved user retention",
      },
      {
        icon: businessIcon3,
        text: "Reduced post-release issues",
      },
      {
        icon: businessIcon4,
        text: "Faster app launches",
      },
    ],
  },
},

"api-testing": {
  title: "API TESTING SOLUTIONS",

  subtitle:
    "Trusted API Testing for Seamless Integrations",

  description:
      "Accurate API testing to ensure secure, fast, and reliable integrations.",

  heroImage: apiTestingHero,

  cta: {
    label: "Book an API Testing Reviewn",
    href: withBase("/contact"),
  },

  challenge: {
    title: "THE CHALLENGE",
    description:
      "Unstable APIs lead to broken integrations, data loss, and system downtime",
    image: apiTestingChallenge,
    imageAlt: "Api application testing challenges across devices",
  },

  solution: {
    title: "OUR API TESTING SOLUTION",
    description:
      "We validate functionality of APIs independently—ensuring stable backend operations",
    image: apiTestingSolution,
    imageAlt: "Api application testing and quality assurance",
  },

  whatWeTest: {
    title: "WHAT WE TEST",
    cards: [
      {
        icon: webIcon,
        title: "Functional Validation",
        description: "Accurate request-response cycles",
      },
      {
        icon: mobileIcon,
        title: "Data Accuracy",
        description: "Clean and consistent data",
      },
      {
        icon: performanceIcon,
        title: "Load & Stress Testing",
        description: "Scalable performance",
      },
      {
        icon: desktopIcon,
        title: "Authentication & Security",
        description: "Secure access control",
      },
      {
        icon: apiIcon,
        title: "Error Handling",
        description: "Graceful failure responses",
      },
    ],
  },

  approach: {
    title: "OUR APPROACH",
    description:
      "We follow a comprehensive API testing approach that validates functionality, security, performance, and data integrity across all endpoints. Our team uses automated and manual testing strategies to ensure accurate request and response handling, seamless third-party integrations, and compliance with industry standards. By identifying issues early in the development lifecycle, we help organizations deliver stable, scalable, and high-performing API-driven applications.",
  },

  businessImpact: {
    title: "BUSINESS IMPACT",
    items: [
      {
        icon: businessIcon1,
        text: "Stable integrations",
      },
      {
        icon: businessIcon2,
        text: "Reduced downtime",
      },
      {
        icon: businessIcon3,
        text: "Faster development cycles",
      },
      {
        icon: businessIcon4,
        text: "Improved scalability",
      },
    ],
  },
},

"desktop-testing": {
  title: "DESKTOP APPLICATION TESTING SOLUTIONS",

  subtitle:
    "Quality Assurance for Robust Desktop Software",

  description:
      "Robust desktop application testing for smooth functionality and performance.",

  heroImage: desktopTestingHero,

  cta: {
    label: "Schedule a Desktop Testing Demo",
    href: withBase("/contact"),
  },

  challenge: {
    title: "THE CHALLENGE",
    description:
      "Desktop applications must handle complex workflows, installations, and system dependencies.",
    image: desktopTestingChallenge,
    imageAlt: "Desktop application testing challenges across devices",
  },

  solution: {
    title: "OUR DESKTOP TESTING SOLUTION",
    description:
      "We validate functionality, installation and upgrades",
    image: desktopTestingSolution,
    imageAlt: "Desktop application testing and quality assurance",
  },

  whatWeTest: {
    title: "WHAT WE TEST",
    cards: [
      {
        icon: webIcon,
        title: "OS Compatability",
        description: "Windows, macOS, Linux",
      },
      {
        icon: mobileIcon,
        title: "Install & Upgrade Flows",
        description: "Smooth Deployments",
      },
      {
        icon: apiIcon,
        title: "Functional Accuracy",
        description: "Business workflows",
      },
    ],
  },

  approach: {
    title: "OUR APPROACH",
    description:
      "Our desktop application testing approach focuses on validating functionality, performance, stability, and compatibility across multiple operating systems and hardware environments. We combine manual and automated testing techniques to verify business workflows, system integrations, and user interface behavior. By identifying defects early and ensuring consistent performance under real-world conditions, we help deliver secure, reliable, and high-quality desktop software solutions.",
  },

  businessImpact: {
    title: "BUSINESS IMPACT",
    items: [
      {
        icon: businessIcon1,
        text: "Stable deployments",
      },
      {
        icon: businessIcon2,
        text: "Reduced maintenance effort",
      },
      {
        icon: businessIcon3,
        text: "Improved user productivity",
      },
      {
        icon: businessIcon4,
        text: "Reliable system performance",
      },
    ],
  },
},

"salesforce-testing": {
  title: "SALESFORCE TESTING SOLUTIONS",

  subtitle:
    "Reliable Salesforce Testing for Business Success",

  description:
      "End-to-end Salesforce testing to ensure flawless CRM operations.",

  heroImage: salesforceTestingHero,

  cta: {
    label: "Request a Slesforce QA Consultation",
    href: withBase("/contact"),
  },

  challenge: {
    title: "THE CHALLENGE",
    description:
      "Complex Salesforce customizations increase the risk of workflow failures and data issues",
    image: salesforceTestingChallenge,
    imageAlt: "Salesforce application testing challenges across devices",
  },

  solution: {
    title: "OUR SALESFORCE TESTING SOLUTION",
    description:
      "We validate configurations, integrations, automations, and data migrations end-to-end",
    image: salesforceTestingSolution,
    imageAlt: "Salesforce application testing and quality assurance",
  },

  whatWeTest: {
    title: "WHAT WE TEST",
    cards: [
      {
        icon: webIcon,
        title: "Workflow Automation",
        description: "Business process validation",
      },
      {
        icon: mobileIcon,
        title: "Reports & Dashboards",
        description: "Accurate insights",
      },
      {
        icon: apiIcon,
        title: "Third-Party Integrations",
        description: "Seamless connectivity",
      },
      {
        icon: desktopIcon,
        title: "Data Migration",
        description: "Error-free tranfers",
      },
      {
        icon: apiIcon,
        title: "User Acceptance Testing",
        description: "Business readiness",
      },
    ],
  },

  approach: {
    title: "OUR APPROACH",
    description:
      "We validate data integrity, performance, and security through comprehensive database testing techniques. Our approach ensures accurate data processing, reliable storage, and optimized system performance.",
  },

  businessImpact: {
    title: "BUSINESS IMPACT",
    items: [
      {
        icon: businessIcon1,
        text: "Improved CRM reliability",
      },
      {
        icon: businessIcon2,
        text: "Error-free operations",
      },
      {
        icon: businessIcon3,
        text: "Higher user adoption",
      },
      {
        icon: businessIcon4,
        text: "Business continuity",
      },
    ],
  },
},

"database-testing": {
  title: "DATABASE TESTING SOLUTIONS",

  subtitle:
    "Database Testing for Secure and Accurate Data Systems",

  description:
      "Thorough database testing to ensure accuracy, security, and consistency.",

  heroImage: databaseTestingHero,

  cta: {
    label: "Request a Database Testing Consultation",
    href: withBase("/contact"),
  },

  challenge: {
    title: "THE CHALLENGE",
    description:
      "Data inconsistencies, performance bottlenecks, and security gaps can disrupt applications and impact critical business decisions.",
    image: databaseTestingChallenge,
    imageAlt: "Database application testing challenges across devices",
  },

  solution: {
    title: "OUR DATABASE TESTING SOLUTION",
    description:
      "We perform comprehensive database testing to ensure data integrity, optimal performance, and secure access across your applications.",
    image: databaseTestingSolution,
    imageAlt: "Database application testing and quality assurance",
  },

  whatWeTest: {
    title: "WHAT WE TEST",
    cards: [
      {
        icon: webIcon,
        title: "Data Integrity & Validation",
        description: "Accuracy and consistency checks",
      },
      {
        icon: mobileIcon,
        title: "Performance & Load Testing",
        description: "Query speed and scalability",
      },
      {
        icon: apiIcon,
        title: "Security & Access Control",
        description: "Role-based permissions",
      },
      {
        icon: performanceIcon,
        title: "Data Migration Testing",
        description: "Error-free data transfers",
      },
      {
        icon: "mdi:shield-check",
        title: "Stored Procedures & Triggers",
        description: "Business logic validation",
      },
    ],
  },

  approach: {
    title: "OUR APPROACH",
    description:
      "Our database testing approach focuses on validating data integrity, performance, security, and compliance across complex data systems. We perform structured functional and automated testing to verify data accuracy, schema validation, stored procedures, and transaction handling. By identifying risks early and ensuring consistency across environments, we help organizations maintain stable, secure, and reliable database-driven applications.",
  },

  businessImpact: {
    title: "BUSINESS IMPACT",
    items: [
      {
        icon: businessIcon1,
        text: "Accurate and reliable data",
      },
      {
        icon: businessIcon2,
        text: "Improved application performance",
      },
      {
        icon: businessIcon3,
        text: "Reduced data-related risks",
      },
      {
        icon: businessIcon4,
        text: "Secure and compliant systems",
      },
    ],
  },
},

};
