import { Component, Injector, OnInit } from '@angular/core';
import { map, Observable, of, Subscription } from 'rxjs';
import { AppsModules } from 'src/app/const/actions';
import { IActions } from 'src/app/interfaces/actions';
import { IParentModuleCompoment } from 'src/app/interfaces/parent-module';
import { HeaderService } from 'src/app/services/header.service';
import { WarehouseService } from 'src/app/services/warehouse.service';
import { ParentModuleUtil } from 'src/app/utils/parent-module.util';

@Component({
  template: '',
})
export class ParentModuleComponent implements IParentModuleCompoment, OnInit {
  // Header properties
  service: string = '';
  title: string = '';
  actions: IActions = {
    primary: [],
    secondary: [],
  };

  // Subscriptions
  subs: Subscription = new Subscription();

  // Table data
  headers: string[] = [];
  items: { [prop: string]: any }[] = [];
  loading: boolean = true;

  constructor(
    private headerService: HeaderService,
    private injector: Injector
  ) {}

  ngOnInit(): void {
    // Set config of module view
    this.headerService.setTitle(this.title);
    this.headerService.setActions(this.actions);

    // Subscriptions
    [
      this.headerService.actionClicked.subscribe((action) => {
        this.onAction(action);
      }),
    ].forEach((sub) => {
      this.subs.add(sub);
    });

    this.onUpdateData(this.service)
      .pipe(
        map((items) => {
          return ParentModuleUtil.getOptions(items);
        })
      )
      .subscribe({
        next: (items) => {
          setTimeout(() => {
            this.items = items;
            this.loading = false;
          }, 3000);
        },
        error: (error) => {
          console.error(error);
          this.loading = false;
        },
        complete: () => console.info(`Data loaded from ${this.service}`),
      });
  }

  onAction(label: string) {
    // Override in child
  }

  onUpdateData(module: string): Observable<any[]> {
    switch (module) {
      case AppsModules['warehouse'].service:
        return this.injector.get(WarehouseService).getProducts();
      case AppsModules['users'].service:
        return of([module]);
      default:
        return of([]);
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
