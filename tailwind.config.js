/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                // Primárias rose-gold
                primary: { DEFAULT: "#B08D7E", light: "#D4B5A0", dark: "#8B6F60" },
                accent: { DEFAULT: "#D4A88A" },

                // Neutros quentes
                bg: { DEFAULT: "#FAF8F5" },             // Linen
                surface: { DEFAULT: "#F5F0E8" },        // Sand
                secondary: { DEFAULT: "#F0EAE2" },      // Bisque
                line: { DEFAULT: "#E7DFD3" },           // Stone
                mute: { DEFAULT: "#9C9189" },           // Mist
                "ink-soft": { DEFAULT: "#5C5249" },     // Driftwood
                ink: { DEFAULT: "#2D2A26" },            // Ink
                "ink-deep": { DEFAULT: "#1A1815" },     // Espresso

                // Feedback dessaturado
                success: { DEFAULT: "#7A9277" },        // Sage
                warning: { DEFAULT: "#C9A668" },        // Mustard
                error: { DEFAULT: "#B5675F" },          // Terracotta
                info: { DEFAULT: "#7A8B9C" },           // Slate
            },
            backgroundImage: {
                "rose-sunrise": "linear-gradient(135deg, #D4B5A0 0%, #B08D7E 50%, #8B6F60 100%)",
                "champagne-veil": "linear-gradient(135deg, #F0EAE2 0%, #D4A88A 100%)",
                "driftwood-dusk": "linear-gradient(135deg, #2D2A26 0%, #5C5249 50%, #8B6F60 100%)",
            },
            fontFamily: {
                display: ['"Instrument Serif"', "Georgia", "serif"],
                sans: ["Manrope", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
            },
            letterSpacing: {
                tightest: "-0.025em",
                tighter: "-0.02em",
            },
        },
    },
    plugins: [],
};
