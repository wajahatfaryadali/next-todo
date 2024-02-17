'use client'
import CustomLayout from '@/components/CustomLayout/CustomLayout'
import BoxContainer from '@/components/muiComponents/BoxContainer/BoxContainer'
import React, { useState } from 'react'
import { SignUpFormValueState } from '../config'
import { Box, Button, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import { URL_SIGN_IN } from '@/utils/routes-path'

const page = () => {

  const [value, setValue] = useState<SignUpFormValueState>({
    email: '',
    password: '',
    confirmPassword: '',
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
            todoz app
          </Typography>
          <Typography variant="h5" textAlign={'center'}>
            Sign Up
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

          <TextField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            value={value.confirmPassword}
            onChange={handleChange}
            required
          />

          <Button variant='contained' fullWidth type='submit'>
            Sign Up
          </Button>
          <Box>
            <Typography color={'primary.textGray'}>
              Already have an account? {' '}
              <Link href={URL_SIGN_IN}>
                <Typography component={'span'} color={'primary.light'} sx={{ cursor: 'pointer' }} fontWeight={500}>
                  Sign In.
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