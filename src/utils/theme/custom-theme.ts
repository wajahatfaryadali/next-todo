// just created this theme to change primary color of theme 

import { createTheme } from "@mui/material/styles";

export const Colors = {
    primary: "#edc35f", // goldish light
    white: "#fff",
};

export const customTheme = createTheme(
    {
        palette: {
            primary: {
                main: "#e6b540",
                dark: Colors.primary,
                contrastText: Colors.white,
            },
        },
    }
);
