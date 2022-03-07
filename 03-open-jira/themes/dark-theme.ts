import { ThemeOptions } from "@mui/material";
import { grey, red } from "@mui/material/colors";

export const DARK_THEME: ThemeOptions = {
    palette: {
        mode: 'dark',
        secondary: {
            main: '#19857b'
        },
        error: {
            main: red.A400
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#4a148c'
                }
            }
        }
    }
}