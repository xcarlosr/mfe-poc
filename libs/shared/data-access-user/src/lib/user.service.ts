import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUserLoggedIn = new BehaviorSubject(false);

  isUserLoggedIn$ = this.isUserLoggedIn.asObservable();

  checkCredencials(username: string, password: string){
    if(username === 'carlos' && password === '1234'){
      this.isUserLoggedIn.next(true);
    }
  }

  logout(){
    this.isUserLoggedIn.next(false);
    console.log('teste');
  }





}
