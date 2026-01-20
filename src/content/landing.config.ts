import type { LandingConfig } from "./landing.schemas";

export const config: LandingConfig = {
    meta: {
        title: "Startup Landing Kit",
        description: "Launch your startup in hours with this conversion-focused landing page kit.",
        lang: "en",
        ogImage: "/placeholders/og.png",
        favicon: "/placeholders/favicon.svg",
    },
    branding: {
        logo: {
            src: "/placeholders/logo.svg",
            alt: "AcmeAI Logo",
        },
        colors: {
            primary: "#2563eb",
            secondary: "#f1f5f9",
        },
    },
    waitlist: {
        provider: "mock",
    },
    hero: {
        headline: "Automate your workflow in seconds, not hours.",
        subheadline: "Stop wasting time on manual data entry. Integrate your tools, set your rules, and let AcmeAI handle the rest.",
        primaryCta: "Join Waitlist",
        secondaryCta: "Watch Demo",
        secondaryCtaLink: "#demo",
        image: {
            src: "/placeholders/product-shot.png",
            alt: "AcmeAI Dashboard Interface",
        },
        trust: {
            metric: {
                value: "10,000+",
                label: "Founders automating daily"
            }
        }
    },
    socialProof: {
        logos: [
            { name: "TechCrunch", src: "/placeholders/logo.png" },
            { name: "Forbes", src: "/placeholders/logo.png" },
            { name: "ProductHunt", src: "/placeholders/logo.png" },
            { name: "IndieHackers", src: "/placeholders/logo.png" },
        ]
    },
    productExplanation: {
        heading: "See how it works",
        subheading: "Simple, powerful, and built for speed.",
        steps: [
            { image: "/placeholders/product-shot.png", caption: "1. Connect your favourite apps." },
            { image: "/placeholders/product-shot.png", caption: "2. Define your logic with AI." },
            { image: "/placeholders/product-shot.png", caption: "3. Watch your productivity soar." }
        ]
    },
    howItWorks: {
        heading: "3 Simple Steps to Freedom",
        steps: [
            {
                title: "Connect",
                description: "Link your existing tools with one click.",
                icon: "Plug",
            },
            {
                title: "Configure",
                description: "Tell our AI what you want to automate.",
                icon: "Settings",
            },
            {
                title: "Relax",
                description: "We handle the repetitive tasks for you.",
                icon: "Coffee",
            },
        ],
    },
    valueBenefits: {
        heading: "Why top founders choose us",
        benefits: [
            { title: "Save 20+ Hours/Week", description: "Reclaim your time for high-leverage work." },
            { title: "Zero Coding Required", description: "If you can write an email, you can automate." },
            { title: "Enterprise Security", description: "Bank-grade encryption keeps your data safe." },
        ]
    },
    pricing: {
        heading: "Simple, transparent pricing",
        subheading: "Start for free, upgrade as you grow.",
        plans: [
            {
                name: "Starter",
                price: "$0",
                description: "Perfect for side projects.",
                features: ["5 Automations", "Basic Support", "Community Access"],
                cta: "Start Free",
            },
            {
                name: "Pro",
                price: "$29/mo",
                description: "For serious founders.",
                features: ["Unlimited Automations", "Priority Support", "Advanced Analytics"],
                cta: "Get Pro",
                popular: true,
            },
            {
                name: "Business",
                price: "$99/mo",
                description: "For scaling teams.",
                features: ["Team Seats", "SSO", "Dedicated Account Manager"],
                cta: "Contact Sales",
            },

        ],
        annualToggle: true
    },
    faq: {
        heading: "Questions? We have answers.",
        items: [
            {
                question: "Is there a free trial?",
                answer: "Yes, our Starter plan is free forever.",
            },
            {
                question: "Can I cancel anytime?",
                answer: "Absolutely. No lock-in contracts.",
            },
            {
                question: "Is my data secure?",
                answer: "We use AES-256 encryption and never sell your data.",
            },
            {
                question: "Do I need to code?",
                answer: "Not at all. Our visual builder is drag-and-drop.",
            },
        ],
    },
    finalCta: {
        heading: "Ready to reclaim your time?",
        primaryCta: "Join the Waitlist",
        trustSnippet: "No credit card required. Cancel anytime.",
    },
    footer: {
        copyright: "© 2026 AcmeAI Inc.",
        links: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
        ],
        socials: [
            { platform: "Twitter", href: "#" },
            { platform: "LinkedIn", href: "#" },
        ],
    },
};
