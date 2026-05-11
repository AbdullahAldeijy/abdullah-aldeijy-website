export interface Experience {
  id: string;
  company: string;
  logo: string;
  role: string;
  type: "Full-time" | "Part-time" | "Internship" | "Consultant" | "Co-Founder";
  startDate: string;
  endDate: string | "Present";
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
  brandColor: string;
  glowColor: string;
  isCurrent: boolean;
}

export const experiences: Experience[] = [
  {
    id: "lunixa",
    company: "Lunixa Cloud",
    logo: "/images/lunixa.png",
    role: "Co-Founder & Solution Architect",
    type: "Co-Founder",
    startDate: "2025-06",
    endDate: "Present",
    location: "Riyadh, Saudi Arabia",
    description:
      "Co-founded a cloud consultancy delivering end-to-end services in migration, modernization, security, FinOps, and managed multi-cloud operations.",
    highlights: [
      "Designed multi-cloud architectures for enterprise clients",
      "Led cloud migration and modernization initiatives",
      "Implemented FinOps strategies for cost optimization",
      "Established security and governance frameworks",
    ],
    skills: ["Azure", "AWS", "GCP", "FinOps", "Cloud Architecture"],
    brandColor: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.4)",
    isCurrent: true,
  },
  {
    id: "mezzanine",
    company: "Mezzanine",
    logo: "/images/mezzanine.png",
    role: "Technology Consultant",
    type: "Consultant",
    startDate: "2025-01",
    endDate: "Present",
    location: "Riyadh, Saudi Arabia",
    description:
      "Providing strategic technology consulting services, helping organizations align their technical infrastructure with business objectives.",
    highlights: [
      "Advisory on cloud transformation roadmaps",
      "Technology stack assessment and recommendations",
      "Digital transformation strategy",
    ],
    skills: ["Tech Strategy", "Cloud Consulting", "Digital Transformation"],
    brandColor: "from-zinc-400 to-zinc-200",
    glowColor: "rgba(212, 212, 216, 0.3)",
    isCurrent: true,
  },
  {
    id: "setup-master",
    company: "Setup Master",
    logo: "/images/setup-master.png",
    role: "Product Manager Consultant",
    type: "Part-time",
    startDate: "2021-01",
    endDate: "2026-01",
    location: "Saudi Arabia",
    description:
      "Product management consultancy for an e-commerce leader specializing in PC hardware and custom builds.",
    highlights: [
      "Defined product roadmap and feature prioritization",
      "Coordinated cross-functional teams",
      "Analyzed market trends in PC hardware industry",
      "Drove e-commerce optimization initiatives",
    ],
    skills: ["Product Management", "E-commerce", "Cross-functional Leadership"],
    brandColor: "from-blue-600 to-indigo-600",
    glowColor: "rgba(79, 70, 229, 0.4)",
    isCurrent: false,
  },
  {
    id: "ksu",
    company: "King Saud University",
    logo: "/images/king-saud-university.png",
    role: "Software Developer Intern",
    type: "Internship",
    startDate: "2024-04",
    endDate: "2024-07",
    location: "Riyadh, Saudi Arabia",
    description:
      "Coop training at the Deanship of E-Transactions, contributing to internal software development initiatives.",
    highlights: [
      "Developed and maintained internal software solutions",
      "Collaborated with senior developers on enterprise systems",
      "Gained hands-on experience with government tech ecosystems",
    ],
    skills: ["Software Development", "Team Collaboration", "Enterprise Systems"],
    brandColor: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.4)",
    isCurrent: false,
  },
];

export function calculateDuration(start: string, end: string): string {
  const startDate = new Date(`${start}-01`);
  const endDate = end === "Present" ? new Date() : new Date(`${end}-01`);

  const months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) return `${months} mo${months > 1 ? "s" : ""}`;
  if (remainingMonths === 0) return `${years} yr${years > 1 ? "s" : ""}`;
  return `${years} yr${years > 1 ? "s" : ""} ${remainingMonths} mo${remainingMonths > 1 ? "s" : ""}`;
}

export function formatDate(date: string): string {
  if (date === "Present") return "Present";
  const [year, month] = date.split("-");
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${monthNames[parseInt(month, 10) - 1]} ${year}`;
}
