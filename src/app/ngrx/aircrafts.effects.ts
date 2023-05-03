import { Injectable } from "@angular/core";
import { AircraftService } from "../services/aircraft.service";
import { Actions } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, catchError, map, mergeMap } from "rxjs";
import { AircraftsActionTypes, GetAllAircraftsAction, GetAllAircraftsActionSuccess } from "./aircrafts.actions";

@Injectable() //décorateur utilisé pour désigner un service

export class AircraftsEffects {
    constructor(private aircraftService: AircraftService, private effectActions : Actions){}

    getAllAircraftsEffect:Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftsActionTypes.GET_ALL_AIRCRAFTS)
            mergeMap((action)=> {
                return this.aircraftService.getAircrafts.pipe(
                    map((aircrafts) => new GetAllAircraftsActionSuccess(aircrafts)),

                    catchError((err)=>of(new GetAllAircraftsActionError(errMessage)))
                )
            })
        )
    )
}
