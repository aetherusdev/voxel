import type { Metadata } from "next";
import {
  Playfair_Display,
  Cormorant_Garamond,
  Montserrat,
  Inter,
} from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  weight: ["400", "500"],
  subsets: ["cyrillic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "Voxel Teleradiology",
  description: "Your Patients. Our Experts. Instant Diagnoses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/images/hero-bg.jpg"
          as="image"
          fetchPriority="high"
        />
      </head>
      <body
        className={`${inter.className} ${playfair.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
