import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase, AngularFireObject} from 'angularfire2/database';

@Injectable()
export class UserService{

	user: AngularFireObject<any>;
	authUser:any;

	constructor(public database: AngularFireDatabase){

		//Auth user
		this.authUser = JSON.parse(window.localStorage.getItem('user'));
		//App User
		this.user = this.getUserById(this.authUser.uid);

	}

	public getUserById(id){
		return this.database.object('/users/' + id);
	}

	public getLocalUser(){
		return this.authUser;
	}

	public getUser(){
		return this.user;
	}

	public getUsers(){
		return this.database.list('/users');
	}
}