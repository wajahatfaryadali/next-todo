import { Box } from '@mui/material';
import React from 'react'
import { BoxContainerProps } from '@/utils/constants/interfaces';
import classes from "./boxContainer.module.css"

const BoxContainer: React.FC<BoxContainerProps> = (props) => {
    const { children, width = 500 } = props;

    return (
        <Box
            component={'div'}
            sx={{ width: width, minWidth: 300, p: 2 }}
            className={classes.boxContainer}
        >
            {children}
        </Box>
    )
}

export default BoxContainer