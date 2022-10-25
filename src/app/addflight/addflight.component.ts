import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';
// import { FormGroup,FormBuilder, FormControl,Validator, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  flight: Flight = new Flight();

 
  constructor(private flightService:FlightService,private _router:Router) { }



  // form: FormGroup;

//  addFlightForm:FormGroup=new FormGroup({});

  ngOnInit(): void {
    // this.addFlightForm = new FormGroup({
    //   flightNo:new FormControl("",[Validators.required, Validators.min(100), Validators.max(1000)]),
      // source:new FormControl("",[Validators.required,Validators.pattern("^[A-Za-z]+$")]),
      // address:new FormControl("",[Validators.required]),
      // destination:new FormControl("",[Validators.required]),
    
      // departure_date:new FormControl("",[Validators.required,Validators.pattern("^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$")]),
      // arrival_date:new FormControl("",[Validators.required,Validators.pattern("^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$")]),

      // departure_time:new FormControl("",[Validators.required]),
      // arrival_time:new FormControl("",[Validators.required]),

      // flight_duration:new FormControl("",[Validators.required]),
      // ecomonySeat:new FormControl("",[Validators.required]),
      // businessSeat:new FormControl("",[Validators.required]),
        
      // ecomonyPrice:new FormControl("",[Validators.required]),
      // businessPrice:new FormControl("",[Validators.required]),
      // availableSeat:new FormControl("",[Validators.required])
      // 

      // this.form = new FormGroup({
      //   'flightno' : new FormControl('', [Validators.required,Validators.pattern('^[0-9]*$'),Validators.minLength(100),Validators.maxLength(1000)]),
      //   'email' : new FormControl(null, [Validators.required, Validators.email]),
      //   'message' : new FormControl(null, [Validators.required, Validators.minLength(10)])
      // });
    




  }

  // get flightno() {
  //   return this.form.get('flightno');
  // }



  addFlight(){
    
    this.flightService.addFlight(this.flight).subscribe(
      data => {
        this._router.navigate([''])
      } ,
      error => 
      {
        console.log("error occured");
      }
    )

  }





}


