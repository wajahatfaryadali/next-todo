// i have declared these selectors here so i can directly use them

import { RootState } from "../../store";
export const currentUser = (state: RootState) => state.user.currentUser;
export const authToken = (state: RootState) => state.user.authToken;
