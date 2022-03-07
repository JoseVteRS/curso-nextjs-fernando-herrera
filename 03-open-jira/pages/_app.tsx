import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { DARK_THEME, LIGHT_THEME } from "../themes";
import { UIProvider } from "../context/ui";

const basicTheme = createTheme(DARK_THEME);

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <UIProvider>
            <ThemeProvider theme={basicTheme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </UIProvider>
    );
}

export default MyApp;
