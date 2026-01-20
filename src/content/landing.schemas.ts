import { z } from "zod";

export const ConfigSchema = z.object({
    meta: z.object({
        title: z.string(),
        description: z.string(),
        lang: z.string().default("en"),
        ogImage: z.string().optional(),
        favicon: z.string().optional(),
    }),
    branding: z.object({
        logo: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        colors: z.object({
            primary: z.string(),
            secondary: z.string().optional(),
        }).optional(),
    }),
    waitlist: z.object({
        provider: z.enum(["mock", "sheets", "resend"]),
    }),
    hero: z.object({
        headline: z.string(),
        subheadline: z.string(),
        primaryCta: z.string(),
        secondaryCta: z.string().optional(),
        secondaryCtaLink: z.string().optional(),
        video: z.string().optional(),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }).optional(),
        trust: z.object({
            logos: z.array(z.object({
                name: z.string(),
                src: z.string(),
            })).optional(),
            metric: z.object({
                value: z.string(),
                label: z.string(),
            }).optional(),
        }).optional(),
    }),
    socialProof: z.object({
        logos: z.array(z.object({
            name: z.string(),
            src: z.string(),
        })).optional(),
        metric: z.object({
            value: z.string(),
            label: z.string(),
        }).optional(),
        testimonials: z.array(z.object({
            quote: z.string(),
            author: z.string(),
            role: z.string(),
            avatar: z.string().optional(),
        })).optional(),
    }).optional(),
    productExplanation: z.object({
        heading: z.string(),
        subheading: z.string().optional(),
        steps: z.array(z.object({
            image: z.string(),
            caption: z.string(),
        })).min(2).max(4),
    }),
    howItWorks: z.object({
        heading: z.string(),
        subheading: z.string().optional(),
        steps: z.array(z.object({
            title: z.string(),
            description: z.string(),
            icon: z.string().optional(),
        })).length(3, "Must have exactly 3 steps"),
    }),
    valueBenefits: z.object({
        heading: z.string(),
        benefits: z.array(z.object({
            title: z.string(),
            description: z.string(),
            icon: z.string().optional(),
        })).min(3).max(6),
    }),
    pricing: z.object({
        heading: z.string(),
        subheading: z.string().optional(),
        plans: z.array(z.object({
            name: z.string(),
            price: z.string(), // e.g. "$29" or "$29/mo"
            description: z.string(),
            features: z.array(z.string()),
            cta: z.string(),
            popular: z.boolean().optional(),
        })).min(1).max(3),
        annualToggle: z.boolean().default(false), // Logic left to component to implementation details or simple display for now
    }).optional(),
    faq: z.object({
        heading: z.string(),
        items: z.array(z.object({
            question: z.string(),
            answer: z.string(),
        })).min(4).max(6),
    }),
    finalCta: z.object({
        heading: z.string(),
        subheading: z.string().optional(),
        primaryCta: z.string(),
        trustSnippet: z.string().optional(), // "No credit card required"
    }),
    footer: z.object({
        copyright: z.string(),
        links: z.array(z.object({
            label: z.string(),
            href: z.string(),
        })),
        socials: z.array(z.object({
            platform: z.string(),
            href: z.string(),
        })),
    }),
});

export type LandingConfig = z.infer<typeof ConfigSchema>;
