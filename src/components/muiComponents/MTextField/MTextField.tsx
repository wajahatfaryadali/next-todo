import React, { useState } from "react"
import { InputAdornment, TextField } from "@mui/material"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

interface MTextFieldProps {
    id: string;
    label: string;
    type: string;
    fullWidth?: boolean;
    value: string | number;
    // value: SignInFormValueState
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
    required?: boolean
}

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
    } = props;

    return (
        <TextField
            id={id}
            label={label}
            variant="outlined"
            type={
                type === 'password'
                    ? showPassword
                        ? 'text'
                        : type
                    : type}
            value={value}
            onChange={onChange}
            // size="small"
            fullWidth={fullWidth}
            autoComplete={type === 'password' ? type : ""}

            InputProps={{
                endAdornment:
                    type === 'password' ?
                        <InputAdornment position='end' sx={{ cursor: 'pointer' }} onClick={() => setShowPassword(!showPassword)}>
                            {showPassword
                                ? <VisibilityOffOutlinedIcon />
                                : <VisibilityOutlinedIcon />}
                        </InputAdornment> : '',
            }}
            required={required}
        />
    )
}

export default MTextField