export interface SignInFormValueState {
    email: string;
    password: string | number;
}

export interface SignUpFormValueState {

    // email: string;
    // password: string | number;
    // confirmPassword: string | number;
    // age: number | string;
    
    // commenting above because on dummyjson api endpoint required below payload to create a user     

    firstName: string;
    lastName: string;
    age: string;
}