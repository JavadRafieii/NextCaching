import { getPosts } from "@/lib/api";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  // const response = await fetch("http://localhost:8080/posts",{
  //   headers: {
  //     'Test': 'Test_A',
  //     'Content-Type': 'application/json',
  //   },
  // });

  // const response = await fetch("http://localhost:8080/posts");
  // const posts = await response.json();

  const posts = await getPosts();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
