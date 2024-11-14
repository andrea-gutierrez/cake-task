import type {Metadata} from "next";
import "./globals.css";
import {Providers} from "@/components/providers/Providers";

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
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <body>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    );
}
