import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import {HttpClient } from '@angular/common/http'; 
=======
import { AuthenticationService } from '../authentication.service';
import { HttpClient } from '@angular/common/http';
>>>>>>> bef19dc974a70362ddd914b45597378aa8245ed2

@Component({
  selector: 'app-newlogin',
  templateUrl: './newlogin.component.html',
  styleUrls: ['./newlogin.component.css']
})
<<<<<<< HEAD
export class LoginComponent implements OnInit {
  
=======
export class NewloginComponent implements OnInit {
>>>>>>> bef19dc974a70362ddd914b45597378aa8245ed2

  formdata = {email:"",password:""};

  submit=false;

  loading=false;

  errorMessage="";

  constructor(private auth:AuthenticationService,public http:HttpClient) { }



  ngOnInit(): void {

    this.auth.canAuthenticate();

<<<<<<< HEAD
=======
  }



  onSubmit(){

    this.loading=true;

    //call login service

    this.auth.login(this.formdata.email,this.formdata.password)

    .subscribe({

        next:data=>{

            //store token

            this.auth.storeToken(data.idToken);

            console.log('logged user token is '+data.idToken);

            this.auth.canAuthenticate();

        },

        error:data=>{

            if (data.error.error.message=="INVALID_PASSWORD" || data.error.error.message=="INVALID_EMAIL") {

                this.errorMessage = "Invalid Credentials!";

            } else{

                this.errorMessage = "Unknown error when logging into this account!";

            }

        }

    }).add(()=>{

        this.loading =false;

        console.log('login process completed!');



    })

>>>>>>> bef19dc974a70362ddd914b45597378aa8245ed2
  }



<<<<<<< HEAD
  onSubmit(){

    this.loading=true;

    //call login service

    this.auth.login(this.formdata.email,this.formdata.password)

    .subscribe({

        next:data=>{

            //store token

            this.auth.storeToken(data.idToken);

            console.log('logged user token is '+data.idToken);

            this.auth.canAuthenticate();

        },

        error:data=>{

            if (data.error.error.message=="INVALID_PASSWORD" || data.error.error.message=="INVALID_EMAIL") {

                this.errorMessage = "Invalid Credentials!";

            } else{

                this.errorMessage = "Unknown error when logging into this account!";

            }

        }

    }).add(()=>{

        this.loading =false;

        console.log('login process completed!');



    })

  }



}
=======
}
>>>>>>> bef19dc974a70362ddd914b45597378aa8245ed2
