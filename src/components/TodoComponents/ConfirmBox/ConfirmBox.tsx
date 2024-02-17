import { Box, Button, Modal, Typography } from '@mui/material'
import React from 'react'


interface ConfirmBoxProps {
    title: string;
    message: string;
    open: boolean;
    cancelHandler: () => void;
    confirmHandler: () => void;
}

const ConfirmBox: React.FC<ConfirmBoxProps> = (props) => {

    const {
        title,
        message,
        open,
        cancelHandler,
        confirmHandler
    } = props;

    return (
        <Modal
            open={open}
        // onClose={handleClose}
        >
            <Box component={'div'} sx={{
                position: 'absolute' as 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: '#23272e',
                border: '2px solid #f9f9fb',
                borderRadius: 2,
                boxShadow: 24,
                p: 2,
            }}>
                <Box component={'div'}>
                    <Typography variant="h6" component="h2">
                        {title}
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        {message}
                    </Typography>
                </Box>
                <Box sx={{ mt: 2 }} display={'flex'} justifyContent={'flex-end'} gap={2}>
                    <Button variant='outlined' color='primary' onClick={cancelHandler}>
                        Cancel
                    </Button>
                    <Button variant='contained' color='primary' onClick={confirmHandler} >
                        Confirm
                    </Button>
                </Box>

            </Box>
        </Modal>
    )
}

export default ConfirmBox