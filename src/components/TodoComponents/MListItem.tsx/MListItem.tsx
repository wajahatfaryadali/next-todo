'use client'
import React, { useState } from 'react'
import {
    Box, Checkbox, IconButton,
    // InputBase,
    ListItem, ListItemIcon, ListItemText
} from "@mui/material"

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

type todo = {
    id: number,
    todo: string,
    completed: boolean;
    userId: number;
}

interface MListItemProps {
    todo: todo;
    handleTodoClick: (clickType: string) => void
}

const MListItem: React.FC<MListItemProps> = (props) => {
    const { todo, handleTodoClick } = props;

    const [isChecked, setIsChecked] = useState<boolean>(todo.completed)

    return (
        <ListItem
            secondaryAction={
                <Box component={'div'} display={'flex'} gap={1}>
                    <IconButton edge="end" aria-label="delete" onClick={() => handleTodoClick('delete')} >
                        <DeleteOutlineOutlinedIcon color='primary' />
                    </IconButton>
                    <IconButton edge="end" aria-label="edit" onClick={() => handleTodoClick('edit')} >
                        <EditOutlinedIcon color='primary' />
                    </IconButton>
                </Box>
            }
            sx={{ borderBottom: "1px solid #242930", backgroundColor: "#525d6d", borderRadius: '8px', mt: '1rem', paddingRight: '92px' }}
        >
            <ListItemIcon>
                <Checkbox
                    checked={isChecked}
                    disableRipple
                    onClick={() => setIsChecked(prevState => !prevState)}
                    color='primary'
                    sx={{
                        color: "white",
                    }}
                />
            </ListItemIcon>
            <Box component={'div'} width={'100%'}>
                <ListItemText
                    primary={todo.todo}
                    onClick={() => setIsChecked(prevState => !prevState)}
                    sx={{ cursor: 'pointer' }}
                />
            </Box>
        </ListItem>
    )
}

export default MListItem