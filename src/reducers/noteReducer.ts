import { UPDATE_NOTE } from "./../constants/actionTypes";
import { ADD_NOTE } from "../constants/actionTypes";
import { v4 as uuidv4 } from "uuid";
import { IAction, INote } from "../constants/types";
import { initialState } from "../constants/mockState";

const noteReducer = (state: Array<INote> = initialState, action: IAction) => {
  switch (action.type) {
    case ADD_NOTE:
      const newNote: INote = {
        id: uuidv4(),
        text: action.payload,
        created: "",
        lastUpdated: "",
      };
      return [...state, newNote];
    case UPDATE_NOTE:
      return state.map((note) =>
        note.id === action.payload.id
          ? {
              ...action.payload,
              lastUpdated: "",
            }
          : note
      );
    default:
      return state;
  }
};

export default noteReducer;
