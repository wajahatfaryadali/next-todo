import { Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import classes from './topBar.module.css'
import { URL_HOME, URL_SIGN_IN, URL_SIGN_UP } from '@/utils/routes-path';
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
                        <Link href={URL_SIGN_IN}>
                            Todoz
                        </Link>
                        <Box sx={{ display: 'flex', gap: 2, flexGrow: 1, justifyContent: 'center' }}>
                            <Link href={URL_HOME}>
                                HOME
                            </Link>
                        </Box>
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
