import { AvailableActions } from 'src/app/const/actions';
import { ModulesTitles } from 'src/app/const/modules';
import { IViewList } from 'src/app/interfaces/view-list';
import { UsersService } from 'src/app/services/users.service';

export const UserFactory: IViewList = {
  service: UsersService,
  title: ModulesTitles.users,
  actions: {
    left: [AvailableActions.add, AvailableActions.update],
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
