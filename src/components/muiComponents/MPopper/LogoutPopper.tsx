import {
    Box,
    ButtonBase,
    // Avatar,
    IconButton, Popover, Typography
} from '@mui/material';
// import avatar from '@/assets/images/userPlaceholder.jpg'
import AccountCircle from '@mui/icons-material/AccountCircle';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '@/store/slices/userSlice';
import { resetTodos } from '@/store/slices/todoSlice';
import { currentUser } from '@/store/slices/selectors/user.selector';

const LogoutPopper = () => {

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const user = useSelector(currentUser)

    const dispatch = useDispatch();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleLogout = () => {
        dispatch(removeUser())
        dispatch(resetTodos())
    }

    return (
        <>
            <IconButton onClick={handleClick} sx={{ padding: 0 }}>
                {/* will use Avatar with imgs */}
                {/* <Avatar alt="Remy Sharp" src={"/static/images/avatar/2.jpg"} /> */}
                <AccountCircle sx={{ color: '#fff' }} />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Box component={'div'} sx={{ p: 1 }}>
                    <Typography sx={{ p: 1 }}>{user.firstName}</Typography>
                    <ButtonBase onClick={handleLogout} sx={{ p: 1, fontSize: '16px', width: '100%', justifyContent: 'left' }}  >Logout</ButtonBase>
                </Box>
            </Popover >
        </>
    )
}

export default LogoutPopper