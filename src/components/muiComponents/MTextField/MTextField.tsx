import React, { useState } from "react"
import { Button, InputAdornment, TextField } from "@mui/material"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { MTextFieldProps } from "@/utils/constants/interfaces";



const MTextField: React.FC<MTextFieldProps> = (props) => {

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const {
        id,
        label,
        type,
        value,
        onChange,
        fullWidth = true,
        required = false,
        rootClass = {},
        variant = "outlined",
        buttonOnLast = "",
    } = props;

    return (
        <TextField
            id={id}
            label={label}
            variant={variant}
            type={
                type === 'password'
                    ? showPassword
                        ? 'text'
                        : type
                    : type}
            value={value}
            onChange={onChange}
            fullWidth={fullWidth}
            autoComplete={type === 'password' ? type : ""}
            // autoComplete="off"
            InputProps={{
                endAdornment:
                    type === 'password'
                        ?
                        <InputAdornment position='end' sx={{ cursor: 'pointer' }} onClick={() => setShowPassword(!showPassword)}>
                            {showPassword
                                ? <VisibilityOffOutlinedIcon color="primary" />
                                : <VisibilityOutlinedIcon color="primary" />}
                        </InputAdornment>
                        :
                        buttonOnLast !== ""
                            ? <Button variant="text" type="submit" sx={{ width: '80px'}}>{buttonOnLast}</Button> // will only work for submit form because for now i have only this use
                            : '',
            }}
            sx={{
                color: '#fff',
                '& .MuiInputBase-root': {
                    paddingRight: buttonOnLast ? '0px' : '',
                },
                "&.label.Mui-focused": {
                    color: 'white'
                },
                "& .MuiInputLabel-root": {
                    color: '#fff',
                    "&.Mui-focused": {
                        color: '#fff'
                    }
                },
                "& .MuiOutlinedInput-root": {
                    color: 'white',
                    '& fieldset': {
                        borderColor: 'white',
                    },
                    '&:hover fieldset': {
                        borderColor: 'white',
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "white"
                    },
                    "&.fieldset": {
                        borderColor: "white"
                    }
                }
            }}
            required={required}
            classes={{ root: rootClass }}
        />
    )
}

export default MTextField