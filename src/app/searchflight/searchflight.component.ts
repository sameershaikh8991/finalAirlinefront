import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent implements OnInit {

  constructor(private flightserv:FlightService,private http:HttpClient) { }


  exform: FormGroup;


  ngOnInit() {

    this.exform = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'phone' : new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
        ]),
      'message' : new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
    }
  
    clicksub() {
      console.log(this.exform.value);
      this.exform.reset();
    }
    get name() {
      return this.exform.get('name');
    }
    get email() {
      return this.exform.get('email');
    }
    get phone() {
      return this.exform.get('phone');
    }
    get message() {
      return this.exform.get('message');
    }
  

  search(flightNo:any){
    // this.http.get("http://localhost:9099/getflight/"+flightNo).subscribe((data)=>this.flight=data);

  }

}
