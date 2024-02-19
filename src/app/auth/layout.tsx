import { Metadata } from "next"
import React, { Suspense } from "react"
import classes from './layout.module.css';
import { Box } from "@mui/material";
import Loading from "@/app/loading";

interface LayoutProps {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: 'Auth'
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    
    return (
        <>
            <Box component={'div'} className={classes.authContainer} padding={{ xs: '1rem', md: '0' }}>
                <Suspense fallback={<Loading />}>
                    {children}
                </Suspense>
            </Box>
        </>
    )
}
export default Layout