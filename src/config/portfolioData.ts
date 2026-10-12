/**
 * ============================================================================
 * GHANESH PORTFOLIO CONFIGURATION
 * ============================================================================
 */
import heroPortrait from '../assets/images/ghanesh_hero_portrait_1791484074300.jpg';
import workMotionObservation from '../assets/images/work_motion_observation_1791739153686.jpg';
import workAdaniBlueprint from '../assets/images/work_adani_blueprint_1791739164289.jpg';
import workHookRetention from '../assets/images/work_hook_retention_1791739188541.jpg';
import workRawVsEdit from '../assets/images/work_raw_vs_edit_1791739202718.jpg';

export interface ProjectItem {
  id: string;
  title: string;
  sectionCategory: string; // The dedicated section name
  categoryLabel: string;
  description: string;
  longDescription?: string;
  client?: string;
  year: string;
  image: string;
  instagramUrl: string;
  tags: string[];
  aspectRatio: 'vertical' | 'landscape';
  metrics?: string;
  hookQuote?: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const PORTFOLIO_DATA = {
  brand: {
    name: "GHANESH",
    title: "VIDEO EDITOR & VISUAL DESIGNER",
    availabilityText: "AVAILABLE FOR PROJECTS",
    isAvailable: true,
  },

  hero: {
    statusBadge: "AVAILABLE FOR PROJECTS",
    headingLine1: "Video Editor &",
    headingLine2: "Visual Designer",
    description: "Crafting cinematic edits, powerful visuals and engaging digital experiences.",
    primaryCtaText: "VIEW MY WORK",
    secondaryCtaText: "CONTACT ME",
    profilePhoto: heroPortrait,
    altText: "Ghanesh - Video Editor & Visual Designer",
    marqueeWords: [
      "VIDEO EDITING",
      "MOTION DESIGN",
      "VISUAL DESIGN",
      "BRANDING",
      "DOCUMENTARY",
      "COLOR GRADING",
      "SOUND DESIGN",
      "CINEMATIC REELS"
    ],
  },

  // SEPARATE SECTIONS FOR SELECTED WORK (Replaced generic "ALL" section)
  workSections: [
    {
      id: "motion-design",
      sectionTitle: "01. MOTION DESIGN & VISUAL DIRECTION",
      sectionSubtitle: "Avant-garde visual pacing, editorial poster animation & kinetic typography.",
      project: {
        id: "art-of-observation",
        title: "The Art of Observation // Motion & Visual Direction",
        sectionCategory: "MOTION DESIGN",
        categoryLabel: "MOTION DESIGN & ART DIRECTION",
        description: "Editorial Swiss-style poster animation blending film observation analysis (Breaking Bad, Zootopia, Sci-Fi) with kinetic typography.",
        longDescription: "A masterclass in editorial graphic motion. Combining vintage paper textures, bold typography, speed curves, and visual metaphors to demonstrate how observation shapes creative storytelling. Every transition is timed to voice cadence with custom spatial audio design.",
        client: "Miracle Studios",
        year: "2026",
        image: workMotionObservation,
        instagramUrl: "https://www.instagram.com/reel/DeZMDVcTcPl/",
        tags: ["After Effects", "Kinetic Typography", "Editorial Motion", "Sound Design"],
        aspectRatio: "vertical" as const,
        metrics: "99% Viewer Retention • Award-Grade Motion",
        hookQuote: "“It's not about the skills. It's about how you observe the things you see.”"
      }
    },
    {
      id: "infographic-reels",
      sectionTitle: "02. BUSINESS & INFOGRAPHIC REELS",
      sectionSubtitle: "Complex corporate narratives transformed into high-converting 3D visual blueprints.",
      project: {
        id: "adani-blueprint",
        title: "The Adani Blueprint // Business Case Study Breakdown",
        sectionCategory: "INFOGRAPHIC REELS",
        categoryLabel: "INFOGRAPHIC & BUSINESS STORYTELLING",
        description: "Data-driven business analysis reel featuring isometric 3D architectural miniatures, blueprint grid motion, and strategic enterprise breakdown.",
        longDescription: "Turning corporate financial strategy into compelling visual entertainment. Uses blueprint grid overlays, Before/After isometric plant models, and kinetic data graphs to explain how infrastructure, power, and ports created an empire.",
        client: "Business Analysis Series",
        year: "2026",
        image: workAdaniBlueprint,
        instagramUrl: "https://www.instagram.com/reel/DeZMnskTdaA/",
        tags: ["Premiere Pro", "3D Projection", "Blueprint FX", "Motion Graphics"],
        aspectRatio: "vertical" as const,
        metrics: "250K+ Views • High Business Engagement",
        hookQuote: "“Asli game industry ka nahi, infrastructure ka hota hai.”"
      }
    },
    {
      id: "commercial-hooks",
      sectionTitle: "03. COMMERCIAL & PSYCHOLOGICAL HOOK REELS",
      sectionSubtitle: "Scroll-stopping psychological hooks engineered to capture and convert attention.",
      project: {
        id: "attention-retention",
        title: "Attention & Retention // Psychological Hook Reel",
        sectionCategory: "COMMERCIAL REELS",
        categoryLabel: "COMMERCIAL & HIGH-RETENTION EDITS",
        description: "High-retention psychological storytelling reel engineered with frame-accurate sound design, classical visual metaphors, and rapid hook pacing.",
        longDescription: "Engineered specifically for short-form virality. Features gold Spartan armor lighting, layered curiosity triggers, classical Renaissance art framing, and hyper-targeted narrative pacing that drives immediate viewer action.",
        client: "Creator Growth Project",
        year: "2026",
        image: workHookRetention,
        instagramUrl: "https://www.instagram.com/reel/DeZLpfRTDis/",
        tags: ["Sound Design", "Pacing & Retention", "Visual Metaphors", "Viral Hooks"],
        aspectRatio: "vertical" as const,
        metrics: "94% Completion Rate • #1 Category Reach",
        hookQuote: "“Because the right message doesn't reach everyone, it reaches the right one.”"
      }
    },
    {
      id: "raw-vs-edit",
      sectionTitle: "04. RAW VS EDIT TRANSFORMATIONS",
      sectionSubtitle: "Side-by-side proof showing the dramatic commercial impact of professional editing.",
      project: {
        id: "real-estate-raw-vs-edit",
        title: "Raw vs Edit // Commercial Real Estate Transformation",
        sectionCategory: "RAW VS EDIT",
        categoryLabel: "RAW VS EDIT BREAKDOWN",
        description: "Direct side-by-side comparison demonstrating color grading, glowing vector route tracking, and luxury commercial polish from phone camera footage.",
        longDescription: "A clear demonstration of production value transformation. On the left: plain handheld smartphone camera recording. On the right: cinematic color science, dynamic gold line map animations, 3D metric pillars, and commercial-grade real estate sales conversion power.",
        client: "Gurgaon Property Showcase",
        year: "2026",
        image: workRawVsEdit,
        instagramUrl: "https://www.instagram.com/reel/DeZLbggzWwU/",
        tags: ["Color Grading", "Motion Tracking", "Real Estate Reel", "Raw vs Edit"],
        aspectRatio: "vertical" as const,
        metrics: "3.2x Lead Conversion • Luxury Grade",
        hookQuote: "“Raw mobile footage elevated into an irresistible luxury sales asset.”"
      }
    }
  ],

  // ABOUT ME SECTION (Updated: "4K" instead of "4K / 6K")
  about: {
    badge: "THE CREATIVE BEHIND THE EDITS",
    title: "ABOUT ME",
    description: "I'm Ghanesh, a video editor and visual designer focused on creating cinematic, engaging and visually powerful content. I combine editing, motion, design and storytelling to turn ideas into strong visual experiences.",
    secondaryDescription: "Whether cutting high-energy short-form reels that stop the scroll or composing cinematic brand narratives, every frame is treated with obsessive attention to rhythm, color grading, sound design, and typography.",
    skills: [
      "VIDEO EDITING",
      "AFTER EFFECTS",
      "PREMIERE PRO",
      "MOTION DESIGN",
      "COLOR GRADING",
      "BRANDING",
      "STORYTELLING"
    ],
    experienceHighlights: [
      { label: "High-Engagement Videos", value: "100+" },
      { label: "Audience Impressions", value: "3.5M+" },
      { label: "Client Satisfaction", value: "100%" },
      { label: "Master Resolution", value: "4K" }, // Changed from "4K / 6K" to "4K"
    ],
    tools: [
      { name: "Adobe Premiere Pro", role: "Timeline & Narrative Editing" },
      { name: "Adobe After Effects", role: "Kinetic Motion & Visual FX" },
      { name: "DaVinci Resolve", role: "Color Science & Grading" },
      { name: "Adobe Photoshop", role: "Visual Design & Cover Art" },
      { name: "Adobe Illustrator", role: "Vector Systems & Logo Marks" }
    ]
  },

  // SERVICES SECTION (Medium / Small compact size)
  services: [
    {
      number: "01",
      title: "VIDEO EDITING",
      description: "Cinematic edits, reels, social content and storytelling.",
      deliverables: ["Short-form reels & TikToks", "Pacing & sound design", "Color grading & cleanup"]
    },
    {
      number: "02",
      title: "MOTION DESIGN",
      description: "Dynamic motion graphics, typography and visual effects.",
      deliverables: ["Kinetic title sequences", "Logo reveals & UI", "Visual FX & transitions"]
    },
    {
      number: "03",
      title: "VISUAL DESIGN",
      description: "Creative visual systems, thumbnails and promotional assets.",
      deliverables: ["High-CTR thumbnails", "Banners & poster art", "Social media carousels"]
    },
    {
      number: "04",
      title: "BRANDING",
      description: "Visual identity, creative direction and branded content.",
      deliverables: ["Content design kits", "Color systems & lower-thirds", "Brand guidelines"]
    }
  ] as ServiceItem[],

  contact: {
    ctaHeading: "LET'S CREATE SOMETHING GREAT.",
    ctaDescription: "Have a project in mind? Let's turn your idea into something visually powerful.",
    instagramUrl: "https://www.instagram.com/whoghanesh?dlrf=MTk5MXRoMDkybGlpMw==",
    instagramHandle: "@whoghanesh",
    email: "ghaneshmauryag@gmail.com",
    location: "Available Worldwide (Remote)",
    turnaroundTime: "Fast turnaround • Flexible timezones"
  },

  footer: {
    brandName: "GHANESH",
    subtitle: "VIDEO EDITOR & VISUAL DESIGNER",
    copyright: "© 2026 Ghanesh. All rights reserved.",
    links: [
      { name: "Instagram", href: "https://www.instagram.com/whoghanesh?dlrf=MTk5MXRoMDkybGlpMw==", external: true },
      { name: "Works", href: "#works", external: false },
      { name: "About", href: "#about", external: false },
      { name: "Services", href: "#services", external: false },
      { name: "Contact", href: "#contact", external: false }
    ]
  }
};
