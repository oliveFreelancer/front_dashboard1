"use client";

import "./globals.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // PrimeReact 테마
import "primereact/resources/primereact.min.css"; // PrimeReact 기본 스타일
import "primeicons/primeicons.css"; // PrimeIcons 스타일
//components
import Header from "@/app/components/header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>
        <Header />
        <main className="pt-[56px] w-full h-full">{children}</main>
      </body>
    </html>
  );
}
