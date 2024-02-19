
import React from 'react'
import {
    Box, Checkbox, IconButton,
    ListItem, ListItemIcon, ListItemText,
    Tooltip,
} from "@mui/material"

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

import { MListItemProps } from '@/utils/constants/interfaces';

const MListItem: React.FC<MListItemProps> = (props) => {
    const { todo, handleTodoClick, isCompletedList = false } = props;

    return (
        <ListItem
            secondaryAction={
                <Box component={'div'} display={'flex'} gap={'8px'}>
                    <Box component={'div'} width={'32px'} height={'32px'}>
                        <IconButton edge="end" aria-label="delete" onClick={() => handleTodoClick('delete', todo)} sx={{maxWidth: '32px', maxHeight: '32px'}}>
                            <Tooltip title='delete' placement='top'>
                                <DeleteOutlineOutlinedIcon color='primary' />
                            </Tooltip>
                        </IconButton>
                    </Box>
                    <Box component={'div'} width={'32px'} height={'32px'}>
                        <IconButton edge="end" aria-label="edit" disabled={todo.completed} onClick={() => handleTodoClick('edit', todo)} sx={{ opacity: todo.completed ? '0.25' : '1', maxWidth: '32px', maxHeight: '32px' }}>
                            <Tooltip title='edit' placement='top'>
                                <EditOutlinedIcon color='primary' />
                            </Tooltip>
                        </IconButton>
                    </Box>
                </Box>
            }
            sx={{
                borderBottom: "1px solid #242930",
                backgroundColor: "#525d6d",
                borderRadius: '8px',
                mt: '1rem',
                paddingRight: '92px'
            }}
        >
            <ListItemIcon>
                <Tooltip title={todo.completed ? 'mark incomplete' : 'mark complete'} placement='top'>
                    <Checkbox
                        checked={todo.completed}
                        disableRipple
                        onClick={() => handleTodoClick('check', { ...todo, completed: !todo.completed })}
                        color='primary'
                        sx={{
                            color: "white",
                        }}
                    />
                </Tooltip>
            </ListItemIcon>
            <Box component={'div'} width={'100%'}>
                <ListItemText
                    primary={todo.todo}
                    onClick={() => handleTodoClick('check', { ...todo, completed: !todo.completed })}
                    sx={{ cursor: 'pointer', textDecoration: todo.completed && !isCompletedList ? 'line-through' : '' }}
                />
            </Box>
        </ListItem>
    )
}

export default MListItem