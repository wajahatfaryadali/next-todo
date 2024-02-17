'use client'
import React, { useMemo } from "react"
import { Box, Container, ThemeProvider } from "@mui/material";
import { usePathname } from "next/navigation";
import { handleTopbarVisibility } from "@/utils/helpers/helpers";
import { customTheme } from "@/utils/theme/custom-theme";
import classes from './customLaout.module.css';
import TopBar from "../muiComponents/TopBar/TopBar";


interface CustomLayoutProps {
    children: React.ReactNode
}

const CustomLayout: React.FC<CustomLayoutProps> = ({ children }) => {
    const urlPath = usePathname();
    const showTopBar = useMemo(() => {
        return handleTopbarVisibility(urlPath)
    }, [urlPath]);

    return (
        <ThemeProvider theme={customTheme}>
            {showTopBar ?
                <>
                    <TopBar />
                    <Box mt={{ xs: '56px', sm: '64px' }} maxHeight={{ xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' }}>
                        <Container sx={{ pt: 2 }}>

                            {children}
                        </Container>
                    </Box>
                </>
                :
                <Box component={'div'} className={classes.authContainer} padding={{ xs: '1rem', md: '0' }}>
                    {children}
                </Box>
            }
        </ThemeProvider>
    )
}
export default CustomLayout