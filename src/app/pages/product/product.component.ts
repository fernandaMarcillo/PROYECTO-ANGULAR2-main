import { Component, OnInit } from '@angular/core';
import {HttpClient as HttpClient} from '@angular/common/http';
import { ProductHttpServiceService } from 'src/app/services/product-http-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  httpClient: any;
  constructor(private productHttpService: ProductHttpServiceService) {};


  getProducts():void{
    const url ="https://api.escuelajs.co/api/v1/products";
    this.productHttpService.getAll().subscribe
    (response => {console.log(response);
    });
  }

  getProduct(){
    const url ="https://api.escuelajs.co/api/v1/products/20";
    this.productHttpService.getOne(2).subscribe
    (response => {console.log(response);
    });
  }

  createProduct(){
    const data = {
      title:"Salas",
      price:20,
      description:"Sala en color nuez / Fernanda Marcillo",
      images:["https://images.hola.com/imagenes/decoracion/20221010218794/decorar-organizar-sala-estar-mc/1-149-995/sala-estar-t.jpg"],
      categoryId:1
    }
    const url = "https://images.unsplash.com/photo-1601305070998-91e1a8574e9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29sJTIwYWwlMjBhdGFyZGVjZXJ8ZW58MHx8MHx8&w=1000&q=80";
    this.productHttpService.store(data).subscribe(
      response => {console.log(response);
      }
    );
  }

  updateProduct(){
    const data = {
      title:"Moviliarios yavi",
      price:25,
      description:"Sala en color nuez / Fernanda Marcillo",
      images:["https://images.hola.com/imagenes/decoracion/20221010218794/decorar-organizar-sala-estar-mc/1-149-995/sala-estar-t.jpg"],
      categoryId:1
    }
    const url = "https://images.unsplash.com/photo-1601305070998-91e1a8574e9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29sJTIwYWwlMjBhdGFyZGVjZXJ8ZW58MHx8MHx8&w=1000&q=80";
    this.productHttpService.update(30, data).subscribe(
      (response ) => {console.log(response);
      }
    );
  }

  deleteProduct(){
    const url = "https://api.escuelajs.co/api/v1/products/194";
    this.productHttpService.destroy(61).subscribe
    (response => {console.log(response);
      }
    );
  }

  ngOnInit(): void{
    //this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
    this.deleteProduct();
  }

}
