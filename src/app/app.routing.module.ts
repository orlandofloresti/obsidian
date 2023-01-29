import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./views/auth/auth.module').then((auth) => auth.AuthModule),
  },
  {
    path: 'module',
    loadChildren: () =>
      import('./views/modules/modules.module').then(
        (modules) => modules.ModulesModule
      ),
  },
  {
    path: 'transactions',
    loadChildren: () =>
      import('./views/transactions/transactions.module').then(
        (transactions) => transactions.TransactionsModule
      ),
  },
  { path: '', redirectTo: 'module', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
