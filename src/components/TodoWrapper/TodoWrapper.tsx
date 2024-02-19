// this is wapper for home component

import React, { Suspense } from "react"
import { Box, Container } from "@mui/material";
import Loading from "@/app/loading";
import TopBar from "../muiComponents/TopBar/TopBar";

interface TodoWrapperProps {
    children: React.ReactNode
}

const TodoWrapper: React.FC<TodoWrapperProps> = ({ children }) => {
    return (
        <>
            <TopBar />
            <Box mt={{ xs: '56px', sm: '64px' }} maxHeight={{ xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' }}>
                <Container sx={{ pt: 2 }}>
                    <Suspense fallback={<Loading />}>
                        {children}
                    </Suspense>
                </Container>
            </Box>
        </>
    )
}
export default TodoWrapper