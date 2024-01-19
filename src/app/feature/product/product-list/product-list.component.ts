import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  title: string = "Product-List";
  products: Product[] = [];
  subscription: Subscription | undefined;
  // subscription!: Subscription;
  // subscription?: Subscription;
  sortCriteria: string = 'productCode';
  sortOrder: string = 'asc';


  constructor(private productSvc: ProductService) {}
  
  ngOnInit(): void {
    this.subscription = this.productSvc.list().subscribe({
      next: (resp) => {
        this.products = resp;
        // for (let product of this.products) {
        //   console.log(product);
        // }
      }
    });
  }
  
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  sortBy(column: string): void {
    if(column == this.sortCriteria){
      this.sortOrder = (this.sortOrder == "desc") ? "asc" : "desc";
    }
    this.sortCriteria = column;
  }

}
