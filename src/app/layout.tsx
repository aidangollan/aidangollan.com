import "~/styles/globals.css";
import { Inter } from 'next/font/google';
import { Metadata } from "next";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: "Aidan Gollan",
    template: "%s | Aidan Gollan",
  },
  icons: [{ rel: "icon", url: "/galaxy.ico" }],
  description: "Welcome to my wonderful website :)",
  openGraph: {
    title: "Aidan Gollan",
    description:
      "Welcome to my wonderful website :)",
    url: "https://aidangollan.com",
    siteName: "aidangollan.com",
    images: [
      {
        url: "https://aidangollan.com/galaxy.png",
        width: 1792,
        height: 1024,
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} bg-black font-sans`}>
      <body className="min-h-screen min-w-screen">
        {children}
      </body>
    </html>
  );
}
