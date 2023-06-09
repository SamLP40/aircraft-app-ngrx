import { Injectable } from "@angular/core";
import { AircraftService } from "../services/aircraft.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { AircraftsActionTypes, GetAllAircraftsAction, GetAllAircraftsActionSuccess, GetAllAircraftsActionError, GetDesignedAircrafts, GetDesignedAircraftsSuccess, GetDesignedAircraftsError, GetDevelopmentAircraftsSuccess, GetDevelopmentAircraftsError } from "./aircrafts.actions";

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
    getDesignedAircraftsEffect:Observable<Action> = createEffect( 
        () => this.effectActions.pipe( //Pipe qui va écouter les états, et agir en cas de changement
            ofType(AircraftsActionTypes.GET_DESIGNED_AIRCRAFTS), // condition
            mergeMap((action)=> {
                return this.aircraftService.getDesignedAircrafts().pipe(
                    map((aircrafts) => new GetDesignedAircraftsSuccess(aircrafts)),

                    catchError((err)=>of(new GetDesignedAircraftsError(err.message)))
                )
            })
        )
    )
    getDevelopmentAircraftsEffect:Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftsActionTypes.GET_DEVELOPMENT_AIRCRAFTS),
            mergeMap((action)=> {
                return this.aircraftService.getDevelopmentAircrafts().pipe(
                    map((aircrafts) => new GetDevelopmentAircraftsSuccess(aircrafts)),

                    catchError((err)=>of(new GetDevelopmentAircraftsError(err.message)))
                )
            })
        )
    )
}
