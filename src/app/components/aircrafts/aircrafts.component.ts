import { Component, OnInit } from '@angular/core';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { Aircraft } from 'src/app/models/aircraft.model';
import { AircraftService } from 'src/app/services/aircraft.service';
import { DataStateEnum } from 'src/app/state/aircraft.state';
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


}
}
