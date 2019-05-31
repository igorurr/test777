import { INIT_APP, EXIT_APP } from "../constants/app";

export const initApp = () => ({
  type: INIT_APP,
});
export const exitApp = () => ({
  type: EXIT_APP,
});
