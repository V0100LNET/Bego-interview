import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { OrdersComponent } from './pages/orders/orders.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: "**",
        redirectTo: 'orders'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PrincipalRoutingModule { }
