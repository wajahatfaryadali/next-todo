'use client'

import MTextField from "@/components/muiComponents/MTextField/MTextField"
import { Box } from "@mui/material"
import { useState } from "react"

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
            sx={{
                width: { xs: '100%', sm: '90%', md: '80%' },
                borderBottom: "1px solid #242930",
                backgroundColor: "#23282f",
                borderRadius: '8px', p: '1rem'
            }}
        >
            <MTextField
                id="todo"
                label="todo"
                type="text"
                value={todo}
                onChange={handleChange}
                required
            />
        </Box>

    )
}

export default CreateTodo