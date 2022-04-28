import { createTheme } from "@mui/material/styles";
import "@fontsource/work-sans";


const defaultTheme = createTheme({
    palette: {
        background: {
            default: "#E5E5E5"
        },
        primary: {
            main: "#1E5DBB",
            dark: "#ffffff",
        },
        secondary: {
            main: "#1E5DBB",
            dark: "#ffffff",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1920,
        },
    },
    typography: {
        fontFamily: "Work Sans",
    },
});


const theme = {
    ...defaultTheme,
    components: {
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontFamily: "Work Sans",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "58px",
                    lineHeight: "68.03px",
                    [defaultTheme.breakpoints.down(1200)]: {
                        fontSize: "25px",
                        lineHeight: "30px",
                    },
                },
                h2: {
                    fontFamily: "Work Sans",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "38px",
                    lineHeight: "44.57px",
                    [defaultTheme.breakpoints.down(1200)]: {
                        fontSize: "25px",
                        lineHeight: "28px",
                    },
                },
                h3: {
                    fontFamily: "Work Sans",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: "24px",
                    [defaultTheme.breakpoints.down(1200)]: {
                        fontSize: "14px",
                        lineHeight: "20px",
                    },
                },
                h4: {
                    fontFamily: "Work Sans",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "24px",
                    [defaultTheme.breakpoints.down(1200)]: {
                        fontSize: "14px",
                        lineHeight: "20px",
                    },
                },
                h5: {
                    fontFamily: "Work Sans",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: "24px",
                    [defaultTheme.breakpoints.down(1200)]: {
                        fontSize: "16px",
                        lineHeight: "20px",
                    },
                },
                h6: {
                    fontFamily: "Work Sans",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "18.77px",
                    [defaultTheme.breakpoints.down(1200)]: {
                        fontSize: "14px",
                        lineHeight: "20px",
                    },
                },
                body1: {
                    fontFamily: "Work Sans",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "15px",
                    lineHeight: "17.6px",
                    [defaultTheme.breakpoints.down(1200)]: {
                        fontSize: "14px",
                    },
                },
                body2: {
                    fontFamily: "Work Sans",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    [defaultTheme.breakpoints.down(1200)]: {
                        fontSize: "12px",
                    },
                },
            },
        },
    },

};

export default theme;