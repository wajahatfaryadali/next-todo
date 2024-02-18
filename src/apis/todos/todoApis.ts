import axios from "axios";
import { ADD_TODO_API_URL, USERS_TODO_LIST_API_URL } from "../apiConstants";
import { errorHandler } from "@/utils/helpers/apis";
import { AddTodoPayload } from "@/components/TodoComponents/CreateTodo/CreateTodo";

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



// fetch('', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     todo: 'Use DummyJSON in the project',
//     completed: false,
//     userId: 5,
//   })
// })
// .then(res => res.json())
// .then(console.log);