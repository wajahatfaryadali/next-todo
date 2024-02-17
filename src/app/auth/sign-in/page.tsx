'use client'
import CustomLayout from '@/components/CustomLayout/CustomLayout'
import BoxContainer from '@/components/muiComponents/BoxContainer/BoxContainer'
import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Link from 'next/link'
import { URL_SIGN_UP } from '@/utils/routes-path'


interface SignInFormValueState {
  email: string;
  password: string | number;
}

const page = () => {

  const [value, setValue] = useState<SignInFormValueState>({
    email: '',
    password: '',
  })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    console.log('cehngae', event.target.id)
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
            Todo App
          </Typography>
          <Typography variant="h5" textAlign={'center'}>
            Sign In
          </Typography>
          <TextField
            id="email"
            label="Email"
            type="email"
            value={value.email}
            onChange={handleChange}
            required
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            value={value.password}
            onChange={handleChange}
            required
            sx={{ color: '#fff' }}
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
    </CustomLayout>
  )
}

export default page