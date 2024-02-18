import { RootState } from "../../store";
export const todosList = (state: RootState) => state.todo.todos;
export const totalTodos = (state: RootState) => state.todo.total;