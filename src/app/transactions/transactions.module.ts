import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InOutsComponent } from './inouts/inouts.component';
import { PanelComponent } from './panel/panel.component';

const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      {
        path: 'inouts',
        component: InOutsComponent,
      },
      { path: '', redirectTo: 'inouts', pathMatch: 'full' },
      { path: '**', redirectTo: '/module/warehouse', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class TransactionsModule { }
