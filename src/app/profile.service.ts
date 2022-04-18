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
    // GET request with response type <any>
    this.http.get<any>('https://api.github.com/users').subscribe((data) => {
      this.username = data.total;
      console.log(this.username);
    });

  
}
