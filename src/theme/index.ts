/** @jsxImportSource theme-ui */
// eslint-disable-next-line import/named
import { Theme } from "@theme-ui/css";

const makeTheme = <ExactTheme extends Theme>(t: ExactTheme): ExactTheme => {
    return t;
};

const theme = makeTheme({
    breakpoints: ["768px", "1024px", "1366px", "1536px", "1920px", "1440px"],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    radii: [2, 4, 6, 8, 12, 16, 24, 9999],
    sizes: [
        "8.333333%",
        "16.666667%",
        "25%",
        "33.333333%",
        "41.666667%",
        "50%",
        "58.333333%",
        "66.666667%",
        "75%",
        "83.333333%",
        "91.666667%",
        "100%",
    ],
    colors: {
        // prefix "onExample": dùng cho màu text trên element có background-color là example
        // primary
        primary: "#F3A446",
        lightPrimary: "#eab679",
        darkPrimary: "#DA933F",
        onPrimary: "black",
        // background - secondary
        background: "#1D1E1E",
        text: "white",
        // error
        error: "#F83B3B",
        onError: "white",
    },
    buttons: {
        filled: {
            color: "onPrimary",
            bg: "primary",
            border: "none",
            px: 4,
            py: 2,
            mx: 1,
            borderRadius: 3,
            cursor: "pointer",
            "&:hover": {
                bg: "darkPrimary",
            },
        },
        outlined: {
            color: "primary",
            bg: "background",
            borderColor: "primary",
            borderWidth: "1px",
            borderStyle: "solid",
            px: 4,
            py: 2,
            mx: 1,
            borderRadius: 3,
            cursor: "pointer",
            "&:hover": {
                color: "darkPrimary",
                borderColor: "darkPrimary",
            },
        },
        elevated: {
            color: "onPrimary",
            bg: "primary",
            border: "none",
            px: 4,
            py: 2,
            mx: 1,
            borderRadius: 3,
            cursor: "pointer",
            boxShadow: "0 8px 27px -3px rgba(243,164,70,0.8)",
            "&:hover": {
                bg: "darkPrimary",
                boxShadow: "0 8px 27px -3px rgba(218,147,63,0.6)",
            },
        },
        disabled: {
            color: "#333",
            bg: "lightPrimary",
            border: "none",
            px: 4,
            py: 2,
            mx: 1,
            borderRadius: 3,
        },
        textBtn: {
            color: "primary",
            bg: "background",
            border: "none",
            px: 4,
            py: 2,
            mx: 1,
            borderRadius: 3,
            cursor: "pointer",
            "&:hover": {
                color: "darkPrimary",
            },
        },
    },
});

export default theme;
