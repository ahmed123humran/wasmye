import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "متجر التراث اليمني | انتظرونا قريباً",
  description: "متجر متخصص في التحف والهدايا التراثية اليمنية الأصيلة. انتظرونا قريباً.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${tajawal.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
