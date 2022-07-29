import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IActions } from 'src/app/interfaces/actions';
import { IParentModule } from 'src/app/interfaces/parent-module';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements IParentModule, OnInit {
  title: string = 'Usuarios';
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
  subscriptions: Subscription = new Subscription();

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
