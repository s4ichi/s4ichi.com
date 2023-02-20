import "./global.css";
import type { Metadata } from "next";
import Sidebar from "components/sidebar";
import { title, description } from "components/metadata";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Takamasa Saichi",
  },
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: "https://s4ichi.com",
    siteName: title,
    images: [
      {
        url: "https://s4ichi.com/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
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
  twitter: {
    title: "@s4ichi",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="text-black bg-white dark:text-white dark:bg-[#111010]">
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <Sidebar />
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">{children}</main>
      </body>
    </html>
  );
}
