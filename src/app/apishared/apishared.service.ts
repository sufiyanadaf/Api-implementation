import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApisharedService {
  url='http://localhost:3000/Users'
  constructor(private http: HttpClient) { }
  users(){
    return this.http.get(this.url)
  }

  getContacts(form:any) {  
    return this.http.post(this.url,form);
  }
  
}



