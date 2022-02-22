export interface INote {
  id: string;
  text: string;
  created: string;
  lastUpdated: string;
}

export type INotes = Array<INote>;

export interface IAction {
  type: string;
  payload: any;
}

export interface IState {
  notes: INotes;
  active: string;
}
