import { AnimateTimings } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FlightService } from '../flight.service';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-allflight',
  templateUrl: './allflight.component.html',
  styleUrls: ['./allflight.component.css']
})
export class AllflightComponent implements OnInit {
  flightDetails=[];
  API="http://localhost:9099/"
  constructor(private flightService:FlightService,private http:HttpClient,private router:Router,private titleService:Title) {
    this.titleService.setTitle("Airline reservation")
  
   }

   flight:any;
  ngOnInit(): void {
    this.getFlight();

  }
  getFlight(){
    this.http.get("http://localhost:9099/allflight").subscribe((data)=>this.flight=data);
  }

  deleteFlight(f : any){
    console.log("in delete method")
    this.http.delete("http://localhost:9099/deleteFlight/"+f).subscribe();
    this.getFlight();
  }

  updateFlight(flight: number)
  {
    console.log(this.flight);
    this.router.navigate(["uflight",flight]);
    this.flightService.getID(flight);
  }

  


}
