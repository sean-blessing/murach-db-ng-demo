import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faSave, faExclamation } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { LineItem } from 'src/app/model/line-item';
import { Product } from 'src/app/model/product';
import { LineItemService } from 'src/app/service/line-item.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-line-item-edit',
  templateUrl: './line-item-edit.component.html',
  styleUrls: ['./line-item-edit.component.css']
})
export class LineItemEditComponent implements OnInit, OnDestroy{
  title: string = 'Line-Item-Edit';
  lineItem: LineItem = new LineItem();
  // the id of the line item we want to edit
  liId: number = 0;
  subscription: Subscription | undefined;
  faSave = faSave;
  faExclamation = faExclamation;
  message?: string = undefined;
  products?: Product[] = undefined; 

  constructor(
    private lineItemSvc: LineItemService,
    private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // get list of products to use in drop down
    this.subscription = this.productSvc.list().subscribe({
      next: (resp: Product[]) => {
        this.products = resp;
        this.subscription?.unsubscribe();

        this.route.params.subscribe(
          parms => {
            this.liId = parms["id"];
            this.subscription?.unsubscribe();
            if (this.liId) {
              this.subscription = this.lineItemSvc.get(this.liId).subscribe(
                resp => {
                  this.lineItem = resp;
                  this.subscription?.unsubscribe();
              });
            }
            else {
              console.log("Error: no id passed for lineItem.");
            }
          });
        }
      });
    }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  save() {
   this.subscription = this.lineItemSvc.edit(this.lineItem).subscribe(
     resp => {
       this.lineItem = resp;
       this.router.navigateByUrl("/li-list");
     }
   );
  }

  compProduct(a: Product, b: Product): boolean {
    return a && b && a.productCode === b.productCode;
  }
}
