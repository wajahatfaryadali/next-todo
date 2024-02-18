'use client'

import MTextField from "@/components/muiComponents/MTextField/MTextField"
import { Box } from "@mui/material"
import { useState } from "react"
import classes from "./index.module.css"
import { useDispatch, useSelector } from "react-redux"
import { currentUser } from "@/store/slices/selectors/user.selector"
import { addTodoApi } from "@/apis/todos/todoApis"
import { addTodo } from "@/store/slices/todoSlice"
import { toaster } from "@/utils/helpers/toaster"
import { NEW_TODO_ADDED } from "@/utils/constants/messages"

export interface AddTodoPayload {
    todo: string,
    completed: boolean;
    userId: number | string;
}

const CreateTodo = () => {

    const user = useSelector(currentUser);
    const dispatch = useDispatch();

    const [todo, setTodo] = useState<string>('')

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        if (todo && user.id) {
            const payload: AddTodoPayload = {
                todo: todo,
                completed: false,
                userId: user.id
            }
            addTodoApi(payload).then(res => {
                dispatch(addTodo(res.data))
                setTodo("")
                toaster.show('success', NEW_TODO_ADDED)

            }).catch(err => {
                console.log('err *** ', err);
                toaster.show('error', err)
            })
        }
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