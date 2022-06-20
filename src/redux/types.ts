export type Todo = {
  id: string;
  title: string;
  done: boolean;
  save: boolean;
}

export interface IState {
  todos: Todo[];
}


export type ActionPayload = {
  payload: Todo,
  type: string;
}