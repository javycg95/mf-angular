import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar.component';
import { NavbarRoutingModule } from './navbar-routing.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    NavbarRoutingModule
  ],
  providers: [],
})
export class NavbarModule {}
