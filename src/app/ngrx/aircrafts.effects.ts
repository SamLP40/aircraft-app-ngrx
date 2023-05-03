import { Injectable } from "@angular/core";
import { AircraftService } from "../services/aircraft.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { AircraftsActionTypes, GetAllAircraftsAction, GetAllAircraftsActionSuccess, GetAllAircraftsActionError } from "./aircrafts.actions";

@Injectable() //décorateur utilisé pour désigner un service

export class AircraftsEffects {
    constructor(private aircraftService: AircraftService, private effectActions : Actions){}

    getAllAircraftsEffect:Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftsActionTypes.GET_ALL_AIRCRAFTS),
            mergeMap((action)=> {
                return this.aircraftService.getAircrafts().pipe(
                    map((aircrafts) => new GetAllAircraftsActionSuccess(aircrafts)),

                    catchError((err)=>of(new GetAllAircraftsActionError(err.message)))
                )
            })
        )
    )
}
