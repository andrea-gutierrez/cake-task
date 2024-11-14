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
        <body className="m-4">
        <Providers>
            <h1 className="font-extrabold text-4xl text-center">Cake</h1>
            <main className="m-2">
                {children}
            </main>
        </Providers>
        </body>
        </html>
    );
}
