import { AvailableActions } from 'src/app/common/const/actions';
import { ModulesTitles } from 'src/app/common/const/modules';
import { IViewList } from 'src/app/common/interfaces/view-list';
import { UsersService } from './users.service';

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
