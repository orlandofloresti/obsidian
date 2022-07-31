import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Primeng modules
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { MenuModule } from 'primeng/menu';

// Factories
import { WarehouseFactory } from './warehouse/warehouse.factory';
import { UserFactory } from './users/users.factory';

// Customs components
import { PanelComponent } from './components/panel/panel.component';
import { HeaderComponent } from './components/header/header.component';
import { ActionsComponent } from './components/actions/actions.component';
import { ViewListComponent } from './components/view-list/view-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      {
        path: 'warehouse',
        component: ViewListComponent,
        data: WarehouseFactory,
      },
      {
        path: 'users',
        component: ViewListComponent,
        data: UserFactory,
      },
      { path: '', redirectTo: 'warehouse', pathMatch: 'full' },
      { path: '**', redirectTo: 'warehouse', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    PanelComponent,
    ActionsComponent,
    ViewListComponent,
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
