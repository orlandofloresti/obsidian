import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, fromEvent, Subscription } from 'rxjs';
import { KeysMapping } from 'src/app/const/keys';
import { IAction } from 'src/app/interfaces/actions';
import { HeaderService } from 'src/app/services/header.service';
import { KeysEvents } from 'src/app/utils/keys-events.util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  @ViewChild('searchInput') searchInput: any;
  keyword: FormControl = new FormControl();

  title: string = '';
  actions: IAction[] = [];
  search$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    filter((key) => KeysEvents.FilterKey(key, KeysMapping.search))
  );

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    [
      this.headerService.title.subscribe((title) => {
        this.title = title;
        this.keyword.reset();
      }),
      this.headerService.actionsList.subscribe(
        (actions) => (this.actions = actions)
      ),
      this.search$.subscribe(() => {
        this.searchInput.nativeElement.focus();
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
