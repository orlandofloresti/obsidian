import { IProduct, IUser } from 'src/app/common/interfaces/view-list';

export const PRODUCTOS: IProduct[] = [
  {
    uuid: '1',
    code: '1',
    color: 'rojo',
    description: 'Playera',
    quantity: 20,
    size: 'small',
  },
  {
    uuid: '2',
    code: '2',
    color: 'planco',
    description: 'Playera polo',
    quantity: 12,
    size: 'small',
  },
];

export const USERS: IUser[] = [
  {
    uuid: '1',
    name: 'Antonio Aguila',
    role: 'admin',
  },
  {
    uuid: '2',
    name: 'Sofia de la Rosa',
    role: 'user',
  },
];
