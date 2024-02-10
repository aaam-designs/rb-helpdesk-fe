import { Types } from "../constants/actionTypes";

export const ActionCreators = {
  register: (user) => ({ type: Types.REGISTER, payload: { user } }),

  login: (user) => ({ type: Types.LOGIN, payload: { user } }),

  logout: (user) => ({ type: Types.LOGOUT, payload: { user } }),
};
