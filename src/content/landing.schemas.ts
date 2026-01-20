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
            primary: z.string(), // CSS hex or variable
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
        video: z.string().optional(), // YouTube embed ID or video URL
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }).optional(),
        bullets: z.array(z.string()),
        socialProof: z.object({
            heading: z.string(),
            logos: z.array(z.object({
                name: z.string(),
                src: z.string(),
            })),
        }).optional(),
    }),
    problem: z.object({
        heading: z.string(),
        subheading: z.string().optional(),
        points: z.array(z.object({
            icon: z.string(), // Lucide icon name
            title: z.string(),
            description: z.string(),
        })),
    }),
    solution: z.object({
        heading: z.string(),
        subheading: z.string().optional(),
        steps: z.array(z.object({
            title: z.string(),
            description: z.string(),
            image: z.string().optional(),
        })),
    }),
    features: z.object({
        heading: z.string(),
        subheading: z.string().optional(),
        list: z.array(z.object({
            title: z.string(),
            description: z.string(),
            icon: z.string().optional(),
        })),
        useCases: z.array(z.object({
            title: z.string(),
            description: z.string(),
        })).optional(),
    }),
    testimonials: z.object({
        heading: z.string(),
        items: z.array(z.object({
            quote: z.string(),
            author: z.string(),
            role: z.string(),
            avatar: z.string().optional(),
        })),
    }),
    pricing: z.object({
        heading: z.string(),
        subheading: z.string().optional(),
        plans: z.array(z.object({
            name: z.string(),
            price: z.string(),
            description: z.string(),
            features: z.array(z.string()),
            cta: z.string(),
            popular: z.boolean().optional(),
        })),
    }).optional(),
    faq: z.object({
        heading: z.string(),
        items: z.array(z.object({
            question: z.string(),
            answer: z.string(),
        })),
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
