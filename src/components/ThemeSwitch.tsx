'use client'

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {Theme} from "@/utils/enums/theme.enum";
import {Switch} from "@nextui-org/react";

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const handleTheme = () => {
        if (theme === Theme.Dark) {
            setTheme(Theme.Light);
        } else {
            setTheme(Theme.Dark);
        }
    }

    const isThemeDark = () => {
        return theme === Theme.Dark
    }

    return <>
        <div className="flex justify-center">
            <Switch isSelected={isThemeDark()} onValueChange={handleTheme}>
                {theme}
            </Switch>
        </div>
    </>
}