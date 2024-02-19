// I have used AXIOS for api call 
// we can do this using thunk or saga but i think this is not as much complex to go with saga or thunk 
// and we can also use RTK async thunk but because Axios is popular and most used one that's why i used it


import { SignInFormValueState, SignUpFormValueState } from '@/utils/constants/interfaces';
import axios from "axios"
import { SIGN_IN_API_URL, SIGN_UP_API_URL } from "../apiConstants"
import { errorHandler } from "@/utils/helpers/apis"

export const signInApi = async (payload: SignInFormValueState) => {
    const payloadWithUserName = {
        username: payload?.email,
        password: payload?.password,
    }
    try {
        const response = await axios.post(SIGN_IN_API_URL, payloadWithUserName);
        return response;
    } catch (error) {
        console.error('Error in signInApi:', errorHandler(error));
        throw errorHandler(error)
    }
}

export const signUpApi = async (payload: SignUpFormValueState) => {
    const payloadWithUserName = {
        firstName: payload.firstName,
        lastName: payload.lastName,
        age: payload.age ?? ''
    }
    try {
        const response = await axios.post(SIGN_UP_API_URL, payloadWithUserName);
        return response;
    } catch (error) {
        console.error('Error in signInApi:', errorHandler(error));
        throw errorHandler(error)
    }
}