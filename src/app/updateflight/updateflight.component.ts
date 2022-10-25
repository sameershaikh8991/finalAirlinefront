import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-updateflight',
  templateUrl: './updateflight.component.html',
  styleUrls: ['./updateflight.component.css']
})
export class UpdateflightComponent implements OnInit {

  constructor( private router:Router,private flightserv:FlightService,private http:HttpClient,private activedrRoute:ActivatedRoute) { }

  //f: Flight = new Flight();
  getflightId:any;
  flight:any={fid:"",flightNo:"",source:"",destinatin:"",departure_date:"",arrival_date:"",departure_time:"",arrival_time:"",flight_duration:"",ecomonySeat:"",businessSeat:"",ecomonyPrice:"",businessPrice:"",availableSeat:""}

  ngOnInit(): void {
     this.activedrRoute.paramMap.subscribe((params:ParamMap) =>{
      let flight_id= parseInt(params.get('fid'));
      console.log(flight_id);
      this.getflightId=flight_id;
     })

    this.getByFlightId(this.getflightId);
    // this.getByFlightNo();
  }

  getByFlightId(fid:any){
    this.http.get("http://localhost:9099/getflight/"+fid).subscribe((data)=>this.flight=data);

  }

updateFlight(flight:any,fid:any){
  this.http.put("http://localhost:9099/UpdateFlight/"+fid,flight,{responseType:'text'as 'json'})
  .subscribe((data:any) => this.flight=data )
  this.router.navigate([''])

}

}
 