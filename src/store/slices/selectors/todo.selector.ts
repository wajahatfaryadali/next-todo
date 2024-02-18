import { RootState } from "../../store";
export const todosList = (state: RootState) => state.todo.todos;
export const totalTodos = (state: RootState) => state.todo.total;
export const completedTodos = (state: RootState) => state.todo.completedTodos;
export const incompleteTodos = (state: RootState) => state.todo.incompleteTodos;
