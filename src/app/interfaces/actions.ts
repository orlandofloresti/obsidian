export interface IAction {
  label: string;
  icon: string;
  class: string;
}

export interface IActions {
  primary: IAction[];
  secondary: IAction[];
}
