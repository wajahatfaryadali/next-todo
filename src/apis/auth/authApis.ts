import { SignInFormValueState, SignUpFormValueState } from "@/app/auth/config"
import axios from "axios"
import { SIGN_IN_API_URL, SIGN_UP_API_URL } from "../apiConstants"
import { errorHandler } from "@/utils/helpers/apis"

export const signInApi = async (payload: SignInFormValueState) => {
    // chainging email to username because https://dummyjson.com/docs/auth is using username
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