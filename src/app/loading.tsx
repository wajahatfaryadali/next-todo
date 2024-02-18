import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';


export default function FullPageLoader(props: { loading?: boolean }) {
    const { loading = true } = props;
    return (
        <Backdrop
            open={loading}
            sx={{ color: '#fff', zIndex: 100000 }}
        >
            <CircularProgress color="primary" />
        </Backdrop>
    );
}