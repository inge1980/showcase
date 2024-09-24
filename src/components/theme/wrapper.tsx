"use client";

import { ReactNode, useState, useLayoutEffect } from "react";
import { useTheme } from "@/context/themecontext"; // get theme info

interface ThemeWrapperProps {
    children: ReactNode;
}

export default function ThemeWrapper({ children}: ThemeWrapperProps) {
    const { theme: defaultTheme } = useTheme(); // Fallback theme from useTheme
    const [appliedTheme, setAppliedTheme] = useState<"light" | "dark" | null>(null); // Use null to delay rendering

    // useLayoutEffect to determine the theme before rendering
    useLayoutEffect(() => {
        // Check for a theme in localStorage
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

        if (savedTheme) {
            setAppliedTheme(savedTheme); // Use saved theme
        } else {
            setAppliedTheme(defaultTheme); // Use default theme
        }
    }, [defaultTheme]); // Runs when defaultTheme changes

    // Prevent rendering until theme is determined to avoid flickering
    if (appliedTheme === null) {
        return null;
    }

    return (
        <div className={(appliedTheme === "light" ? "light-theme" : "dark-theme") + ` block align-top items-baseline justify-items-center min-h-screen px-5 font-[family-name:var(--font-geist-sans)]`}>
            {children}
        </div>
    );
}