import axios from "axios";
import { ADD_TODO_API_URL, UPDATE_DELETE_TODO_API_URL, USERS_TODO_LIST_API_URL } from "../apiConstants";
import { errorHandler } from "@/utils/helpers/apis";
import { AddTodoPayload } from "@/components/TodoComponents/CreateTodo/CreateTodo";
import { SingleTodo } from "@/store/slices/todoSlice";

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

// fetch('https://dummyjson.com/todos/1', {
//   method: 'DELETE',
// })
// .then(res => res.json())
// .then(console.log);