import type { Metadata } from "next";
import "../styles/globals.css";
import { fontSans } from "@/components/Fonts";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Nav/Navbar";

export const metadata: Metadata = {
  title: "Hayat ilyas - Portfolio",
  description:
    "Hello! I'm Hayat ilyas, a tech enthusiast skilled in building cool websites. I'm great at making things look awesome on the screen using React.js and creating the brains of the website with Node.js and Express.js. As a passionate and ambitious individual, I am excited to pursue a career as a React Developer, JavaScript Developer, Frontend, Backend, and Fullstack Developer. While I may not have any professional experience, I have been developing my skills through personal projects and online courses, and I am eager to apply these skills in a professional setting.In addition to my technical skills, I possess excellent problem-solving abilities and a strong work ethic. I am a quick learner and am able to adapt to new technologies and workflows easily.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon-32x32.png",
        href: "/favicon-32x32.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn("bg-background font-sans antialiased", fontSans.variable)}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
