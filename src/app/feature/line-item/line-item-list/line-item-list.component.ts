import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LineItem } from 'src/app/model/line-item';
import { LineItemService } from 'src/app/service/line-item.service';
@Component({
  selector: 'app-line-item-list',
  templateUrl: './line-item-list.component.html',
  styleUrls: ['./line-item-list.component.css']
})
export class LineItemListComponent implements OnInit, OnDestroy{
  title: string = "LineItem-List";
  lis: LineItem[] = [];
  subscription: Subscription | undefined;
  sortCriteria: string = 'invoiceId';
  sortOrder: string = 'asc';

  constructor(private lineItemSvc: LineItemService) {}

  ngOnInit(): void {
    this.subscription = this.lineItemSvc.list().subscribe({
      next: (resp) => {
        this.lis = resp;
        // console.log("li list, lis:");
        // for (let li of this.lis) {
        //   console.log(li);
        // }
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  sortBy(column: string): void {
    console.log('li sortBy called: ', column);
    if(column == this.sortCriteria){
      this.sortOrder = (this.sortOrder == "desc") ? "asc" : "desc";
    }
    this.sortCriteria = column;
  }

}
