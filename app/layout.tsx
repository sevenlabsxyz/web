import { Analytics } from "./components/analytics";
import { Inter } from "@next/font/google";
import { Metadata } from "next";
import "../global.css";

export const metadata: Metadata = {
  title: {
    default: "seven.sx",
    template: "%s | seven.sx",
  },
  description: "Venture Studio building for impact and change.",
  openGraph: {
    title: "seven.sx",
    description: "Venture Studio building for impact and change.",
    url: "https://seven.sx",
    siteName: "seven.sx",
    images: [
      {
        url: "https://seven.sx/og.png",
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
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={[inter.variable].join(" ")}
    >
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}
