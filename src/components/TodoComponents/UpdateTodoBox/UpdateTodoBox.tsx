import MTextField from '@/components/muiComponents/MTextField/MTextField';
import { Box, Button, Modal } from '@mui/material'
import React, { useState } from 'react'


interface UpdateTodoBoxProps {
    selectedTodo: any;
    open: boolean;
    cancelHandler: () => void;
    confirmHandler: () => void;
}

const UpdateTodoBox: React.FC<UpdateTodoBoxProps> = (props) => {

    const {
        open,
        selectedTodo,
        cancelHandler,
        confirmHandler,
    } = props;

    const [updatedTodo, setUpdatedTodo] = useState<string>(selectedTodo?.todo || '')

    const handleTodoChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setUpdatedTodo(event.target.value);
    }

    return (
        <Modal
            open={open}
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
                <Box py={2} maxWidth={'90%'} mx={'auto'}>
                    <MTextField onChange={handleTodoChange} value={updatedTodo} type='text' id='updateTodo' label='Update' />
                </Box>
                <Box sx={{ mt: 2, pt: 1, px: 2 }} display={'flex'} justifyContent={'flex-end'} gap={2}>
                    <Button variant='outlined' color='primary' onClick={cancelHandler}>
                        Cancel
                    </Button>
                    <Button variant='contained' color='primary' onClick={confirmHandler} >
                        Update
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default UpdateTodoBox