import { Classes, Icons, Labels } from 'src/app/const/actions';
import { ModulesTitles } from 'src/app/const/modules';
import { IViewList } from 'src/app/interfaces/view-list';
import { WarehouseService } from '../../services/warehouse.service';

export const WarehouseFactory: IViewList = {
  service: WarehouseService,
  title: ModulesTitles.warehouse,
  actions: {
    left: [
      {
        label: Labels.add,
        class: Classes.add,
        icon: Icons.add,
      },
      {
        label: Labels.incomes,
        class: Classes.incomes,
        icon: Icons.incomes,
      },
      {
        label: Labels.outcomes,
        class: Classes.outcomes,
        icon: Icons.outcomes,
      },
      {
        label: Labels.update,
        class: Classes.update,
        icon: Icons.update,
      },
    ],
    right: [],
  },

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
