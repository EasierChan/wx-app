'use strict';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store.component';
import { CartComponent } from './cart.component';
import { SettleComponent } from './settle.component';

const routes: Routes = [
  { path: '', redirectTo: '/store', pathMatch: 'full' },
  { path: 'store', component: StoreComponent },
  { path: 'cart', component: CartComponent },
  { path: 'settle', component: SettleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // , { enableTracing: true }
  exports: [RouterModule]
})
export class AppRoutingModule {
}
