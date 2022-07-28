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
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements IComponentModule, OnInit {
  actions: IActions = {
    primary: [
      {
        label: 'Crear',
        class: 'menu-button p-button-primary p-button-sm',
        icon: 'pi pi-plus',
      },
    ],
    secondary: [],
  };

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.setTitle('Usuarios');
    this.headerService.setActions(this.actions);
  }
}
