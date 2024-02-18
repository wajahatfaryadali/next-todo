import { isAxiosError } from "axios";
import { ERR_OCCUR } from "../constants/messages";

export const getErrorStatus = (e: any) => e?.response?.status || e?.code || 0;

export function errorHandler(e: any) {
    if (isAxiosError(e)) {
        // console.log('isaxios ***** ', e.response)
        // console.log('isaxios ***** ', e.response.data.message)
        // console.log('isaxios ***** ', e.message)

        return e.response ? e.response.data.message : e.message;
    } else {
        // console.log('isaxios ***** ', e)
        return e?.message || ERR_OCCUR;
    }
}