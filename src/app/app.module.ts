import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { MenuComponent } from './core/menu/menu.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { LineItemListComponent } from './feature/line-item/line-item-list/line-item-list.component';
import { LineItemDetailComponent } from './feature/line-item/line-item-detail/line-item-detail.component';
import { LineItemEditComponent } from './feature/line-item/line-item-edit/line-item-edit.component';
import { LineItemCreateComponent } from './feature/line-item/line-item-create/line-item-create.component';
import { SortPipe } from './pipe/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    MenuComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    LineItemListComponent,
    LineItemDetailComponent,
    LineItemEditComponent,
    LineItemCreateComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
