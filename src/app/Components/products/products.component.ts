import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';
import { ProductserviceService } from 'src/app/Service/productservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productlist: any;
  constructor(private prodductservice:ProductserviceService,private cartService :CartService){}
  ngOnInit(): void {
    this.prodductservice.getProduct().subscribe(res=>{
      this.productlist=res;
      this.productlist.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      })
     
    })
  }
addtocart(item:any){
  this.cartService.addtoCart(item)
}
}
