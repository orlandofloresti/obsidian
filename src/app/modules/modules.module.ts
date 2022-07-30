import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { UsersComponent } from './users/users.component';
import { InOutsComponent } from '../transactions/inouts/inouts.component';
import { HeaderComponent } from './components/header/header.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { TableModule } from 'primeng/table';
import { ActionsComponent } from './components/actions/actions.component';
import { ParentModuleComponent } from './components/parent-module/parent-module.component';
import { SkeletonModule } from 'primeng/skeleton';

const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      {
        path: 'warehouse',
        component: WarehouseComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      { path: '', redirectTo: 'warehouse', pathMatch: 'full' },
      { path: '**', redirectTo: 'warehouse', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    SidebarComponent,
    WarehouseComponent,
    UsersComponent,
    InOutsComponent,
    HeaderComponent,
    PanelComponent,
    ActionsComponent,
    ParentModuleComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    MenuModule,
    TableModule,
    ReactiveFormsModule,
    SkeletonModule,
    RouterModule.forChild(routes),
  ],
})
export class ModulesModule {}
