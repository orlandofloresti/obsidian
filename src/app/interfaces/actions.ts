/**
 * @description List available actions in the project
 */
export interface IAvailableActions {
  add: string;
  incomes: string;
  outcomes: string;
  update: string;
}

/**
 * @description Properties of an action
 */
export interface IAction {
  label: string;
  icon: string;
  class: string;
}

/**
 * @description Object to show actions in header
 */
export interface IActions {
  primary: IAction[];
  secondary: IAction[];
}
