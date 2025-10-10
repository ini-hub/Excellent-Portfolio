// src/data.ts
import type { LightboxData, CaseStudy, PortfolioLink } from './types';

// --- LIGHTBOX DATA --- 

export const recognitionImages: LightboxData[] = [
    { id: "wita-lightbox", src: "/award-wita-placeholder.jpeg", alt: "Women in Tech Africa Award Nominee", caption: "Women-in-Tech Africa Nomination" },
    { id: "babcock-lightbox", src: "/B.Sc-Certificate.jpeg", alt: "Best Graduating Student Babcock University", caption: "Best Graduating Student" },
    { id: "certs-lightbox", src: "/certifications-placeholder.jpg", alt: "Key Professional Certifications", caption: "ISTQB Certified Tester" },
    { id: "pro-lightbox", src: "/Award-of-Service.jpeg", alt: "Award of Service", caption: "Award of Service as PRO" },
];

export const galleryImages: LightboxData[] = [
    { id: "gallery-pic-1", src: "/speaking-pic-1.jpeg", alt: "Speaking at a Conference", caption: "Speaking at a Conference" },
    { id: "gallery-pic-2", src: "/team-pic-2.JPG", alt: "Leading a team session", caption: "Team Session at Dubai Technology Entrepreneuer Centre" },
    { id: "gallery-pic-6", src: "/me-at-DTEC.JPG", alt: "DTEC", caption: "Dubai Technology Entrepreneuer Centre (DTEC)" },
    { id: "gallery-pic-4", src: "/colleague-pic-4.jpeg", alt: "Working with colleagues", caption: "Picture with colleagues" },
    { id: "gallery-pic-3", src: "/award-wita-placeholder.jpeg", alt: "Receiving a award", caption: "Receiving a Nomination" },
    { id: "gallery-pic-5", src: "/ceo-walk-it.JPG", alt: "CEO @ Walk Mobility", caption: "Walk Mobility CEO" },
    { id: "gallery-pic-7", src: "/excellent-at-EMTECH.PNG", alt: "Visit to EMTECH", caption: "Visit to EMTECH" },
    { id: "gallery-pic-8", src: "/moniepoint.jpeg", alt: "Working at Moniepoint", caption: "QA at Moniepoint" },
];

// Combine all lightbox data
export const allLightboxes: LightboxData[] = [...recognitionImages, ...galleryImages];

// --- SKILLS DATA ---

export const functionalSkills: string[] = [
    "Selenium & Cypress (TDD)",
    "Mobile App Testing with Appium",
    "API Testing with Postman | Swagger",
    "Functional Testing (Gherkin | BDD)",
];
export const nonFunctionalSkills: string[] = [
    "Performance | Load Testing using JMeter",
    "AI Testing ASTQB & ML Model Testing",
    "Automation Testing & CI/CD processes",
    "Test Design Documentation & Defect Tracking",
];

// --- PORTFOLIO LINKS ---

export const portfolioLinks: PortfolioLink[] = [
    { href: "/web-automation", title: "Web Automation (Cypress, GitHub)", description: "Showcase: GitHub Link, Cypress Script Examples, CI/CD Integration Artifacts." },
    { href: "/mobile-automation", title: "Mobile Automation (Appium, Frameworks)", description: "Showcase: Mobile App Automation Framework/Scripts, Cross-Platform Testing Artifacts." },
    { href: "/api-testing", title: "API Testing (Postman, Backend)", description: "Showcase: Postman Script Runs, Collection Links, Backend Validation Scripts." },
    { href: "/performance-testing", title: "Performance Testing (JMeter)", description: "Showcase: JMeter Automation Scripts, Performance Results/Reports, Load Testing Scenarios." },
    { href: "/documentation", title: "Documentation & Process", description: "Showcase: Linked Test Cases, Test Reports (e.g., Cucumber/Allure), Test Design Documents." },
];

// --- CASE STUDIES ---

export const caseStudies: CaseStudy[] = [
    {
        title: "CEO + Engineer",
        company: "Walk Mobility",
        description: "Built a revolutionary device called “White Bot” designed to help visually impaired individuals navigate the world around them with ease and confidence.",
        focus: "Object Detection, Advocating Against Stigmatization, Innovate Mobility.",
        companyUrl: "https://resumii.netlify.app/",
    },
    {
        title: "AI Model QA Engineer",
        company: "Moniepoint Group",
        description: "Conducted rigorous testing of AI models for customer onboarding and transaction screening, ensuring alignment with sanction lists and PEP (Politically Exposed Persons). Validated model performance by analysing key metrics such as Precision, Recall and F1 Score.",
        focus: "Regulatory Compliance, Model Performance Validation, End-to-End Web & Mobile Testing.",
        companyUrl: "https://moniepoint.com/ng/business",
    },
    {
        title: "Quality Assurance Engineering Lead",
        company: "Epev Studios (Canada)",
        description: "Led QA for complex ride-hailing systems, testing key features like pricing correlation, GPS tracking, and dynamic fare calculations. Verified third-party integrations (Payment gateways, Mapping services). Automated mobile workflows using Appium and Cypress.",
        focus: "System Integration, Stakeholder Alignment, Mobile Automation, Firebase/MongoDB Backend Validation.",
        companyUrl: "https://epevsstudio.com/",
    },
];