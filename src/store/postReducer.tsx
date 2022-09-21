import { IAction, IData } from "../types";
import { STORE_DATA } from "./actionTypes";

const initialState: IData = {
  data: [],
};

export const postReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case STORE_DATA:
      return {
        ...state,
        data: [...action.payload],
      };
    default:
      return state;
  }
};
