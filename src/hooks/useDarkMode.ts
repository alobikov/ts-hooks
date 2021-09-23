import React, {useEffect, useState} from 'react'

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)'

interface UseDarkModeReturn {
    isDarkMode: boolean;
    toggle: () => void;
    enable: () => void;
    disable: () => void;
}

export function useDarkMode(defaultMode?: boolean): UseDarkModeReturn {

    const getPrefersScheme = () => {
        if (typeof window === 'undefined') return !!defaultMode;
        return window.matchMedia(COLOR_SCHEME_QUERY).matches;
    }

    const [isDarkMode, setIsDarkMode] = useState(getPrefersScheme());

    useEffect(() => {
        // observe os prefers change
        const eventHandler = () => setIsDarkMode(getPrefersScheme);
        const matchMedia = window.matchMedia(COLOR_SCHEME_QUERY);
        matchMedia.addEventListener('change', eventHandler);

        return () => {
            matchMedia.removeEventListener('change', eventHandler);
        }
    }, [])

    return {
        isDarkMode,
        toggle: () => setIsDarkMode(prev => !prev),
        enable: () => setIsDarkMode((true)),
        disable: () => setIsDarkMode(false)
    }
}