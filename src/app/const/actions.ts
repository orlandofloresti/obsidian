import { IAvailableActions } from '../interfaces/actions';

export const Labels: IAvailableActions = {
  add: 'Agregar',
  incomes: 'Entradas',
  outcomes: 'Salidas',
  update: 'Actualizar',
};

export const Icons: IAvailableActions = {
  add: 'pi pi-plus',
  incomes: 'pi pi-angle-double-down',
  outcomes: 'pi pi-angle-double-up',
  update: 'pi pi-refresh',
};

export const Classes: IAvailableActions = {
  add: 'p-button-rounded p-button-sm',
  incomes: 'p-button-outlined p-button-rounded p-button-sm',
  outcomes: 'p-button-outlined p-button-rounded p-button-sm',
  update: 'p-button-outlined p-button-rounded p-button-sm',
};
