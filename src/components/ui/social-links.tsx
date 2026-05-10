"use client";

import * as React from "react";
import { Share2, X } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDribbble,
  FaXTwitter,
  FaGlobe,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa6";

type Platform =
  | "linkedin"
  | "instagram"
  | "github"
  | "mail"
  | "facebook"
  | "x"
  | "dribbble"
  | "website"
  | "youtube";

export interface SocialLink {
  platform: Platform;
  href: string;
}

export interface SocialLinksProps {
  links: SocialLink[];
  showOnMobile?: boolean;
  /**
   * Tailwind color class or raw CSS color for the mobile floating button.
   */
  floatingButtonColor?: string;
}

interface PlatformStyle {
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  gradient: string;
  hoverGradient: string;
}

const PLATFORM_STYLES: Record<Platform, PlatformStyle> = {
  linkedin: {
    label: "LinkedIn",
    icon: FaLinkedin,
    gradient: "from-blue-600 to-blue-400",
    hoverGradient: "from-blue-500 to-blue-300",
  },
  instagram: {
    label: "Instagram",
    icon: FaInstagram,
    gradient: "from-pink-600 via-purple-600 to-orange-500",
    hoverGradient: "from-pink-500 via-purple-500 to-orange-400",
  },
  github: {
    label: "GitHub",
    icon: FaGithub,
    gradient:
      "from-zinc-800 to-zinc-600 dark:from-muted-foreground dark:to-foreground",
    hoverGradient:
      "from-zinc-700 to-zinc-500 dark:from-muted-foreground dark:to-foreground/80",
  },
  mail: {
    label: "Mail",
    icon: FaEnvelope,
    gradient: "from-cyan-600 to-blue-500",
    hoverGradient: "from-cyan-500 to-blue-400",
  },
  facebook: {
    label: "Facebook",
    icon: FaFacebook,
    gradient: "from-blue-700 to-blue-500",
    hoverGradient: "from-blue-600 to-blue-400",
  },
  x: {
    label: "X",
    icon: FaXTwitter,
    gradient: "from-foreground to-muted-foreground",
    hoverGradient: "from-muted-foreground to-muted/70",
  },
  dribbble: {
    label: "Dribbble",
    icon: FaDribbble,
    gradient: "from-pink-600 to-pink-400",
    hoverGradient: "from-pink-500 to-pink-300",
  },
  website: {
    label: "Website",
    icon: FaGlobe,
    gradient: "from-emerald-600 to-teal-500",
    hoverGradient: "from-emerald-500 to-teal-400",
  },
  youtube: {
    label: "YouTube",
    icon: FaYoutube,
    gradient: "from-red-600 to-red-500",
    hoverGradient: "from-red-500 to-red-400",
  },
};

export const SocialLinks: React.FC<SocialLinksProps> = ({
  links,
  showOnMobile = true,
  floatingButtonColor = "bg-muted",
}) => {
  const [hoveredPlatform, setHoveredPlatform] =
    React.useState<Platform | null>(null);
  const [mobileDockOpen, setMobileDockOpen] = React.useState(false);

  return (
    <>
      <div
        className={`${
          showOnMobile ? "hidden lg:flex" : "hidden md:flex"
        } flex-col fixed top-[35%] left-0 z-40`}
      >
        <ul className="space-y-3">
          {links.map(({ platform, href }) => {
            const style = PLATFORM_STYLES[platform];
            if (!style) return null;
            const Icon = style.icon;

            return (
              <li
                key={platform}
                onMouseEnter={() => setHoveredPlatform(platform)}
                onMouseLeave={() => setHoveredPlatform(null)}
                className="group"
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="relative ml-[-120px] flex h-14 w-44 items-center justify-between overflow-hidden rounded-r-xl border border-border bg-card px-4 shadow-md transition-all duration-500 ease-out hover:shadow-lg group-hover:ml-[-10px]"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      hoveredPlatform === platform
                        ? style.hoverGradient
                        : style.gradient
                    } opacity-90 transition-all duration-500`}
                  />
                  <span className="relative z-10 text-sm font-semibold tracking-wide text-white transition-all duration-300 group-hover:tracking-widest">
                    {style.label}
                  </span>
                  <Icon
                    size={22}
                    className="relative z-10 text-white drop-shadow-sm transition-transform duration-500 group-hover:scale-125"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {showOnMobile && (
        <div className="fixed bottom-6 right-6 z-50 lg:hidden">
          {mobileDockOpen && (
            <div
              className="fixed inset-0 bg-background/60 backdrop-blur-sm"
              onClick={() => setMobileDockOpen(false)}
            />
          )}

          <div className="relative">
            <div
              className={`absolute bottom-20 right-0 flex flex-col-reverse gap-3 transition-all duration-500 ${
                mobileDockOpen
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-8 opacity-0"
              }`}
            >
              {links.map(({ platform, href }, index) => {
                const style = PLATFORM_STYLES[platform];
                if (!style) return null;
                const Icon = style.icon;
                return (
                  <a
                    key={platform}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative ml-auto"
                    style={{
                      transitionDelay: mobileDockOpen
                        ? `${index * 50}ms`
                        : "0ms",
                    }}
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-full border border-border bg-gradient-to-br ${style.gradient} shadow-lg transition-transform duration-300 hover:scale-110`}
                    >
                      <Icon size={22} className="text-white" />
                    </div>
                    <div className="absolute right-16 top-1/2 -translate-y-1/2 rounded-md bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground opacity-0 shadow-md transition-opacity group-hover:opacity-100">
                      {style.label}
                      <div className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-popover" />
                    </div>
                  </a>
                );
              })}
            </div>

            <button
              onClick={() => setMobileDockOpen(!mobileDockOpen)}
              className={`relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-border shadow-2xl transition-all duration-300 active:scale-95 ${floatingButtonColor}`}
              aria-label="Toggle social links"
            >
              <div className="relative z-10">
                {mobileDockOpen ? (
                  <X size={24} className="text-white" />
                ) : (
                  <Share2 size={24} className="text-white" />
                )}
              </div>
              <div className="absolute inset-0 bg-muted opacity-10" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SocialLinks;
