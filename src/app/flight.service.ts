import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddflightComponent } from './addflight/addflight.component';
import { Flight } from './flight';
import { Observable } from 'rxjs';
// import { ro } from "module";
@Injectable({
  providedIn: 'root'
})
export class FlightService {
  constructor(private http:HttpClient) { }

  API = "http://localhost:9099"


  getf = "http://localhost:9099/getflight"  ;


  fn?:number;
  public addFlight(flight: Flight):Observable<any>{
    return this.http.post("http://localhost:9099/AddFlight",flight)
  }

  public getFlight(){
    return this.http.get(this.API +'/allflight');
  }
  // public deleteFlight(){
  //   return this.http.get(this.API +'/deleteFlight');
  // }

  getID(fno: number){
    this.fn=fno;
  }

  // public getflightid():Observable<Object>{
  //   return this.http.get<Object>(`${this.getf}/${this.fn}`);
  // }
}

