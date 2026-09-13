import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoreProIT — MD MEHEDI HASAN",
  description: "CoreProIT — Full Stack Development, Automation, Apps and Bots by MD MEHEDI HASAN.",
  keywords: ["CoreProIT", "MD MEHEDI HASAN", "Full Stack Developer", "PHP", "Node.js", "Python", "Next.js"],
  openGraph: {
    title: "CoreProIT — Digital Products. Engineered.",
    description: "Full Stack Development • Apps • Automation • Bots",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}