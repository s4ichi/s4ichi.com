import "./global.css";
import type { Metadata } from "next";
import Sidebar from "components/sidebar";
import { defaultTitle, defaultDescription, openGraph, twitter } from "components/metadata";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://s4ichi.com"),
  title: {
    default: defaultTitle,
    template: "%s | Takamasa Saichi",
  },
  description: defaultDescription,
  openGraph: openGraph(),
  twitter: twitter(),
  alternates: {
    types: {
      "application/rss+xml": "https://s4ichi.com/blog/feed.xml",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="text-black bg-white dark:text-white dark:bg-[#111010]">
      <body className="antialiased max-w-5xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <Sidebar />
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
