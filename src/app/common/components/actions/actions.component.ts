import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAction } from 'src/app/common/interfaces/actions';

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

  @Output() actionClicked = new EventEmitter<string>();

  get actions() {
    return this._actions;
  }

  constructor() {}

  ngOnInit(): void {}

  onClick(label: string) {
    this.actionClicked.emit(label);
  }
}
