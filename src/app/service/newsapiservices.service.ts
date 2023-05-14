import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private http: HttpClient) { }
  
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9c160a63b3114b89b147578f43811fa0";
  
  topHeading():Observable<any>
  {
    return this.http.get(this.newsApiUrl);
  }


  login(uname:any,psw:any){
    const data={uname,psw} 
    return this.http.post('http://localhost:3000/login',data)
  }

}
