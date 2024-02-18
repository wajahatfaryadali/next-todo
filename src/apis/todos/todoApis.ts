import axios from "axios";
import { USERS_TODO_LIST_API_URL } from "../apiConstants";
import { errorHandler } from "@/utils/helpers/apis";

export const getUsersTodoListApi = async (userId: string | number) => {

    try {
        const response = await axios.get(USERS_TODO_LIST_API_URL + userId);
        return response;
    } catch (error) {
        console.error('Error in signInApi:', errorHandler(error));
        throw errorHandler(error)
    }
}