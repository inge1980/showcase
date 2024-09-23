"use client";

import { ReactNode, useState, useLayoutEffect } from "react";
import { useTheme } from "@/context/themecontext"; // get theme info

interface BodyWithThemeProps {
    children: ReactNode;
    geistSans: { variable: string };
    geistMono: { variable: string };
}

export default function BodyWithTheme({ children, geistSans, geistMono }: BodyWithThemeProps) {
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
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased ` + (appliedTheme === "light" ? "light-theme" : "dark-theme")}>
            {children}
        </body>
    );
}