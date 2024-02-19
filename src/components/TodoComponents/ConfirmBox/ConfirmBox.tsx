import { ConfirmBoxProps } from '@/utils/constants/interfaces';
import { Box, Button, Divider, Modal, Typography } from '@mui/material'
import React from 'react'

const ConfirmBox: React.FC<ConfirmBoxProps> = (props) => {

    const {
        title,
        message,
        open,
        cancelHandler,
        confirmHandler,
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
                width: { xs: '90%', sm: 600 },
                bgcolor: '#23272e',
                border: '2px solid #f9f9fb',
                borderRadius: 2,
                boxShadow: 24,
                py: 2
            }}>
                <Typography variant="h6" component="h2" px={2}>
                    {title}
                </Typography>
                <Divider sx={{ borderColor: '#fff', pt: 1 }} />
                <Typography sx={{ mt: 2 }} px={2}>
                    {message}
                </Typography>
                <Box sx={{ mt: 2, pt: 1, px: 2 }} display={'flex'} justifyContent={'flex-end'} gap={2}>
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