import { Component } from '@angular/core';
import { DataTransferService } from './Services/data-transfer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jjMed';

  public addToCartItemsCount:any;
  constructor(private DT:DataTransferService){
    setInterval(()=>{
      this.addToCartCount();
    },1000);
  }

  // addToCartCount
  addToCartCount(){
this.DT.getAddToCartData().subscribe((res:any)=>{
  this.addToCartItemsCount=res.length;
  // console.log(res.length);
},(err:any)=>{
  console.log("err")
})
  }
}
