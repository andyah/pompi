import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () =>
     import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'admin-user',
    loadChildren: () =>
    import('./admin-user/admin-user.module').then(m => m.AdminUserModule)
  },
  {
    path: 'table-user',
    loadChildren: () =>
    import('./table-user/table-user.module').then(m => m.TableUserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
