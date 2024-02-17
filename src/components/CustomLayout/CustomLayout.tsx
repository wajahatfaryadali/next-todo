'use client'
import React, { useMemo } from "react"
import { Box, ThemeProvider } from "@mui/material";
import { usePathname } from "next/navigation";
import { handleTopbarVisibility } from "@/utils/helpers/helpers";
import { customTheme } from "@/utils/theme/custom-theme";
import classes from './customLaout.module.css';


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
                    <div>topbar</div>
                    {children}
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