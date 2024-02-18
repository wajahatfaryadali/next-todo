'use client'
import CustomLayout from '@/components/CustomLayout/CustomLayout'
import BoxContainer from '@/components/muiComponents/BoxContainer/BoxContainer'
import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { URL_HOME, URL_SIGN_UP } from '@/utils/routes-path'
import { SignInFormValueState } from '../config'
import MTextField from '@/components/muiComponents/MTextField/MTextField'
import { toaster } from '@/utils/helpers/toaster'
import { ERR_PASSWORD_EMPTY, SUCCESS_USER_LOGIN } from '@/utils/constants/messages'
import { containsOnlySpaces } from '@/utils/helpers/helpers'
import { signInApi } from '@/apis/auth/authApis'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '@/store/slices/userSlice'
import { useRouter } from 'next/navigation'
import { currentUser } from '@/store/slices/selectors/user.selector'
import FullPageLoader from '@/app/loading'

const page = () => {

  const dispatch = useDispatch()
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState<SignInFormValueState>({
    email: '',
    password: '',
  })

  const user = useSelector(currentUser);

  useEffect(() => {
    if (user.token) {
      router.push(URL_HOME)
    }
  }, [user])

  const handleSubmit = async (event: React.FormEvent) => {
    setLoading(true)
    event.preventDefault()
    // check blank spaces
    if (containsOnlySpaces(value.password)) {

      toaster.show('error', ERR_PASSWORD_EMPTY);
      setLoading(false)

    } else if (value.email && value.password) {

      signInApi(value).then(res => {

        dispatch(setUser(res.data))
        toaster.show('success', SUCCESS_USER_LOGIN)
        setLoading(false)
        router.push(URL_HOME)

      })
        .catch(err => {

          toaster.show('error', err)
          setLoading(false)
          
        });
    } else { }
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue({
      ...value,
      [event.target.id]: event.target.value
    })
  }

  return (
    <CustomLayout>
      <BoxContainer>
        <Box
          component={'form'}
          onSubmit={handleSubmit}
          display={'flex'}
          flexDirection={'column'}
          gap={2}
        >
          <Typography variant="h4" textAlign={'center'}>
            todoz app
          </Typography>
          <Typography variant="h5" textAlign={'center'}>
            Sign In
          </Typography>
          <MTextField
            id="email"
            label="Username"
            type="text"
            value={value.email}
            onChange={handleChange}
            required
          />
          <MTextField
            id="password"
            label="Password"
            type="password"
            value={value.password}
            onChange={handleChange}
            required
          />

          <Button variant='contained' fullWidth type='submit'>
            Log in
          </Button>
          <Box>
            <Typography color={'primary.textGray'}>
              Don't have an account? {' '}
              <Link href={URL_SIGN_UP}>
                <Typography component={'span'} color={'primary.light'} sx={{ cursor: 'pointer' }} fontWeight={500}>
                  Sign Up.
                </Typography>
              </Link>
            </Typography>
          </Box>
        </Box>
      </BoxContainer>
      <FullPageLoader loading={loading} />
    </CustomLayout>
  )
}

export default page