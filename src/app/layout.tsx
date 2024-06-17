import "~/styles/globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: "Aidan Gollan",
  description: "Welcome to my wonderful website :)",
  icons: [{ rel: "icon", url: "/galaxy.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} bg-black font-sans`}>
      <body className="overflow-hidden min-h-screen min-w-screen">
        {children}
      </body>
    </html>
  );
}
