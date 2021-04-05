import create from "zustand";
import { devtools, redux } from "zustand/middleware";

const initialState = { user: { token: "" } };

export const LOGIN = "LOGIN";

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    default:
      return state;
  }
};

export const useStore = create(devtools(redux(reducer, initialState)));
