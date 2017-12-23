import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export class User{
	name:string;
	email:string;

	constructor(name:string,email:string){
		this.name=name;
		this.email=email;
	}
}

@Injectable()
export class AuthServiceProvider {

	currentUser:User;

	constructor(public http: HttpClient) {
		console.log('Hello AuthServiceProvider Provider');
	}

	public login(credentials){
		console.log('auth service login');
		return Observable.create(observer=>{
			let access = (credentials.password==='pass' && credentials.email==='email');
			this.currentUser = new User('Zulham','zulham724@gmail.com');
			observer.next(access);
			observer.complete();
		});
	}

	public getUserInfo() : User{
		return this.currentUser;
	}

	public logout(){
		return Observable.create(observer=>{
			this.currentUser = null;
			observer.next(true);
			observer.complete();
		});
	}

}
