import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  //not implemented behavior subject
private addToCartDtt:any=new BehaviorSubject('');
addToCartDt:any=this.addToCartDtt.asObservable();

  constructor(private http:HttpClient) { 

  }

  // post and get add to cart data 
  postAddToCartData(dt:any){
    console.log(dt);
    return this.http.post("http://localhost:3000/addToCart",dt)
  }
  getAddToCartData(){
    return this.http.get("http://localhost:3000/addToCart");
  }
  deleteAddToCartData(id:any){
    return this.http.delete("http://localhost:3000/addToCart/"+id)
  }


}
