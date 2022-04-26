import { createTheme } from "@mui/material/styles";
import "@fontsource/work-sans";


const defaultTheme = createTheme({
    palette: {
        background: {
            default: "#E5E5E5"
        },
        primary: {
            main: "#000000",
            dark: "#050405",
        },
        secondary: {
            main: "#000000",
            light: "#050405",
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
                        
                    },
                },
                h2: {
                    fontFamily: "Work Sans",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "38px",
                    lineHeight: "44.57px",
                    [defaultTheme.breakpoints.down(1200)]: {
                        
                    },
                },
                h3: {
                    fontFamily: "Work Sans",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: "24px",
                    [defaultTheme.breakpoints.down(1200)]: {
                        
                    },
                },
                h4: {
                    fontFamily: "Work Sans",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "24px",
                    [defaultTheme.breakpoints.down(1200)]: {
                        
                    },
                },
                h5: {
                    fontFamily: "Work Sans",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "18px",
                    lineHeight: "24px",
                    [defaultTheme.breakpoints.down(1200)]: {
                        
                    },
                },
                h6: {
                    fontFamily: "Work Sans",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "18.77px",
                    [defaultTheme.breakpoints.down(1200)]: {
                        
                    },
                },
                body1: {
                    fontFamily: "Work Sans",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "15px",
                    lineHeight: "17.6px",
                    [defaultTheme.breakpoints.down(1200)]: {
                        
                    },
                },
                body2: {
                    fontFamily: "Work Sans",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    [defaultTheme.breakpoints.down(1200)]: {
                        
                    },
                },
            },
        },
    },

};

export default theme;