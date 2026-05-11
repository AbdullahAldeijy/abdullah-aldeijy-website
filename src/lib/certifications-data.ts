export interface Certification {
  id: string;
  code: string;
  title: string;
  level: "Associate" | "Expert" | "Fundamentals";
  badgeImage: string;
  issuer: string;
  description: string;
  skills: string[];
  color: string;
  glowColor: string;
  verifyUrl: string;
  year: string;
}

export const certifications: Certification[] = [
  {
    id: "az-104",
    code: "AZ-104",
    title: "Azure Administrator Associate",
    level: "Associate",
    badgeImage: "/images/badges/az-104.png",
    issuer: "Microsoft",
    description:
      "Validates skills in implementing, managing, and monitoring Azure environments including identity, governance, storage, compute, and virtual networks.",
    skills: [
      "Azure Identity & Governance",
      "Storage Management",
      "Compute Resources",
      "Virtual Networking",
      "Monitoring & Backup",
    ],
    color: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.5)",
    verifyUrl:
      "https://learn.microsoft.com/en-us/users/abdullah-aldeijy/credentials/6584b9cb87fd9aec",
    year: "2025",
  },
  {
    id: "az-204",
    code: "AZ-204",
    title: "Azure Developer Associate",
    level: "Associate",
    badgeImage: "/images/badges/az-204.png",
    issuer: "Microsoft",
    description:
      "Demonstrates expertise in developing cloud solutions on Azure: compute, storage, security, communication, and monitoring integrations.",
    skills: [
      "Azure Compute Solutions",
      "Storage Integration",
      "Security Implementation",
      "Azure Functions & Web Apps",
      "API Management",
    ],
    color: "from-purple-500 to-indigo-500",
    glowColor: "rgba(139, 92, 246, 0.5)",
    verifyUrl:
      "https://learn.microsoft.com/en-us/users/abdullah-aldeijy/credentials/81f587a6a50cf4f0",
    year: "2025",
  },
  {
    id: "az-305",
    code: "AZ-305",
    title: "Azure Solutions Architect Expert",
    level: "Expert",
    badgeImage: "/images/badges/az-305.png",
    issuer: "Microsoft",
    description:
      "Expert-level certification proving the ability to design cloud and hybrid solutions including compute, network, storage, monitoring, and security on Azure.",
    skills: [
      "Identity & Governance Design",
      "Data Storage Solutions",
      "Business Continuity Strategy",
      "Infrastructure Design",
      "Cloud Architecture",
    ],
    color: "from-amber-500 to-orange-500",
    glowColor: "rgba(245, 158, 11, 0.5)",
    verifyUrl:
      "https://learn.microsoft.com/en-us/users/abdullah-aldeijy/credentials/166ef70da9f1e563",
    year: "2025",
  },
];
