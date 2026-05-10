"use client";

import type { ComponentType, SVGProps } from "react";
import { motion, type Variants } from "framer-motion";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";

const ENTRANCE_EASE = [0.22, 1, 0.36, 1] as const;

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;
type IconVariant = "primary" | "ghost";

type SocialIcon = {
  label: string;
  href: string;
  Icon: SvgIcon;
  external: boolean;
  variant: IconVariant;
  hoverShadow: string;
};

const GithubGlyph: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinGlyph: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const YoutubeGlyph: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const MailGlyph: SvgIcon = (props) => <Mail {...props} />;

const ICONS: SocialIcon[] = [
  {
    label: "Email",
    href: `mailto:${SITE.email}`,
    Icon: MailGlyph,
    external: false,
    variant: "ghost",
    hoverShadow: "hover:shadow-blue-500/50",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/abdullah-aldeijy",
    Icon: LinkedinGlyph,
    external: true,
    variant: "ghost",
    hoverShadow: "hover:shadow-blue-600/50",
  },
  {
    label: "GitHub",
    href: "https://github.com/abdullah-aldeijy",
    Icon: GithubGlyph,
    external: true,
    variant: "ghost",
    hoverShadow: "hover:shadow-white/30",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@abdullah-aldeijy",
    Icon: YoutubeGlyph,
    external: true,
    variant: "ghost",
    hoverShadow: "hover:shadow-red-500/50",
  },
];

const groupVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.5 },
  },
};

const rowVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: ENTRANCE_EASE },
  },
};

export function SocialContact() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={groupVariants}
      className="pointer-events-auto absolute bottom-12 left-12 z-20 hidden md:block"
    >
      <motion.a
        variants={itemVariants}
        href={`mailto:${SITE.email}`}
        className="mb-4 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-neutral-300 backdrop-blur-md transition-colors ease-out-quint hover:border-white/30 hover:text-white"
      >
        {SITE.email}
      </motion.a>

      <motion.div variants={rowVariants} className="flex gap-3">
        {ICONS.map(({ label, href, Icon, external, variant, hoverShadow }) => (
          <motion.a
            key={label}
            variants={itemVariants}
            href={href}
            title={label}
            aria-label={label}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg",
              variant === "primary"
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/40"
                : "border border-white/10 bg-white/5 text-neutral-400 backdrop-blur-md hover:bg-white/10 hover:text-white",
              hoverShadow,
            )}
          >
            <Icon className="h-5 w-5" />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
