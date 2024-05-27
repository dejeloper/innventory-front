import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/app/sidebar/sidebar";
import { Navbar } from "@/components/app/navbar/navbar";
import { PageWrapper } from "@/components/app/page-wrapper/page-wrapper";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Innventtory",
  description:
    "Innventtory es un sistema de inventario y facturación para pequeñas y medianas empresas",
  openGraph: {
    title: "Innventtory",
    description:
      "Innventtory es un sistema de inventario y facturación para pequeñas y medianas empresas",
    images: [
      {
        url: "https://innventtory.vercel.app/images/logo_innventtory.jpg",
        width: 800,
        height: 600,
        alt: "Innventtory",
      },
    ],
    url: "https://innventtory.vercel.app/",
    siteName: "Innventtory",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <body
        className={cn(
          "max-h-screen bg-background font-sans antialiased overflow-hidden",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar />
          <Navbar />
          <PageWrapper>{children}</PageWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
