import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Connect } from "@/components/connect";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Developer Student Club VIT Bhopal University",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <>
                    <Navbar />
                    {children}
                    <Connect />
                </>
            </body>
        </html>
    );
}