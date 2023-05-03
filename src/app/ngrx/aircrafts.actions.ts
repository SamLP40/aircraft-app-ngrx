import { Action } from "@ngrx/store";
import { Aircraft } from "../models/aircraft.model";

export enum AircraftsActionTypes{
    GET_ALL_AIRCRAFTS = "[Aircrafts] Get All Aircrafts", // affiche tous les avions
    GET_ALL_AIRCRAFTS_SUCCESS = "[Aircrafts] Get All Aircrafts Success", // retourne le tableau d'avions
    GET_ALL_AIRCRAFTS_ERROR = "[Aircrafts] Get All Aircrafts Error", // retourne un message d'erreur
    GET_DESIGNED_AIRCRAFTS = "[Aircrafts] Get Designed Aircrafts",
    GET_DESIGNED_AIRCRAFTS_SUCCESS = "[Aircrafts] Get Designed Aircrafts Success",
    GET_DESIGNED_AIRCRAFTS_ERROR = "[Aircrafts] Get Designed Aircrafts Error",
    GET_DEVELOPMENT_AIRCRAFTS = "[Aircrafts] Get Development Aircrafts",
    GET_DEVELOPMENT_AIRCRAFTS_SUCCESS = "[Aircrafts] Get Designed Aircrafts Sucess",
    GET_DEVELOPMENT_AIRCRAFTS_ERROR = "[Aircrafts] Get Designed Aircrafts Error"

}
export class GetAllAircraftsAction implements Action {
    type: AircraftsActionTypes=AircraftsActionTypes.GET_ALL_AIRCRAFTS;
    constructor(public payload:any) {} // Requête : afficher tous les avions ?
}
export class GetAllAircraftsActionSuccess implements Action {
    type: AircraftsActionTypes=AircraftsActionTypes.GET_ALL_AIRCRAFTS_SUCCESS;
    constructor(public payload:Aircraft[]) {} // Requête : Ok
}
export class GetAllAircraftsActionError implements Action {
    type: AircraftsActionTypes=AircraftsActionTypes.GET_ALL_AIRCRAFTS_ERROR;
    constructor(public payload:string) {} // Message d'erreur
}

export class GetDesignedAircrafts {
    type: AircraftsActionTypes=AircraftsActionTypes.GET_DESIGNED_AIRCRAFTS;
    constructor(public payload:any) {}
}
export class GetDesignedAircraftsSuccess {
    type: AircraftsActionTypes=AircraftsActionTypes.GET_DESIGNED_AIRCRAFTS_SUCCESS;
    constructor(public payload:Aircraft[]) {}
}
export class GetDesignedAircraftsError {
    type: AircraftsActionTypes=AircraftsActionTypes.GET_DESIGNED_AIRCRAFTS_ERROR;
    constructor(public payload:string) {}
}

export class GetDevelopmentAircrafts {
    type: AircraftsActionTypes=AircraftsActionTypes.GET_DEVELOPMENT_AIRCRAFTS;
    constructor(public payload:any) {}
}
export class GetDevelopmentAircraftsSuccess {
    type: AircraftsActionTypes=AircraftsActionTypes.GET_DEVELOPMENT_AIRCRAFTS_SUCCESS;
    constructor(public payload:Aircraft[]) {}
}
export class GetDevelopmentAircraftsError {
    type: AircraftsActionTypes=AircraftsActionTypes.GET_DEVELOPMENT_AIRCRAFTS_ERROR;
    constructor(public payload:string) {}
}
// Les actions sont gérées par AircraftActions
export type AircraftActions = GetAllAircraftsAction | GetAllAircraftsActionSuccess | GetAllAircraftsActionError | GetDesignedAircrafts | GetDesignedAircraftsSuccess | GetDesignedAircraftsError
