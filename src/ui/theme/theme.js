import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
    palette: {
        primary: {
            main: "#130B46",
            dark: "#130B46",
            pink: "#F4876E"
        },
        secondary: {
            main: "#F4876E",
            light: "#fff",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    typography: {
        fontFamily: "Poppins",
    },
});


const theme = {
    ...defaultTheme,
    components: {
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "56px",
                    lineHeight: "84px",
                    color: '#000',
                    [defaultTheme.breakpoints.down(1200)]: {
                        color: 'red',
                    },
                },
            },
        },
    },

};

export default theme;