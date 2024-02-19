// all of the interfaces used in app are define here
// becuase we don't have too much that's why i have created single file and place all in it

import { TextFieldVariants } from "@mui/material";

export interface SignInFormValueState {
    email: string;
    password: string | number;
}

export interface SignUpFormValueState {
    firstName: string;
    lastName: string;
    age: string;
}

export interface ConfirmBoxState {
    delete: boolean;
    edit: boolean;
}

export interface BoxContainerProps {
    children: React.ReactNode
    width?: string | number // can be 500px or 500 
}

export interface SingleTodo {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
    isDeleted?: boolean
}

export interface todoSliceState {
    todos: SingleTodo[];
    completedTodos: SingleTodo[];
    incompleteTodos: SingleTodo[];
    total: number;
}

export interface MListItemProps {
    todo: SingleTodo;
    handleTodoClick: (clickType: string, todo: SingleTodo) => void
}

export interface MTextFieldProps {
    id: string;
    label: string;
    type: string;
    fullWidth?: boolean;
    value: string | number;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
    required?: boolean;
    variant?: TextFieldVariants | undefined;
    rootClass?: any;
    buttonOnLast?: string;
}

export interface ConfirmBoxProps {
    title: string;
    message: string;
    open: boolean;
    editMode?: boolean,
    cancelHandler: () => void;
    confirmHandler: () => void;
}

export interface AddTodoPayload {
    todo: string,
    completed: boolean;
    userId: number | string;
}

export interface ListContainerProps {
    handleTodoClick: (clickType: string, todo: SingleTodo) => void
}


export interface UpdateTodoBoxProps {
    selectedTodo: any;
    open: boolean;
    cancelHandler: () => void;
    confirmHandler: (updatedText: string) => void;
}

export interface userApiResponse {
    email: string;
    firstName: string;
    gender: string;
    id: number | string;
    image: string;
    lastName: string;
    token: string;
    username: string;
}

export interface userSliceState {
    currentUser: userApiResponse;
    authToken: string;
}