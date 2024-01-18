import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { faSave, faExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit, OnDestroy{
  title: string = 'Product-Create';
  product: Product = new Product();
  subscription: Subscription | undefined;
  faSave = faSave;
  faExclamation = faExclamation;
  message?: string = undefined;

  constructor(
    private productSvc: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  save() {
    this.subscription = this.productSvc.get(this.product.productCode).subscribe(
      resp => {
        this.subscription?.unsubscribe();
        if (!resp) {
          this.subscription = this.productSvc.create(this.product).subscribe(
            resp => {
              this.product = resp;
              this.router.navigateByUrl("/product-list");
            }
          );
        }
        else {
          this.message = "Product already exists for code:" + this.product.productCode;
        }
      }
    );
  }

}
