import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IBusinessTraining } from '../BusinessTraining';

@Component({
  selector: 'app-businessinfo',
  templateUrl: './businessinfo.component.html',
  styleUrls: ['./businessinfo.component.css']
})
export class BusinessinfoComponent{
  constructor(private _activatedRoute: ActivatedRoute, private _route: Router) { }
  public trainingId: string | null ='';
  public imageUrl: any;
  public selectedTraining:IBusinessTraining = {
      TrainingID: 0,
      TrainingName: '',
      BusinessOwnerName: '',
      HallInfo: 'Select Correct Training'
  }
  public businessTrainingList: IBusinessTraining[] = [
    {
      TrainingID: 1,
      TrainingName: "Business Devlopment",
      BusinessOwnerName: 'Raja',
      HallInfo: 'Paradise Hallway'
    },
    {
      TrainingID: 2,
      TrainingName: 'Digital Marketing',
      BusinessOwnerName: 'Mohan',
      HallInfo: 'Atlantis Corrider'
    },
    {
      TrainingID: 3,
      TrainingName: 'Sales',
      BusinessOwnerName: 'Vignesh',
      HallInfo: 'Blue Fin Concourse'
    },
    {
      TrainingID: 4,
      TrainingName: 'Finance',
      BusinessOwnerName: 'Kumar',
      HallInfo: 'Lotus Cloister'
    },
    {
      TrainingID: 5,
      TrainingName: 'Information Systems',
      BusinessOwnerName: 'Bansal',
      HallInfo: 'Golden Piazza'
    },
  ]

  ngOnInit(){
    this._activatedRoute.paramMap.subscribe((params:ParamMap)=>{this.trainingId=params.get('id')});
    this.imageUrl = "assets/images/" + this.trainingId + ".jpg";
    this.businessTrainingList.find((training)=>{
      if(training.TrainingID.toString() === this.trainingId){
        this.selectedTraining = training;
      }
    })
  }
}
