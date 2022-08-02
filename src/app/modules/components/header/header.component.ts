import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAction } from 'src/app/interfaces/actions';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  title: string = '';
  leftActions: IAction[] = [];
  rightActions: IAction[] = [];

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    [
      this.headerService.title.subscribe((title) => (this.title = title)),
      this.headerService.actionsList.subscribe(({ left, right }) => {
        this.leftActions = left;
        this.rightActions = right;
      }),
    ].forEach((subs) => {
      this.subscriptions.push(subs);
    });
  }

  onActionClicked(label: string) {
    this.headerService.emitActionClicked(label);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subs) => {
      subs.unsubscribe();
    });
    this.subscriptions = [];
  }
}
