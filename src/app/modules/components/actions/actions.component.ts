import { Component, Input, OnInit } from '@angular/core';
import { IAction } from 'src/app/interfaces/actions.interface';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent implements OnInit {
  private _actions: IAction[] = [];

  @Input() set actions(values: IAction[]) {
    this._actions = values;
  }

  get actions() {
    return this._actions;
  }

  constructor() {}

  ngOnInit(): void {}
}
