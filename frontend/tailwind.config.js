module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            inset: {
                "1/10": "10%",
            },
            maxWidth: {
                "1/4": "25%",

                "1/2": "50%",

                "2/3": "62%",

                "3/4": "75%",
            },
            Width: {
                "5/6": "85%",
            },
            minWidth: {
                0: "0",

                "1/4": "25%",

                "1/3": "35%",

                "1/2": "50%",

                "3/4": "75%",

                full: "100%",
            },
            boxShadow: {
                sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                DEFAULT:
                    "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                md:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                lg:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                xl:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",

                "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
                inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
                innerCustom: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
                none: "none",
            },
        },
        backgroundColor: theme => ({
            ...theme("colors"),

            custom1: "#4C84AD",
            custom2: "#F4E0C6",
            custom3: "#F0F3F9",
            custombut1: "#C02365",
            customnav: "#FFFFFF",
            customfooter: "#FAFBFD",
            customsec1: "#E5E5E5",
            customsec2: "#FAFCFF",
            customsec3: "#FFFFFF",
            customsec4: "#FAFCFF",
            customsec5: "#E5E5E5",
            customVerticalTimeline: "#D95252",
        }),
        textColor: theme => ({
            ...theme("colors"),

            custom1: "#4C84AD",
            custom2: "#373F41",
            custom3: "#B0B0B0",
        }),
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
