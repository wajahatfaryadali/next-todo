import MTextField from '@/components/muiComponents/MTextField/MTextField';
import { Box, Button, Divider, Modal, Typography } from '@mui/material'
import React from 'react'


interface ConfirmBoxProps {
    title: string;
    message: string;
    open: boolean;
    editMode?: boolean,
    cancelHandler: () => void;
    confirmHandler: () => void;
    handleTodoChange?: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

const ConfirmBox: React.FC<ConfirmBoxProps> = (props) => {

    const {
        title,
        message,
        editMode,
        open,
        cancelHandler,
        confirmHandler,
        handleTodoChange
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
                {editMode && handleTodoChange ?
                    <Box py={2} maxWidth={'90%'} mx={'auto'}>
                        <MTextField onChange={handleTodoChange} value={message} type='text' id='updateTodo' label='Update' />
                    </Box>
                    :
                    <Typography sx={{ mt: 2 }} px={2}>
                        {message}
                    </Typography>
                }
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