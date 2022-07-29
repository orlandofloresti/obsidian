import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IActions } from 'src/app/interfaces/actions';
import { IParentModule } from 'src/app/interfaces/parent-module';
import { HeaderService } from 'src/app/services/header.service';
import { PRODUCTSMOCK } from 'src/assets/mocks/products.mock';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss'],
})
export class WarehouseComponent implements IParentModule, OnInit, OnDestroy {
  title: string = 'Almacén';
  actions: IActions = {
    primary: [
      {
        label: 'Crear',
        class: 'menu-button p-button-primary p-button-sm',
        icon: 'pi pi-plus',
      },

      {
        label: 'Entradas',
        class: 'menu-button p-button-text p-button-sm',
        icon: 'pi pi-angle-double-down',
      },
      {
        label: 'Salidas',
        class: 'menu-button p-button-text p-button-sm',
        icon: 'pi pi-angle-double-up',
      },
      {
        label: 'Actualizar',
        class: 'menu-button p-button-text p-button-sm',
        icon: 'pi pi-refresh',
      },
    ],
    secondary: [],
  };
  subscriptions: Subscription = new Subscription();

  products = PRODUCTSMOCK;

  constructor(private headerService: HeaderService) {}

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
      this.subscriptions.add(sub);
    });
  }

  onAction(label: string) {
    console.log(label);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
