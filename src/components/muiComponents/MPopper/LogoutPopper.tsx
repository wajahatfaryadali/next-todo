import {
    Box,
    ButtonBase,
    // Avatar,
    IconButton, Popover, Typography
} from '@mui/material';
// import avatar from '@/assets/images/userPlaceholder.jpg'
import AccountCircle from '@mui/icons-material/AccountCircle';
import React from 'react'
import { useDispatch } from 'react-redux';
import { removeUser } from '@/store/slices/userSlice';
import { toaster } from '@/utils/helpers/toaster';
import { resetTodos } from '@/store/slices/todoSlice';

const LogoutPopper = () => {

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

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
        toaster.show('success', 'Logout Successfully!')
    }

    return (
        <>
            <IconButton onClick={handleClick} sx={{ padding: 0 }}>
                {/* <Avatar alt="Remy Sharp" src={"/static/images/avatar/2.jpg"} /> */}
                <AccountCircle sx={{ color: '#fff' }} />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                // transformOrigin={{
                //     vertical: 'top',
                //     horizontal: 'right',
                //   }}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Box component={'div'} sx={{ p: 1 }}>
                    <Typography sx={{ p: 1 }}>UserName</Typography>
                    <ButtonBase onClick={handleLogout} sx={{ p: 1, fontSize: '16px', width: '100%', justifyContent: 'left' }}  >Logout</ButtonBase>
                </Box>
            </Popover >
        </>
    )
}

export default LogoutPopper