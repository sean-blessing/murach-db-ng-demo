import { Product } from './product';

export class LineItem {
  id: number;
  invoiceId: number;
  product: Product;
  quantity: number;

  constructor(
    id: number = 0, invoiceId: number = 0, 
    product: Product = new Product(), quantity: number = 0) {
     this.id = id;
     this.invoiceId = invoiceId;
     this.product = product;
     this.quantity = quantity;
  }
}
