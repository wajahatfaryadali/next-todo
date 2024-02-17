import { createTheme } from "@mui/material/styles";

export const Colors = {
    // primary: "#e6b540", // goldish dark
    primary: "#edc35f", // goldish light
    white: "#fff",
};

// addding this just to change text and icon colors 

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
