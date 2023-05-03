import { Action } from "@ngrx/store";
import { Aircraft } from "../models/aircraft.model";

export enum AircraftsActionTypes{
    GET_ALL_AIRCRAFTS = "[Aircrafts] Get All Aircrafts", // affiche tous les avions
    GET_ALL_AIRCRAFTS_SUCCESS = "[Aircrafts] Get All Aircrafts Success", // retourne le tableau d'avions
    GET_ALL_AIRCRAFTS_ERROR = "[Aircrafts] Get All Aircrafts Error" // retourne un message d'erreur
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
export type AircraftActions = GetAllAircraftsAction | GetAllAircraftsActionSuccess | GetAllAircraftsActionError
// Les actions sont gérées par AircraftActions