import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const defaultChildrens = [
  {
    path: '',
    outlet: 'navbar',
    loadChildren: () =>
      import('navbar/Module').then((m) => m.NavbarModule),
  }
]

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/dashboard', 
    pathMatch: 'full' 
  },
  { 
    path: 'dashboard', 
    component: MainLayoutComponent, 
    children: [
      ...defaultChildrens,
      {
        path: '',
        outlet: 'main',
        loadChildren: () =>
          import('dashboard/Module').then((m) => m.DashboardModule),     
      },
    ] 
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
