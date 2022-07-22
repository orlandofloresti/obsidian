import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((auth) => auth.AuthModule),
  },
  {
    path: 'module',
    loadChildren: () => import('./modules/modules.module').then((modules) => modules.ModulesModule),
  },
  {
    path: 'transactions',
    loadChildren: () => import('./transactions/transactions.module').then((transactions) => transactions.TransactionsModule),
  },
  { path: '', redirectTo: 'module', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
