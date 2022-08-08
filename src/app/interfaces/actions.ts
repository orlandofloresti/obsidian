/**
 * @description List available actions in the project
 */
export interface IAvailableActions {
  add: IAction;
  incomes: IAction;
  outcomes: IAction;
  update: IAction;
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
  left: IAction[];
  right: IAction[];
}
