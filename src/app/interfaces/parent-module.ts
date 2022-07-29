import { Subscription } from 'rxjs';
import { IActions } from './actions';

export interface IParentModule {
  title: string;
  actions: IActions;
  subscriptions: Subscription;
}
