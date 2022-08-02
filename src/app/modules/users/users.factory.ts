import { Classes, Icons, Labels } from 'src/app/const/actions';
import { ModulesTitles } from 'src/app/const/modules';
import { IViewList } from 'src/app/interfaces/view-list';
import { UsersService } from 'src/app/services/users.service';

export const UserFactory: IViewList = {
  service: UsersService,
  title: ModulesTitles.users,
  actions: {
    left: [
      {
        label: Labels.add,
        class: Classes.add,
        icon: Icons.add,
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
      label: 'Nombre',
      key: 'name',
    },
    {
      label: 'Role',
      key: 'role',
    },
    {
      label: 'Opciones',
      key: 'options',
    },
  ],
  dataTable: [],
};
