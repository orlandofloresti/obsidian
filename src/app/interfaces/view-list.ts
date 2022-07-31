import { IActions } from './actions';

export interface IDataHeader {
  label: string;
  key: string;
}

export interface IViewList {
  service: any;
  title: string;
  actions: IActions;
  dataHeaders: IDataHeader[];
  dataTable: { [prop: string]: any }[];
}

export interface IViewListService {
  getDataTable(): any;
}

export interface IProduct {
  uuid: string;
  code: string;
  description: string;
  color: string;
  size: string;
  quantity: number;
}

export interface IUser {
  uuid: string;
  name: string;
  role: 'admin' | 'user';
}
