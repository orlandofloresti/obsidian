import { AvailableActions } from 'src/app/const/actions';
import { ModulesTitles } from 'src/app/const/modules';
import { IViewList } from 'src/app/interfaces/view-list';
import { WarehouseService } from '../../services/warehouse.service';

export const WarehouseFactory: IViewList = {
  service: WarehouseService,
  title: ModulesTitles.warehouse,
  actions: [
    AvailableActions.add,
    AvailableActions.incomes,
    AvailableActions.outcomes,
    AvailableActions.update,
  ],
  dataHeaders: [
    {
      label: 'Código',
      key: 'code',
    },
    {
      label: 'Descripción',
      key: 'description',
    },
    {
      label: 'Color',
      key: 'color',
    },
    {
      label: 'Talla',
      key: 'size',
    },
    {
      label: 'Cantidad',
      key: 'quantity',
    },
    {
      label: 'Opciones',
      key: 'options',
    },
  ],
  dataTable: [],
};
