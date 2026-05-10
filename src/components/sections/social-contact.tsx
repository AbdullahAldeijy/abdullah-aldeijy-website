"use client";

import type { ComponentType, SVGProps } from "react";
import { motion, type Variants } from "framer-motion";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";
import {
  GithubGlyph,
  LinkedinGlyph,
  YoutubeGlyph,
} from "@/components/ui/brand-icons";

const ENTRANCE_EASE = [0.22, 1, 0.36, 1] as const;

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

type SocialIcon = {
  label: string;
  href: string;
  Icon: SvgIcon;
  external: boolean;
  hoverShadow: string;
};

const MailGlyph: SvgIcon = (props) => <Mail {...props} />;

const ICONS: SocialIcon[] = [
  {
    label: "Email",
    href: SOCIAL_LINKS.email,
    Icon: MailGlyph,
    external: false,
    hoverShadow: "hover:shadow-blue-500/50",
  },
  {
    label: "LinkedIn",
    href: SOCIAL_LINKS.linkedin,
    Icon: LinkedinGlyph,
    external: true,
    hoverShadow: "hover:shadow-blue-600/50",
  },
  {
    label: "GitHub",
    href: SOCIAL_LINKS.github,
    Icon: GithubGlyph,
    external: true,
    hoverShadow: "hover:shadow-white/30",
  },
  {
    label: "YouTube",
    href: SOCIAL_LINKS.youtube,
    Icon: YoutubeGlyph,
    external: true,
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
      className="pointer-events-auto absolute bottom-12 left-12 z-40 hidden md:block"
    >
      <motion.a
        variants={itemVariants}
        href={SOCIAL_LINKS.email}
        className="mb-4 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-neutral-300 backdrop-blur-md transition-colors ease-out-quint hover:border-white/30 hover:text-white"
      >
        {SITE.email}
      </motion.a>

      <motion.div variants={rowVariants} className="flex gap-3">
        {ICONS.map(({ label, href, Icon, external, hoverShadow }) => (
          <motion.a
            key={label}
            variants={itemVariants}
            href={href}
            title={label}
            aria-label={label}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 backdrop-blur-md transition-all duration-300 ease-out hover:scale-110 hover:bg-white/10 hover:text-white hover:shadow-lg",
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
