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
import { UserFactory } from './factories/users/users.factory';

// Customs components
import { WarehouseFactory } from './factories/warehouse/warehouse.factory';
import { PanelComponent } from './panel/panel.component';
import { ViewListComponent } from './panel/view-list/view-list.component';
import { SidebarComponent } from './panel/sidebar/sidebar.component';
import { HeaderComponent } from './panel/header/header.component';
import { ActionsComponent } from 'src/app/common/components/actions/actions.component';

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
