/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                "spin-slow": "spin 2s linear infinite",
                scroll: "scroll 60s linear infinite",
                "scroll-reverse": "scroll-reverse 60s linear infinite",
                "free-fall":
                    "fall 8s cubic-bezier(0.33333, 0, 0.66667, 0.33333) forwards",
            },
            keyframes: {
                scroll: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(calc(-250px * 10))" },
                },
                "scroll-reverse": {
                    "0%": { transform: "translateX(calc(-250px * 10))" },
                    "100%": { transform: "translateX(0)" },
                },
                fall: {
                    "0%": {
                        transform: "translateY(0) rotate(0deg)",
                    },
                    "100% ": {
                        transform: "translateY(100vh) rotate(360deg)",
                    },
                },
            },
            transitionTimingFunction: {
                "suck-in": "cubic-bezier(0.65, 0, 0.35, 1)",
            },
            fontFamily: {
                VikingHell: "VikingHell",
            },
            colors: {
                primary: {
                    50: "#F4EEFC",
                    100: "#E7D9F8",
                    200: "#D2B6F1",
                    300: "#BA90EA",
                    400: "#A46EE3",
                    500: "#8C47DC",
                    600: "#7628D0",
                    700: "#581E9A",
                    800: "#3A1467",
                    900: "#1D0A33",
                    950: "#0F051A",
                },
                secondary: {
                    50: "#FFF0F9",
                    100: "#FFE5F4",
                    200: "#FFC7E8",
                    300: "#FFADDD",
                    400: "#FF94D2",
                    500: "#FF75C6",
                    600: "#FF5CBB",
                    700: "#FF40B1",
                    800: "#D6007D",
                    900: "#6B003E",
                    950: "#33001E",
                },
                accent: {
                    50: "#F2FBFD",
                    100: "#E5F6FA",
                    200: "#CFEFF7",
                    300: "#B5E6F2",
                    400: "#9BDDED",
                    500: "#86D6E9",
                    600: "#6CCDE5",
                    700: "#52C4E0",
                    800: "#3ABCDC",
                    900: "#156275",
                    950: "#0B333D",
                },
            },
        },
    },
    plugins: [],
};
