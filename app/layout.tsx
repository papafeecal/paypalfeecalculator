import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PayPal Fee Calculator - Calculate Transaction Fees 2026",
  description: "Free PayPal fee calculator 2026. Instantly calculate PayPal transaction fees for domestic and international payments. See exact amounts after fees are deducted.",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://paypalfeecalculator.org',
    siteName: 'PayPal Fee Calculator',
    title: 'PayPal Fee Calculator - Calculate Transaction Fees 2026',
    description: 'Free PayPal fee calculator 2026. Instantly calculate PayPal transaction fees for domestic and international payments. See exact amounts after fees are deducted.',
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'PayPal Fee Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PayPal Fee Calculator - Calculate Transaction Fees 2026',
    description: 'Free PayPal fee calculator 2026. Instantly calculate PayPal transaction fees for domestic and international payments.',
    images: ['/android-chrome-512x512.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-G8XWB7GCYD"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G8XWB7GCYD');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
