'use client'

import MTextField from "@/components/muiComponents/MTextField/MTextField"
import { Box } from "@mui/material"
import { useState } from "react"
import classes from "./index.module.css"

const CreateTodo = () => {

    const [todo, setTodo] = useState<string>('')
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        alert('form added')
    }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setTodo(event.target.value)
    }

    return (
        <Box
            component={'form'}
            onSubmit={handleSubmit}
            className={classes.formContainer}
            width={{ xs: '100%', sm: '90%', md: '80%' }}
        >
            <MTextField
                id="todo"
                value={todo}
                label='Todo'
                type="text"
                // variant="standard"
                variant="outlined"
                onChange={handleChange}
                rootClass={classes.InputField}
                buttonOnLast="Add"
            />
        </Box>

    )
}

export default CreateTodo