import {
  Cloud,
  Code,
  Database,
  Layers,
  Settings,
  Terminal,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type Tool = {
  name: string;
  slug: string;
  color: string;
  iconUrl?: string;
};

export type Category = {
  id: number;
  title: string;
  icon: LucideIcon;
  color: string;
  tools: Tool[];
};

export const categories: Category[] = [
  {
    id: 1,
    title: "Cloud",
    icon: Cloud,
    color: "from-blue-500 to-cyan-500",
    tools: [
      {
        name: "Microsoft Azure",
        slug: "microsoftazure",
        color: "0078D4",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
      },
      {
        name: "AWS",
        slug: "amazonwebservices",
        color: "FF9900",
        iconUrl: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
      },
      { name: "Google Cloud", slug: "googlecloud", color: "4285F4" },
    ],
  },
  {
    id: 2,
    title: "DevOps",
    icon: Settings,
    color: "from-orange-500 to-red-500",
    tools: [
      { name: "Docker", slug: "docker", color: "2496ED" },
      { name: "Kubernetes", slug: "kubernetes", color: "326CE5" },
      { name: "Jenkins", slug: "jenkins", color: "D24939" },
      { name: "Terraform", slug: "terraform", color: "7B42BC" },
      { name: "Git", slug: "git", color: "F05032" },
      { name: "GitHub", slug: "github", color: "FFFFFF" },
      {
        name: "Azure DevOps",
        slug: "azuredevops",
        color: "0078D7",
        iconUrl:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/azuredevops/azuredevops-original.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Languages",
    icon: Code,
    color: "from-yellow-500 to-amber-500",
    tools: [
      { name: "Python", slug: "python", color: "3776AB" },
      { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
      { name: "Java", slug: "openjdk", color: "ED8B00" },
      { name: ".NET", slug: "dotnet", color: "512BD4" },
      {
        name: "PowerShell",
        slug: "powershell",
        color: "5391FE",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg",
      },
      { name: "Bash", slug: "gnubash", color: "4EAA25" },
    ],
  },
  {
    id: 4,
    title: "Databases",
    icon: Database,
    color: "from-emerald-500 to-teal-500",
    tools: [
      { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
      { name: "MySQL", slug: "mysql", color: "4479A1" },
      { name: "Firebase", slug: "firebase", color: "FFCA28" },
      { name: "Supabase", slug: "supabase", color: "3ECF8E" },
    ],
  },
  {
    id: 5,
    title: "Systems",
    icon: Terminal,
    color: "from-purple-500 to-pink-500",
    tools: [
      { name: "Linux", slug: "linux", color: "FCC624" },
      { name: "Ubuntu", slug: "ubuntu", color: "E95420" },
    ],
  },
  {
    id: 6,
    title: "Frameworks",
    icon: Layers,
    color: "from-sky-500 to-blue-500",
    tools: [
      { name: "React", slug: "react", color: "61DAFB" },
      { name: "Laravel", slug: "laravel", color: "FF2D20" },
    ],
  },
  {
    id: 7,
    title: "Tools",
    icon: Wrench,
    color: "from-violet-500 to-purple-500",
    tools: [
      {
        name: "VS Code",
        slug: "visualstudiocode",
        color: "007ACC",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      },
      { name: "Figma", slug: "figma", color: "F24E1E" },
    ],
  },
];
