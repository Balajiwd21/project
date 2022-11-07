import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidatiomService } from '../validation.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,
    public service:ValidatiomService) {

  }

  ngOnInit(): void {

  }
  ClearValue(){
    this.service.formValidate.reset();
    this.service.initializeForms();
  }


}

