import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminWorkService } from 'src/app/Services/admin-work.service';
import { DataTransferService } from 'src/app/Services/data-transfer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
public searchMenu:any=["General","Medicines","Compositions"]
public searchMenu_i:any;
public i=0;
public signIn:boolean=false;
public test:any="testing"
public hideShow:any="hideGoSomewhereCard";
public topOffersList:any=[];
public disSaved:any=0;

constructor(private router:Router,private db:AdminWorkService,private DT:DataTransferService){
  
  setInterval(() => {
    this.searchMenu_i=this.searchMenu[this.i]
    this.i++;
    if(this.i==3){
      this.i=0;
    }
  }, 1500); 

  this.topOffers();
  setTimeout(()=>{
    // console.log(this.topOffersList);
    this.topOffersList.forEach((ele:any,i:any)=>{
      // console.log(ele.price,ele.mrp);
      this.disSaved=ele.price-ele.mrp;
      ele.disSaved=this.disSaved;
      // console.log(ele)
    })
    // console.log(this.topOffersList)
  },100)
}
// for routing navigating to upload-for-orders comp 
prescriptionUpload(){
  if(this.signIn==true){
this.router.navigate(['prescriptionUpload'])
  }
  else{
    alert("You have not signed in...sign in required")
    this.router.navigateByUrl("signIn")
  }
}
// need help with ordering button
needHelp(){
  // alert("s")
this.hideShow="showGoSomewhereCard";
}

hideShowNeedHelpCard(){
  this.hideShow="hideGoSomewhereCard";
}

//topOffers 
topOffers(){
this.db.getGeneralProduct().subscribe((res:any)=>{
  
  this.topOffersList=res;
})
}
//add to cart
addToCart(dt:any){
// console.log(dt);
this.DT.postAddToCartData(dt).subscribe();

}

}

