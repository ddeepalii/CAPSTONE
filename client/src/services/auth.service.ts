import { Injectable } from '@angular/core';

@Injectable({
<<<<<<< HEAD
<<<<<<< HEAD
  providedIn: 'root'
})
export class AuthService {

=======
  providedIn: 'root',
})
export class AuthService {
>>>>>>> d43bfdeb1e26f399b8fed860e920807a6aa2bee4
=======
  providedIn: 'root',
})
export class AuthService {
>>>>>>> mayank
  private token: string | null = null;
  private isLoggedIn: boolean = false;

  constructor() {}

  // Method to save token received from login
  saveToken(token: string) {
<<<<<<< HEAD
<<<<<<< HEAD
  //please complete this
  }
   SetRole(role:any)
  {
     //please complete this
  }
  get getRole ():string|null
  {
    return localStorage.getItem('role');
  }
  // Method to retrieve login status
  get getLoginStatus(): boolean {
  
      //please complete this
   
  }
  getToken(): string | null {
  //please complete this
  }
  logout(){
    //please complete this
   }
}
=======
=======
>>>>>>> mayank
    this.token = token;
    this.isLoggedIn = true;
    // Optionally, you can save the token to local storage or a cookie for persistence
    localStorage.setItem('token', token);
  }
  SetRole(role: any) {
    localStorage.setItem('role', role);
  }
  get getRole(): string | null {
    return localStorage.getItem('role');
  }


  SetUsername(username : any)
  {
    localStorage.setItem('username',username);
  }

  get getUsername():string | null{
    return localStorage.getItem('username');
  }
  // Method to retrieve login status
  get getLoginStatus(): boolean {
    return !!localStorage.getItem('token');
  }
  getToken(): string | null {
    this.token = localStorage.getItem('token');
    return this.token;
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    this.token = null;
    this.isLoggedIn = false;
  }
<<<<<<< HEAD
}
>>>>>>> d43bfdeb1e26f399b8fed860e920807a6aa2bee4
=======
}
>>>>>>> mayank
