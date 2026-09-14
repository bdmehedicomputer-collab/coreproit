import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE = "https://coreproit.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "CoreProIT — MD MEHEDI HASAN · Full Stack Developer",
    template: "%s | CoreProIT",
  },
  description:
    "CoreProIT — Full Stack Development, Automation, Apps and Bots by MD MEHEDI HASAN.",
  keywords: [
    "CoreProIT",
    "MD MEHEDI HASAN",
    "Full Stack Developer",
    "PHP",
    "Node.js",
    "Python",
    "Next.js",
    "Automation",
    "Telegram Bot",
    "WhatsApp Bot",
  ],
  authors: [{ name: "MD MEHEDI HASAN" }],
  creator: "MD MEHEDI HASAN",
  openGraph: {
    title: "CoreProIT — Digital Products. Engineered.",
    description: "Full Stack Development • Apps • Automation • Bots",
    url: SITE,
    siteName: "CoreProIT",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "CoreProIT" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CoreProIT — Digital Products. Engineered.",
    description: "Full Stack Development • Apps • Automation • Bots",
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon.png",
  },
  robots: { index: true, follow: true },
  verification: {
    google: "GT20XhqUupYQS4kpC6311ENAilZyVq0DclX-4cx2h1E",
  },
};

export const viewport: Viewport = {
  themeColor: "#05070D",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <a href="#home" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
