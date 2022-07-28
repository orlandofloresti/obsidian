import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { IAction, IActions } from 'src/app/interfaces/actions.interface';
import { IComponentModule } from 'src/app/interfaces/component-module.interface';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss'],
})
export class WarehouseComponent implements IComponentModule, OnInit {
  products: any[] = [
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
  ];

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
  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.setTitle('Almacén');
    this.headerService.setActions(this.actions);
  }
}
