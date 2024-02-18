'use client'
import CustomLayout from '@/components/CustomLayout/CustomLayout'
import BoxContainer from '@/components/muiComponents/BoxContainer/BoxContainer'
import React, { useState } from 'react'
import { SignUpFormValueState } from '../config'
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import { URL_SIGN_IN } from '@/utils/routes-path'
import MTextField from '@/components/muiComponents/MTextField/MTextField'
import { containsOnlySpaces } from '@/utils/helpers/helpers'
import { toaster } from '@/utils/helpers/toaster'
import { ERR_AGE, ERR_FIRST_NAME_EMPTY, ERR_LAST_NAME_EMPTY, SUCCESS_USER_ADDED, USER_CREATION_WARNING } from '@/utils/constants/messages'
import { signUpApi } from '@/apis/auth/authApis'
import { useRouter } from 'next/navigation'
import ConfirmBox from '@/components/TodoComponents/ConfirmBox/ConfirmBox'

const page = () => {

  const router = useRouter();
  const [showWarning, setShowWarning] = useState(false);

  const [value, setValue] = useState<SignUpFormValueState>({
    firstName: '',
    lastName: '',
    age: '',
  })  

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const onlySpacesFn = containsOnlySpaces(value.firstName);
    const onlySpacesLn = containsOnlySpaces(value.lastName);

    if (onlySpacesFn || onlySpacesLn || isNaN(Number(value.age))) {
      const errorMsg = isNaN(Number(value.age)) ? ERR_AGE : onlySpacesFn ? ERR_FIRST_NAME_EMPTY : ERR_LAST_NAME_EMPTY
      toaster.show('error', errorMsg);
    } else {
      setShowWarning(true);
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    // console.log('cehngae', event.target.id)
    setValue({
      ...value,
      [event.target.id]: event.target.value
    })
  }

  const confirmCreation = () => {
    setShowWarning(false);
    signUpApi(value).then((res: any) => {
      // console.log('res *** ', res)
      toaster.show('success', SUCCESS_USER_ADDED)
      setValue({
        firstName: '',
        lastName: '',
        age: '',
      })
      router.push(URL_SIGN_IN);
    }).catch((err: any) => {
      console.log('err *** ', err)
      toaster.show('error', err);
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
          <MTextField
            id="firstName"
            label="First Name"
            type="text"
            value={value.firstName}
            onChange={handleChange}
            required
          />
          <MTextField
            id="lastName"
            label="Last Name"
            type="text"
            value={value.lastName}
            onChange={handleChange}
            required
          />

          <MTextField
            id="age"
            label="age"
            type="text"
            value={value.age}
            onChange={handleChange}
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
        <ConfirmBox
          title="Create User Confirmation!"
          message={USER_CREATION_WARNING}
          open={showWarning}
          cancelHandler={() => setShowWarning(false)}
          confirmHandler={confirmCreation}
        />
      </BoxContainer>
    </CustomLayout>
  )
}

export default page