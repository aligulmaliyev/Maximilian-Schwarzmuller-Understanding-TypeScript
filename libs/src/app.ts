import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { Product } from "./product.model";
import { validate } from "class-validator";
const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 10.99 },
];
const newProd = new Product("", -5.99);
validate(newProd).then((errors) => {
  console.log(errors);
  console.log(newProd.getInformation());
});
// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
