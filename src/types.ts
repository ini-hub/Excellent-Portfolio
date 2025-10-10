// src/types.ts

/** Data structure for all Lightbox/Image elements (Recognition, Gallery) */
export interface LightboxData {
    id: string;
    src: string;
    alt: string;
    caption: string;
}

/** Data structure for Case Study blocks */
export interface CaseStudy {
    title: string;
    company: string;
    description: string;
    focus: string;
    companyUrl: string;
}

/** Data structure for Technical Portfolio links */
export interface PortfolioLink {
    href: string;
    title: string;
    description: string;
}