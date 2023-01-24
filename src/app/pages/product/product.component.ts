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
      description:"Sala en color Beigi / Estefany patricia",
      images:["https://sdfsdgsdhasjh"],
      categoryId:1
    }
    const url = "https://i.pinimg.com/originals/15/c5/69/15c56972ae4fbb6b394a6e6efced477b.jpg";
    this.productHttpService.store(data).subscribe(
      response => {console.log(response);
      }
    );
  }

  updateProduct(){
    const data = {
      title:"De la Madera Muebles",
      price:25,
      description:"Sala en color Beigi / Estefany Patricia",
      images:["https://https://i.pinimg.com/originals/15/c5/69/15c56972ae4fbb6b394a6e6efced477b.jpg"],
      categoryId:1
    }
    const url = "https://api.escuelajs.co/api/v1/products/192";
    this.productHttpService.update(30, data).subscribe(
      (response ) => {console.log(response);
      }
    );
  }

  deleteProduct(){
    const url = "https://api.escuelajs.co/api/v1/products/192";
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