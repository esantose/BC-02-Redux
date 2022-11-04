import { SET_AGE, SET_EMAIL, SET_LASTNAME, SET_NAME } from "../types/userTypes";

export const initialState = {
  name: "",
  lastName: "",
  age: "",
  email: "",
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: "José Fernando",
      };
    case SET_LASTNAME:
      return {
        ...state,
        lastName: action.payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: "correo@correo.com",
      };
    case SET_AGE:
      return {
        ...state,
        age: action.payload,
      };
    default:
      return initialState;
  }
};