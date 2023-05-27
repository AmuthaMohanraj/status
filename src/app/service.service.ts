import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient){ 
  }

getAllData(){
  const url='http://localhost:4000/getAllData';
  return this.http.get(url);
}

}
  
