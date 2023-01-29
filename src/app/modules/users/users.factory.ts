import { AvailableActions } from 'src/app/const/actions';
import { ModulesTitles } from 'src/app/const/modules';
import { IViewList } from 'src/app/interfaces/view-list';
import { UsersService } from 'src/app/services/users.service';

export const UserFactory: IViewList = {
  service: UsersService,
  title: ModulesTitles.users,
  actions: [AvailableActions.add, AvailableActions.update],

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
