// auth
const login = '/auth/login'
const addUser = '/users/add'

// todos
// 'https://dummyjson.com/todos/user/5
const usersTodo = "/todos/user/"
const addTodo = "/todos/add"

export const baseUrl = 'https://dummyjson.com';

export const SIGN_IN_API_URL = `${baseUrl + login}`
export const SIGN_UP_API_URL = `${baseUrl + addUser}`

export const USERS_TODO_LIST_API_URL = `${baseUrl + usersTodo}`
export const ADD_TODO_API_URL = `${baseUrl + addTodo}`