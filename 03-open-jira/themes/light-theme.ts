import { ThemeOptions } from "@mui/material";
import { grey, red } from "@mui/material/colors";

export const LIGHT_THEME: ThemeOptions = {
    palette: {
        mode: 'dark',
        background: {
            default: grey[300]
        },
        primary: {
            main: '#4a148c'
        },
        secondary: {
            main: '#19857b'
        },
        error: {
            main: red.A400
        },
    }
}