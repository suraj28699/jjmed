import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminWorkService {

  constructor(private http:HttpClient){
}

getGeneralProduct(){
  return this.http.get("http://localhost:3000/generalProductEntryInfo");
}
postGeneralProduct(dt:any){
  return this.http.post("http://localhost:3000/generalProductEntryInfo",dt)
}
updateGeneralProduct(dt:any){
  return this.http.put("http://localhost:3000/generalProductEntryInfo/"+dt.id,dt)
}
deleteGeneralProduct(dt:any){
  return this.http.delete("http://localhost:3000/generalProductEntryInfo/"+dt)
}
}
