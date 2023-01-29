import { IAvailableActions } from '../interfaces/actions';

export const AvailableActions: IAvailableActions = {
  add: {
    label: 'Agregar',
    icon: 'pi pi-plus',
    class: 'p-button-rounded p-button-sm',
  },
  incomes: {
    label: 'Entradas',
    icon: 'pi pi-angle-double-down',
    class: 'p-button-outlined p-button-rounded p-button-sm',
  },
  outcomes: {
    label: 'Salidas',
    icon: 'pi pi-angle-double-up',
    class: 'p-button-outlined p-button-rounded p-button-sm',
  },
  update: {
    label: 'Actualizar',
    icon: 'pi pi-refresh',
    class: 'p-button-outlined p-button-rounded p-button-sm',
  },
};
