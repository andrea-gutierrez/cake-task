"use client"

import {ThemeProvider} from 'next-themes';
import {ReactNode} from "react";
import {NextUIProvider} from "@nextui-org/react";

export const Providers = ({children}: { children: ReactNode }) => {

    return <ThemeProvider attribute="class" defaultTheme='light'>
        <NextUIProvider>
            {children}
        </NextUIProvider>
    </ThemeProvider>
}