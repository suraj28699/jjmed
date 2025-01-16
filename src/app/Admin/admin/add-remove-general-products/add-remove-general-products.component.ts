import { useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminWorkService } from 'src/app/Services/admin-work.service';

@Component({
  selector: 'app-add-remove-general-products',
  templateUrl: './add-remove-general-products.component.html',
  styleUrls: ['./add-remove-general-products.component.css']
})
export class AddRemoveGeneralProductsComponent {

  public allProductDataArray: any = [];
  public allProductDataArray10: any = [];
  public resettngFormFilds: any;
  public isSubmitted: boolean = false;


  public generalProductEntry = new FormGroup({
    productImg: new FormControl(""),
    productBy: new FormControl(""),
    productName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(9)]),
    price: new FormControl(""),
    mrp: new FormControl(""),
    id: new FormControl("")
  })

  public productByList: any = ["---Open this select company name---", "Sun Pharma", "Suven Pharma", "Meta Ltd"]
  
  constructor(private db: AdminWorkService) {
    this.getdata();

    setTimeout(() => {
      this.pagination();
    }, 100)
    console.log(this.allProductDataArray10)

  }

  // pagination 
  // nned to call this pagination function every time if have show these 10 values only for now have used allProductDataArray in table
  public start = 0;
  public end = 10;

  paginationNext() {
    
    console.log(this.allProductDataArray10.length)
    this.start += 10;
    this.end += 10;
    this.pagination();
  }
  paginationPrevious() {
    this.start -= 10;
    this.end -= 10;
    this.pagination();

  }
  pagination() {
    var j = 0;
    for (let i = this.start; i < this.end; i++) {
      this.allProductDataArray10[j] = this.allProductDataArray[i];
      j++;

    }
    if (j == 9) {
      j = 0;
    }
    console.log(this.allProductDataArray10)
  }
  // submit function
  onSubmit() {
    // console.log("subitted");
    // console.log(this.generalProductEntry.value);
    delete this.generalProductEntry.value.id;
    this.db.postGeneralProduct(this.generalProductEntry.value).subscribe(
      (res: any) => {
        // console.log(res);
        this.getdata();
      },
      (err: any) => {
        console.log(err);
      }
    )

    //reseting form fileds
    this.resettngFormFilds = {
      productImg: "",
      productBy: "",
      productName: "",
      price: "",
      mrp: "",
      id: ""
    }

    setTimeout(() => {
      this.generalProductEntry.setValue(this.resettngFormFilds)
      this.isSubmitted = false;
    }, 1000)


  }

  // get data 
  getdata() {
    this.db.getGeneralProduct().subscribe((res: any) => {
      // console.log(res);
      this.allProductDataArray = res;
      // console.log(this.allProductDataArray)
      this.pagination();

    })
  }
  // edit form fields
  edit(dt: any) {
    console.log(dt);
    this.generalProductEntry.setValue(dt);
    // this.generalProductEntry.setValue(dt);
  }
  //setValues to form to edit
  update(dt: any) {
    // console.log(dt.value);


    this.db.updateGeneralProduct(dt.value).subscribe();
    setTimeout(() => {
      this.getdata();
      this.pagination();
    }, 100)

    setTimeout(() => {
      this.generalProductEntry.setValue(this.resettngFormFilds)
    }, 1000)

  }

  // delete form fild 
  delete(dt: any) {
    // console.log(dt);
    this.db.deleteGeneralProduct(dt.id).subscribe();
    setTimeout(() => {
      this.getdata();
      this.pagination();
    }, 100)
  }

  //for validation
  get f() {
    return this.generalProductEntry.controls;
  }
  forValidation() {
    this.isSubmitted = true;
  }
}
