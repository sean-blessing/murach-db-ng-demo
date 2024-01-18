import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { LineItemListComponent } from './feature/line-item/line-item-list/line-item-list.component';
import { LineItemDetailComponent } from './feature/line-item/line-item-detail/line-item-detail.component';
import { LineItemCreateComponent } from './feature/line-item/line-item-create/line-item-create.component';
import { LineItemEditComponent } from './feature/line-item/line-item-edit/line-item-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/product-list', pathMatch:'full'},
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-create', component: ProductCreateComponent },
  { path: 'product-detail/:code', component: ProductDetailComponent },
  { path: 'product-edit/:code', component: ProductEditComponent },
  { path: 'li-list', component: LineItemListComponent },
  { path: 'li-detail/:id', component: LineItemDetailComponent },
  { path: 'li-create', component: LineItemCreateComponent },
  { path: 'li-edit/:id', component: LineItemEditComponent },
  { path: '**', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
