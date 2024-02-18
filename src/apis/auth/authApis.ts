import { SignInFormValueState } from "@/app/auth/config"
import axios from "axios"
import { SIGN_IN_API_URL } from "../apiConstants"
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