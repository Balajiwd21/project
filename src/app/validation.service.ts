import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatiomService {


  constructor() { }
 formValidate:FormGroup=new FormGroup({
   Password:new FormControl('',Validators.required),
   Email:new FormControl('',Validators.required)
 })


initializeForms() {
  this.formValidate.setValue({
    Password:'',
    Email:'',
  })
}
}
