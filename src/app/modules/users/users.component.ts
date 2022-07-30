import { Component } from '@angular/core';
import { AppsModules, Classes, Icons, Labels } from 'src/app/const/actions';
import { IActions } from 'src/app/interfaces/actions';
import { ParentModuleComponent } from '../components/parent-module/parent-module.component';

@Component({
  selector: 'app-users',
  templateUrl: '../components/parent-module/parent-module.component.html',
  styleUrls: ['../components/parent-module/parent-module.component.scss'],
})
export class UsersComponent extends ParentModuleComponent {
  override title: string = AppsModules['users'].title;
  override service: string = AppsModules['users'].service;
  override actions: IActions = {
    primary: [
      {
        label: Labels.add,
        class: Classes.add,
        icon: Icons.add,
      },
      {
        label: Labels.update,
        class: Classes.update,
        icon: Icons.update,
      },
    ],
    secondary: [],
  };
  keys = [];

  override onAction(label: string) {
    console.log(label);
  }
}
