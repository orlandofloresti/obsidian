import { AvailableActions } from 'src/app/common/const/actions';
import { ModulesTitles } from 'src/app/common/const/modules';
import { IViewList } from 'src/app/common/interfaces/view-list';
import { WarehouseService } from './warehouse.service';

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
