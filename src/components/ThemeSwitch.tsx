'use client'

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {Theme} from "@/utils/enums/theme.enum";

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const handleTheme = () => {
        console.log(theme);
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
        <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={isThemeDark()} onChange={handleTheme} className="sr-only peer"/>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Light</span>
            <div
                className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark</span>
        </label>
    </>
}