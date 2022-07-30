import { IAvailableActions } from '../interfaces/actions';

export const AppsModules: {
  [prop: string]: { title: string; service: string };
} = {
  warehouse: { title: 'Almacén', service: 'warehouse' },
  users: { title: 'users', service: 'users' },
};

export const Labels: IAvailableActions = {
  add: 'Crear',
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
  add: 'menu-button p-button-primary p-button-sm',
  incomes: 'menu-button p-button-text p-button-sm',
  outcomes: 'menu-button p-button-text p-button-sm',
  update: 'menu-button p-button-text p-button-sm',
};
