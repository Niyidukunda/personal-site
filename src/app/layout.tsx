import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/ui/BackToTop";
import GaPageViewTracker from "@/components/analytics/GaPageViewTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://delitweb.com"),
  title: {
    default: "Del IT+Web | Web platforms, architecture, and infrastructure delivery",
    template: "%s | Del IT+Web",
  },
  description:
    "Del IT+Web delivers web platforms, systems architecture, and infrastructure workflows with clear execution for growing teams.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://delitweb.com",
    siteName: "Del IT+Web",
    title: "Del IT+Web | Web platforms, architecture, and infrastructure delivery",
    description:
      "Web platforms, systems architecture, and infrastructure delivery built for reliable execution.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Del IT+Web | Web platforms, architecture, and infrastructure delivery",
    description:
      "Web platforms, systems architecture, and infrastructure delivery built for reliable execution.",
  },
  icons: {
    icon: "/images/icononly.png",
    shortcut: "/images/icononly.png",
    apple: "/images/icononly.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        <div className="min-h-dvh flex flex-col">
          <Header />
          <main className="flex-1">
            
            {children}
          </main>
          <Footer />
        </div>
        <BackToTop />

        {gaId ? (
          <>
            <Script
              id="ga4-src"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { send_page_view: false });
              `}
            </Script>
            <GaPageViewTracker gaId={gaId} />
          </>
        ) : null}

        {clarityId ? (
          <Script id="clarity-init" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityId}");
            `}
          </Script>
        ) : null}
      </body>
    </html>
  );
}
