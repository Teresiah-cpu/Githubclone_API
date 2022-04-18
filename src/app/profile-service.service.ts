import { Injectable } from '@angular/core';
import{ Http,Headers} from '@angular/http';
import { map } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private Username:string;
  // private ClientID=''
  // private ClientSecret=''
  private apiUrl='https://api.github.com/users';
  private apiKey='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';



  constructor(private http:Http) { 
    console.log("service is now ready!")
    this.Username ='Teresiah-cpu';
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users"+this.Username+"? apiUrl"+this. apiUrl +"&apiKey"+this.apiKey )
    .map((res: { json: () => any; }) => res.json());

  }
}
