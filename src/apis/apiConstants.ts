// as we have limited number of apis that's why using single file for these constants

// auth
const login = '/auth/login'
const addUser = '/users/add'

// todos
const addTodo = "/todos/add"
const usersTodo = "/todos/user/"
const update_delete_todo = '/todos/'

export const baseUrl = 'https://dummyjson.com';

export const SIGN_IN_API_URL = `${baseUrl + login}`
export const SIGN_UP_API_URL = `${baseUrl + addUser}`

export const USERS_TODO_LIST_API_URL = `${baseUrl + usersTodo}`
export const ADD_TODO_API_URL = `${baseUrl + addTodo}`

export const UPDATE_DELETE_TODO_API_URL = `${baseUrl + update_delete_todo}`

