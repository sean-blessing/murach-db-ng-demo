import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LineItem } from 'src/app/model/line-item';
import { faSave, faExclamation } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { LineItemService } from 'src/app/service/line-item.service';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-line-item-create',
  templateUrl: './line-item-create.component.html',
  styleUrls: ['./line-item-create.component.css']
})
export class LineItemCreateComponent implements OnInit, OnDestroy{
  title: string = 'Line-Item-Create';
  lineItem: LineItem = new LineItem();
  subscription: Subscription | undefined;
  faSave = faSave;
  faExclamation = faExclamation;
  message?: string = undefined;
  products?: Product[] = undefined; 

  constructor(
    private lineItemSvc: LineItemService,
    private productSvc: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // get list of products to use in drop down
    this.subscription = this.productSvc.list().subscribe({
      next: (resp: Product[]) => {
        this.products = resp;
      }
    });
  }

  ngOnDestroy(): void {
     this.subscription?.unsubscribe();
  }

  save() {
    // Note: Making an assumption that user will NOT add the same product + 
    // invoice combo that already exists in DB.
    this.subscription = this.lineItemSvc.create(this.lineItem).subscribe(
      resp => {
        this.lineItem = resp;
        this.router.navigateByUrl("/li-list");
      }
    );
  }

  testChange(event: any) {
    // console.log(event);
    // console.log(this.lineItem.product);
  }


}
