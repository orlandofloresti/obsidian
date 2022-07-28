import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IActions } from '../interfaces/actions.interface';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  title = new Subject<string>();
  actions = new Subject<IActions>();

  constructor() {}

  setTitle(title: string) {
    setTimeout(() => {
      this.title.next(title);
    });
  }

  setActions(actions: IActions) {
    setTimeout(() => {
      this.actions.next(actions);
    });
  }
}
