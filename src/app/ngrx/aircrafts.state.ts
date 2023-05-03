import { DomSanitizer } from "@angular/platform-browser";
import { Aircraft } from "../models/aircraft.model";

export enum AircraftsStateEnum {
    LOADING,
    LOADED,
    ERROR,
    INITIAL
    //Etats chargés/en charge/erreur/initial, l'ordre doit être respecté.
}
    export interface AircraftState { // Liste des avions qui s'affichent
        aircrafts:Aircraft[],
        errorMessage:string,
        dataState:AircraftsStateEnum
    }

    // Ajout de l'état initial

    export const initialState : AircraftState = {
        aircrafts:[],
        errorMessage:"",
        dataState:AircraftsStateEnum.INITIAL
    }