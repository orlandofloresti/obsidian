import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IAction } from '../interfaces/actions';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  title = new Subject<string>();
  actionsList = new Subject<IAction[]>();
  actionClicked = new Subject<string>();

  constructor() {}

  setTitle(title: string) {
    setTimeout(() => {
      this.title.next(title);
    });
  }

  setActions(actions: IAction[]) {
    setTimeout(() => {
      this.actionsList.next(actions);
    });
  }

  emitActionClicked(label: string) {
    this.actionClicked.next(label);
  }
}
