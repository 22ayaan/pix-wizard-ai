import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "PixWiz.ai",
  description: "AI powered image editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "black",
        },
      }}
    >
      <html lang="en">
        <head>
          <link rel="icon" href="/assets/images/Wizard.png" sizes="any" />
        </head>
        <body className={cn("font-monsterrat antialiased", montserrat.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
