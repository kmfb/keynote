import { ADD_NOTE, UPDATE_NOTE, SWAP_NOTE } from "../constants/actionTypes";
import { IAction, INote } from "../constants/types";

export const addNote = (note: INote): IAction => ({
  type: ADD_NOTE,
  payload: note,
});

export const updateNote = (note: INote): IAction => ({
  type: UPDATE_NOTE,
  payload: note,
});

export const swapNote = (note: INote): IAction => ({
  type: SWAP_NOTE,
  payload: note.id,
});
