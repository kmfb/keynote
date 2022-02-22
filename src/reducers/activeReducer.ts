import { SWAP_NOTE } from "./../constants/actionTypes";
import { initialState } from "../constants/mockState";
import { IAction } from "../constants/types";

const activeReducer = (state: string = initialState[0].id, action: IAction) => {
  switch (action.type) {
    case SWAP_NOTE:
      return action.payload;
    default:
      return state;
  }
};

export default activeReducer;
