'use client'
import React, { useMemo } from "react"
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";
import { handleTopbarVisibility } from "@/utils/helpers/helpers";


interface CustomLayoutProps {
    children: React.ReactNode
}

const CustomLayout: React.FC<CustomLayoutProps> = ({ children }) => {
    const urlPath = usePathname();
    const showTopBar = useMemo(() => {
        return handleTopbarVisibility(urlPath)
    }, [urlPath]);

    return (
        showTopBar ?
            <>
                <div>topbar</div>
                {children}
            </>
            :
            <>
                <Box>
                    {children}
                </Box>
            </>
    )
}
export default CustomLayout