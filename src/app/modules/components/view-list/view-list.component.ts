import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AvailableActions } from 'src/app/const/actions';
import { IAction } from 'src/app/interfaces/actions';
import { IDataHeader } from 'src/app/interfaces/view-list';
import { HeaderService } from 'src/app/services/header.service';
import { ViewListUtil } from 'src/app/utils/view-list.util';

@Component({
  selector: 'app-warehouse',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss'],
})
export class ViewListComponent implements OnInit {
  // Service data
  service: any;

  // Subscriptions
  subs: Subscription = new Subscription();

  // Header properties
  title: string = '';
  actions: IAction[] = [];

  // Table data
  dataHeaders: IDataHeader[] = [];
  dataTable: { [prop: string]: any }[] = [];

  loading: boolean = true;

  constructor(
    private headerService: HeaderService,
    private activatedRoute: ActivatedRoute,
    private injector: Injector
  ) {
    this.subs.add(
      this.activatedRoute.data.subscribe((data: any) => {
        this.title = data.title;
        this.service = data.service;
        this.actions = data.actions;
        this.dataHeaders = data.dataHeaders;
      })
    );
  }

  ngOnInit(): void {
    // Set config of module view
    this.headerService.setTitle(this.title);
    this.headerService.setActions(this.actions);

    this.getDataTable();

    // Subscriptions
    [
      this.headerService.actionClicked.subscribe({
        next: (label) => this.onAction(label),
        error: (error) => console.error(error),
        complete: () =>
          console.info(`${this.title.toUpperCase()} : Actions complete`),
      }),
    ].forEach((sub) => {
      this.subs.add(sub);
    });
  }

  onAction(label: string) {
    switch (label) {
      case AvailableActions.add.label:
        console.log(label);
        break;
      case AvailableActions.incomes.label:
        console.log(label);
        break;
      case AvailableActions.update.label:
        this.getDataTable();
        break;
      case AvailableActions.outcomes.label:
        console.log(label);
        break;
      default:
        console.info('Action not available');
    }
  }

  getDataTable(): void {
    this.loading = true;
    this.injector
      .get<any>(this.service)
      .getDataTable()
      .subscribe({
        next: (data: any) => {
          setTimeout(() => {
            this.dataTable = ViewListUtil.setDataOptions(data, 'admin');
            this.loading = false;
          }, 1000);
        },
        error: (err: any) => {
          console.error(err);
          this.loading = false;
        },
        complete: () =>
          console.info(`${this.title.toUpperCase()} : Data loaded`),
      });
  }

  onItemClick(item: any) {
    console.log(item);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
