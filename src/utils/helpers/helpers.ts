import { URL_SIGN_IN, URL_SIGN_UP } from "../routes-path";

export const handleTopbarVisibility = (path: string) => {
    if (path === URL_SIGN_UP || path === URL_SIGN_IN) {
        return false;
    } else {
        return true
    }
}

export function containsOnlySpaces(password: string | number) {
    const string = password.toString().trim()
    const regex = /^\s*$/;
    return regex.test(string);
}


export const checkPasswordSame = (password: string | number, confirmPassword: string | number) => {
    if (password !== confirmPassword) {
        return false;
    } else {
        return true;
    }
}