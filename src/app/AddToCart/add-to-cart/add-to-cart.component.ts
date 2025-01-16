import { Component } from '@angular/core';
import { DataTransferService } from 'src/app/Services/data-transfer.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {

  public topOffersList:any=[]
  constructor(private DT: DataTransferService) {
    this.cart();
  }

  cart() {
    this.DT.getAddToCartData().subscribe({
      next:(res:any)=>{
        this.topOffersList=res;
        // console.log(res);
      },
      error:(err:any)=>{
        console.log(err);      }
    })
  }
  //proceedToBuy 
  proceedToBuy(){
    confirm("Confirm or edit your address and enjoy shopping")
  }
  // removeFromCart
  removeFromCart(id:any){
    console.log(id);
    this.DT.deleteAddToCartData(id).subscribe();
    setTimeout(()=>{
      this.cart();//to refresh the data after removed
    },100)
  }

}
