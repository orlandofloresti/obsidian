import { Observable, Subscription } from 'rxjs';
import { IActions } from './actions';

export interface IParentModuleCompoment {
  service: string;
  title: string;
  actions: IActions;
  subs: Subscription;
  headers: string[];
  items: { [prop: string]: any }[];
  loading: boolean;
  onAction(label: string): void;
  onUpdateData(module: string): Observable<any[]>;
}
