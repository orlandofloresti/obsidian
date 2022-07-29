import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IActions } from '../interfaces/actions';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  title = new Subject<string>();
  actionsList = new Subject<IActions>();
  actionClicked = new Subject<string>();

  constructor() {}

  setTitle(title: string) {
    setTimeout(() => {
      this.title.next(title);
    });
  }

  setActions(actions: IActions) {
    setTimeout(() => {
      this.actionsList.next(actions);
    });
  }

  emitActionClicked(label: string) {
    this.actionClicked.next(label);
  }
}
