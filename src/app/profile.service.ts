import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
   private user: any;
  private username: string;
  private _Url = 'https://api.github.com/users';

  constructor(private http:HttpClient ) { this.username="Teresiah-cpu";}
   ngOnInit() {
    //getting requests
    this.http.get<any>('https://api.github.com/users').subscribe((data) => {
      this.username = data.total;
      console.log(this.username);
    });

  
}
//getting profile info
  getUserInfo() {
    return this.http.get('https://api.github.com/users/' + this.username); 
  }
    //get repo information
  getUserRepos() {
    return this.http.get(
      'https://api.github.com/users/' + this.username + '/repos'
    );  }
      getProfiles() {
    return this.http.get<any[]>(this._Url);  }
     getProfileInfo(){  
    return this.http.get('https://api.github.com/users/'+this.username+'?acess_token='+environment.apiKey);    }   
  
  getRepos(user: any){
    let userrepo = 
    this.http.get('https://api.github.com/users/'+this.username+'/repos?acess_token='+environment.apiKey); 
    console.log(userrepo)
    return userrepo    
  }
    updateProfile(username:string){
    this.username = username;
  }
}
