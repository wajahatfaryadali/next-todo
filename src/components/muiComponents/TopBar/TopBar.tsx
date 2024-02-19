import { Container, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import classes from './topBar.module.css'
import LogoutPopper from '../MPopper/LogoutPopper';

const TopBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" classes={{ root: classes.appBar }}>
                <Toolbar sx={{ px: { xs: 0, md: '' } }}>
                    <Container
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Typography>
                            Todoz
                        </Typography>
                        <>
                            <LogoutPopper />
                        </>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default TopBar
