export class Product {
    productCode: string;
    description: string;
    price: number;
    constructor(productCode: string = '', description: string = '', price: number = 0.0) {
      this.productCode = productCode;
      this.description = description;
      this.price = price;
    }

}
