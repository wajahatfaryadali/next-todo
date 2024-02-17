import { URL_SIGN_IN, URL_SIGN_UP } from "../routes-path";

export const handleTopbarVisibility = (path: string) => {
    if (path === URL_SIGN_UP || path === URL_SIGN_IN) {
        return false;
    } else {
        return true
    }
}