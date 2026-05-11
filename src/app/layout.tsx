import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "highlight.js/styles/github-dark.css";
import { SITE } from "@/lib/constants";
import { Navbar } from "@/components/layout/navbar";
import { PersistentRobot } from "@/components/layout/persistent-robot";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { Footer } from "@/components/layout/footer";
import SocialLinks from "@/components/ui/social-links";
import { socialLinks } from "@/lib/social-links-data";
import { RobotVisibilityProvider } from "@/lib/robot-visibility";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.fullName} — ${SITE.title}`,
  description: SITE.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RobotVisibilityProvider>
          <SmoothScroll />
          <Navbar />
          <PersistentRobot />
          <SocialLinks
            links={socialLinks}
            showOnMobile
            floatingButtonColor="bg-blue-500"
          />
          {children}
          <Footer />
        </RobotVisibilityProvider>
      </body>
    </html>
  );
}
