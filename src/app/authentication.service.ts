import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private router:Router,private http:HttpClient) { }

<<<<<<< HEAD
=======
  constructor(private router:Router,private http:HttpClient) { }

>>>>>>> bef19dc974a70362ddd914b45597378aa8245ed2
  isAuthenticated():boolean{

    if (sessionStorage.getItem('token')!==null) {

        return true;

    }

    return false;

  }



  canAccess(){

    if (!this.isAuthenticated()) {

        //redirect to login

        this.router.navigate(['/login']);

    }

  }

  canAuthenticate(){

    if (this.isAuthenticated()) {

      //redirect to dashboard

      this.router.navigate(['/dashboard']);

    }

  }



  register(name:string,email:string,password:string){

      //send data to register api (firebase)

     return this.http

      .post<{idToken:string}>(

        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]',

          {displayName:name,email,password}

      );

  }



  storeToken(token:string){

      sessionStorage.setItem('token',token);

  }



  login(email:string,password:string){

    //send data to login api (firebase)

      return this.http

      .post<{idToken:string}>(

          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]',

            {email,password}

      );

  }
  detail(){

    let token = sessionStorage.getItem('token');



    return this.http.post<{users:Array<{localId:string,displayName:string}>}>(

        'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=[API_KEY]',

        {idToken:token}

    );

  }



  removeToken(){

    sessionStorage.removeItem('token');

  }
<<<<<<< HEAD
}
=======
}
>>>>>>> bef19dc974a70362ddd914b45597378aa8245ed2
