import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private cartservice:CartService){}
  public totalItems:number = 0;
  ngOnInit(): void {
   this.cartservice.getProducts()
      .subscribe(res=>{
     this.totalItems = res.length;
   })
  }
}
