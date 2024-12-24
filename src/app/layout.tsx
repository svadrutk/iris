import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const editorialRegular = localFont({
  src: "./fonts/PPEditorialnew-Regular.otf",
  variable: "--font-editorial-regular",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const spaceMono = localFont({
  src: "./fonts/SpaceMono-Regular.ttf",
  variable: "--font-space-mono",
  weight: "400",
});

const spaceMonoBold = localFont({
  src: "./fonts/SpaceMono-Bold.ttf",
  variable: "--font-space-mono-bold",
  weight: "700",
});

const spaceMonoItalic = localFont({
  src: "./fonts/SpaceMono-Italic.ttf",
  variable: "--font-space-mono-italic",
  weight: "400",
});

const kumarOne = localFont({
  src: "./fonts/KumarOne-Regular.ttf",
  variable: "--font-kumar-one",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumarOne.variable} ${spaceMono.variable} ${spaceMonoBold.variable} ${editorialRegular.variable} ${spaceMonoItalic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
