import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ActionEvent, AircraftsActionTypes } from "./aircraft.state";
import { AircraftService } from '../services/aircraft.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventSubject : Subject<ActionEvent> = new Subject<ActionEvent>();
  eventSubjectObservable = this.eventSubject.asObservable();

  publishEvent(event:ActionEvent) {

    this.eventSubject.next(event);
  }

  constructor(private aircraftService:AircraftService, private eventService:EventService) {  }

  ngOnInit() : void {

    this.eventService.eventSubjectObservable.subscribe((actionEvent : ActionEvent) => {
      this.onActionEvent(actionEvent);
    }
  )}
  onActionEvent(actionEvent: ActionEvent) {
    throw new Error('Method not implemented.');
  }
  getAllAircrafts() {
    this.eventService.publishEvent({
      type: AircraftsActionTypes.GET_ALL_AIRCRAFTS, payload: null,
      $actionEvent: undefined
    });

    };
  }

