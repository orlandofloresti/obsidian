import { Component } from '@angular/core';
import { map } from 'rxjs';
import { AppsModules, Classes, Icons, Labels } from 'src/app/const/actions';
import { IActions } from 'src/app/interfaces/actions';
import { ParentModuleUtil } from 'src/app/utils/parent-module.util';
import { ParentModuleComponent } from '../components/parent-module/parent-module.component';

@Component({
  selector: 'app-warehouse',
  templateUrl: '../components/parent-module/parent-module.component.html',
  styleUrls: ['../components/parent-module/parent-module.component.scss'],
})
export class WarehouseComponent extends ParentModuleComponent {
  override service: string = AppsModules['warehouse'].service;
  override title: string = AppsModules['warehouse'].title;
  override actions: IActions = {
    primary: [
      {
        label: Labels.add,
        class: Classes.add,
        icon: Icons.add,
      },

      {
        label: Labels.incomes,
        class: Classes.incomes,
        icon: Icons.incomes,
      },
      {
        label: Labels.outcomes,
        class: Classes.outcomes,
        icon: Icons.outcomes,
      },
      {
        label: Labels.update,
        class: Classes.update,
        icon: Icons.update,
      },
    ],
    secondary: [],
  };

  override headers: string[] = [
    'Código',
    'Descripción',
    'Color',
    'Talla',
    'Cantidad',
    'Opciones',
  ];
  keys: string[] = [
    'code',
    'description',
    'color',
    'size',
    'quantity',
    'options',
  ];

  override onAction(label: string): void {
    switch (label) {
      case Labels.add:
        break;
      case Labels.incomes:
        break;
      case Labels.outcomes:
        break;
      case Labels.update:
        this.loading = true;
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
        break;
    }
  }
}
