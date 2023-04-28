import { Component, OnInit } from '@angular/core';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { Aircraft } from 'src/app/models/aircraft.model';
import { AircraftService } from 'src/app/services/aircraft.service';
import { AircraftsActionTypes, DataStateEnum } from 'src/app/state/aircraft.state';
import { AppDataState } from 'src/app/state/aircraft.state';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {
aircrafts$ : Observable<AppDataState<Aircraft[]>> | null = null; //tableau d'avions vide
readonly dataStateEnum = DataStateEnum;

error = null;
eventEmitter: any;


constructor(private aircraftService:AircraftService) {}

ngOnInit(): void {
  
}

getAllAircrafts() {

 this.aircrafts$ = this.aircraftService.getAircrafts().pipe(

  map(data => ({dataState : DataStateEnum.LOADED, data : data})),
  startWith({dataState : DataStateEnum.LOADING}),
  catchError(err => of({dataStatate : DataStateEnum.ERROR, errorMessage : err.message }))
 );

 this.eventEmitter.emit({type:AircraftsActionTypes.GET_ALL_AIRCRAFTS, payload:null})
  }

  onSearch(value:any){
    this.eventEmitter.emit({type : AircraftsActionTypes.GET_SEARCH_AIRCRAFTS, payload:value})
  }
getDesignedAircrafts(){
  this.eventEmitter.emit("DESIGNED_AIRCRAFTS");
}

getDevelopmentAircrafts(){
  this.eventEmitter.emit("DEVELOPMENT_AIRCRAFTS");
}

onActionEvent($event:any) {
  switch ($event) {
    case "ALL_AIRCRAFTS":
    return this.getAllAircrafts();
    case "DESIGNED_AIRCRAFTS":
      return this.getDesignedAircrafts();
    case "DEVELOPMENT_AIRCRAFTS":
      return this.getDevelopmentAircrafts();
  }
switch($event.type) {
  case AircraftsActionTypes.GET_ALL_AIRCRAFTS :
  this.getAllAircrafts();
  break;

  case AircraftsActionTypes.GET_SEARCH_AIRCRAFTS :
  this.onSearch($event.payload);
  break;

}

}
}
