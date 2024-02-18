import { URL_HOME } from '@/utils/routes-path'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'

export default function NotFound() {
    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} width={'100vw'} height={'100vh'} flexDirection={'column'}>
            <Typography variant={'h5'} py={1}>:): Page Not Found</Typography>

            <Link href={URL_HOME} style={{ borderBottom: '1px solid #e6b540' }}>Return Home</Link>
        </Box>
    )
}