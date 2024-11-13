import type {Metadata} from "next";
import "./globals.css";
import {Providers} from "@/components/providers/Providers";
import ThemeSwitch from "@/components/ThemeSwitch";

export const metadata: Metadata = {
    title: "Dev Interview Task",
    description: "Development of the task for the position as a frontend developer",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <Providers>
            <ThemeSwitch></ThemeSwitch>
            {children}
        </Providers>
        </body>
        </html>
    );
}
