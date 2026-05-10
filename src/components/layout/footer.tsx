import type { ComponentType, SVGProps } from "react";
import { Mail } from "lucide-react";
import {
  GithubGlyph,
  LinkedinGlyph,
  YoutubeGlyph,
} from "@/components/ui/brand-icons";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;
const MailGlyph: SvgIcon = (props) => <Mail {...props} />;

const FOOTER_ICONS = [
  { label: "Email", href: SOCIAL_LINKS.email, Icon: MailGlyph, external: false },
  {
    label: "LinkedIn",
    href: SOCIAL_LINKS.linkedin,
    Icon: LinkedinGlyph,
    external: true,
  },
  {
    label: "GitHub",
    href: SOCIAL_LINKS.github,
    Icon: GithubGlyph,
    external: true,
  },
  {
    label: "YouTube",
    href: SOCIAL_LINKS.youtube,
    Icon: YoutubeGlyph,
    external: true,
  },
];

export function Footer() {
  return (
    <footer className="relative z-30 border-t border-white/10 bg-background/60 py-10 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © 2026 {SITE.fullName}. Built with Next.js &amp; deployed on Netlify.
        </p>
        <ul className="flex gap-3">
          {FOOTER_ICONS.map(({ label, href, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                title={label}
                aria-label={label}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 transition-all ease-out-quint hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
