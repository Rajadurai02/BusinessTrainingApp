import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {
  constructor(private _router:Router){

  }
  navigateToHall(trainingid:any){
    this._router.navigate(['/business',trainingid]);
  }
}
