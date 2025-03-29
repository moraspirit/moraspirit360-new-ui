import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/Components/NavBar/NavBar";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = (): Metadata => {
  return {
    metadataBase: new URL("https://moraspirit360.com"),
    title: "MoraSpirit 360 - Glorify Your Moments",
    description:
      "MoraSpirit 360, a subsidiary of MoraSpirit Initiative, provides expert photography, videography, marketing, and web development services. Glorify your moments with comprehensive event coverage and innovative features.",
    keywords: [
      "MoraSpirit",
      "360",
      "MoraSpirit360",
      "photography",
      "videography",
      "marketing",
      "web development",
      "event coverage",
    ],
    openGraph: {
      type: "website",
      title: "MoraSpirit 360 - Glorify Your Moments",
      description:
        "Expert photography, videography, marketing, and web development services under MoraSpirit Initiative. Glorify your moments uniquely.",
      url: "https://moraspirit360.com",
      siteName: "MoraSpirit 360",
      images: [
        {
          url: "https://moraspirit360.com/360Logo.jpg",
          width: 800,
          height: 600,
          alt: "MoraSpirit 360 Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@moraspiritNews",
      creator: "@moraspiritNews",
      title: "MoraSpirit 360 - Glorify Your Moments",
      description:
        "Capture and glorify your events with MoraSpirit 360's premium photography, videography, marketing, and web development services.",
      images: [
        "https://moraspirit360.com/photography.jpg",
        "https://moraspirit360.com/marketingHero.png",
        "https://moraspirit360.com/videographyHero.jpg",
      ],
    },
    alternates: {
      canonical: "https://moraspirit360.com",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    authors: [
      {
        name: "MoraSpirit 360",
        url: "https://moraspirit360.com",
      },
    ],
    publisher: "MoraSpirit 360",
    other: {
      "theme-color": "#ffffff",
    },
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YWDK5DB52Q"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YWDK5DB52Q');
          `}
        </Script>
      </Head>
      <body className={inter.className}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
