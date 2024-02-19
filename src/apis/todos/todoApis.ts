// I have used AXIOS for api call 
// we can do this using thunk or saga but i think this is not as much complex to go with saga or thunk 
// and we can also use RTK async thunk but because Axios is popular and most used one that's why i used it

// setting this userId: string | number because in mongo it returns string 
// and i am using this for later use

import axios from "axios";
import { ADD_TODO_API_URL, UPDATE_DELETE_TODO_API_URL, USERS_TODO_LIST_API_URL } from "../apiConstants";
import { errorHandler } from "@/utils/helpers/apis";
import { AddTodoPayload, SingleTodo } from "@/utils/constants/interfaces";
export const getUsersTodoListApi = async (userId: string | number) => {

    try {
        const response = await axios.get(USERS_TODO_LIST_API_URL + userId);
        return response;
    } catch (error) {
        console.error('Error in signInApi:', errorHandler(error));
        throw errorHandler(error)
    }
}

export const addTodoApi = async (payload: AddTodoPayload) => {
    try {
        const response = await axios.post(ADD_TODO_API_URL, payload);
        return response;
    } catch (error) {
        console.error('Error in signInApi:', errorHandler(error));
        throw errorHandler(error)
    }
}

export const updateTodoApi = async (selectedTodo: SingleTodo) => {
    try {
        const payload = {
            completed: selectedTodo.completed,
            todo: selectedTodo.todo,
        }
        const response = await axios.put(UPDATE_DELETE_TODO_API_URL + selectedTodo.id, payload);
        return response;
    } catch (error) {
        console.error('Error in signInApi:', errorHandler(error));
        throw errorHandler(error)
    }
}

export const deleteTodoApi = async (todoId: number | string) => {
    try {
        const response = await axios.delete(UPDATE_DELETE_TODO_API_URL + todoId);
        return response;
    } catch (error) {
        console.error('Error in signInApi:', errorHandler(error));
        throw errorHandler(error)
    }
}