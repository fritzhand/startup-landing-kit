import type { LandingConfig } from "./landing.schemas";

export const config: LandingConfig = {
    meta: {
        title: "Startup Landing Kit",
        description: "A free, open-source landing page kit for startups. Built with React, Tailwind, and Vite.",
        lang: "en",
        ogImage: "/placeholders/og.png",
        favicon: "/placeholders/favicon.svg",
    },
    branding: {
        logo: {
            src: "/placeholders/logo.svg",
            alt: "Startup Kit Logo",
        },
        colors: {
            primary: "#2563eb",
            secondary: "#f1f5f9",
        },
    },
    waitlist: {
        provider: "mock", // "mock" | "sheets" | "resend"
    },
    hero: {
        headline: "Launch your startup in hours, not weeks.",
        subheadline: "The ultimate open-source landing page kit for founders. Clean code, conversion-focused, and ready to deploy.",
        primaryCta: "Get Early Access",
        secondaryCta: "View on GitHub",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0", // Placeholder
        bullets: ["Zero dependencies", "Mobile-first", "Dark mode ready"],
        socialProof: {
            heading: "Trusted by founders at",
            logos: [
                { name: "Acme", src: "/placeholders/logo.svg" },
                { name: "Globex", src: "/placeholders/logo.svg" },
                { name: "Soylent", src: "/placeholders/logo.svg" },
            ],
        },
    },
    problem: {
        heading: "Stop wasting time on landing pages.",
        subheading: "Founders spend too much time building the site instead of the product.",
        points: [
            {
                icon: "Clock",
                title: "Slow Development",
                description: "Building from scratch takes days of design and coding time you don't have.",
            },
            {
                icon: "LayoutTemplate",
                title: "Generic Templates",
                description: "Most templates feature bloated code and impossible-to-edit designs.",
            },
            {
                icon: "Zap",
                title: "Performance Issues",
                description: "Heavy builders and unoptimized images kill your conversion rates.",
            },
        ],
    },
    solution: {
        heading: "A better way to ship.",
        subheading: "Everything you need to validate your idea and collect emails.",
        steps: [
            {
                title: "Clone & Install",
                description: "Get the repo, install dependencies, and you're ready to go in 30 seconds.",
                image: "/placeholders/product-shot.png",
            },
            {
                title: "Customize Config",
                description: "Edit a single file to update all text, images, and colors. No complex code.",
                image: "/placeholders/product-shot.png",
            },
            {
                title: "Deploy Anywhere",
                description: "Push to Vercel or Netlify for free SSL and blazing fast hosting.",
                image: "/placeholders/product-shot.png",
            },
        ],
    },
    features: {
        heading: "Everything under the hood.",
        subheading: "Strictly what you need, nothing you don't.",
        list: [
            {
                title: "React + Vite + TS",
                description: "The modern standard for web development. Fast and type-safe.",
                icon: "Code",
            },
            {
                title: "Tailwind CSS v3",
                description: "Utility-first styling that makes customization a breeze.",
                icon: "Wind",
            },
            {
                title: "Waitlist Ready",
                description: "Integrated form handling for Sheets, Resend, or your own backend.",
                icon: "Mail",
            },
        ],
        useCases: [
            {
                title: "SaaS Products",
                description: "Validate software ideas quickly.",
            },
            {
                title: "Newsletters",
                description: "Collect subscribers before writing.",
            },
            {
                title: "Mobile Apps",
                description: "Get beta testers before the App Store.",
            },
        ],
    },
    testimonials: {
        heading: "Loved by developers.",
        items: [
            {
                quote: "This kit saved me a weekend of work. I launched my waitlist in 2 hours.",
                author: "Alex Rivera",
                role: "Indie Hacker",
                avatar: "/placeholders/avatar-1.png",
            },
            {
                quote: "Clean code, great design. Exactly what I needed for my new project.",
                author: "Sarah Chen",
                role: "CTO @ TechFlow",
                avatar: "/placeholders/avatar-1.png",
            },
            {
                quote: "The config-based setup is genius. Super easy to hand off to marketing.",
                author: "Mike Johnson",
                role: "Freelancer",
                avatar: "/placeholders/avatar-1.png",
            },
        ],
    },
    faq: {
        heading: "Frequently Asked Questions",
        items: [
            {
                question: "Is this free?",
                answer: "Yes, 100% open source under MIT License.",
            },
            {
                question: "Do I need to know React?",
                answer: "Basic knowledge helps, but you can get far just editing the config file.",
            },
            {
                question: "How do I deploy?",
                answer: "We recommend Vercel or Netlify. Just connect your repo and it works.",
            },
        ],
    },
    pricing: {
        heading: "Simple Pricing",
        plans: [
            {
                name: "Open Source",
                price: "$0",
                description: "Free forever.",
                features: ["Unlimited Projects", "MIT License", "Community Support"],
                cta: "Clone Now",
            },
        ],
    },
    footer: {
        copyright: "© 2026 VentureStudio, Ahmedabad University.",
        links: [
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
        ],
        socials: [
            { platform: "Twitter", href: "#" },
            { platform: "GitHub", href: "#" },
        ],
    },
};
