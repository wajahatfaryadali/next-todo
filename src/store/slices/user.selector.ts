import { RootState } from "../store";
export const currentUser = (state: RootState) => state.user.currentUser;
export const authToken = (state: RootState) => state.user.authToken;
