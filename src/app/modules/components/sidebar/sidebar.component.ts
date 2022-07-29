import { Component, OnInit } from '@angular/core';
import { IMenuCategory } from 'src/app/interfaces/menu';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  items: IMenuCategory[];

  constructor() {
    this.items = [
      {
        label: 'Módulos',
        items: [
          { label: 'Almacén', icon: 'pi pi-fw pi-database', path: 'warehouse' },
          { label: 'Usuarios', icon: 'pi pi-fw pi-users', path: 'users' },
        ],
      },
    ];
  }

  ngOnInit(): void {}
}
