import { Action } from "@ngrx/store";
import { AircraftState, AircraftsStateEnum, initialState } from "./aircrafts.state";
import { AircraftActions, AircraftsActionTypes } from "./aircrafts.actions";

export function AircraftsReducer(state:AircraftState = initialState, action:Action) {
    switch(action.type) {
        case AircraftsActionTypes.GET_ALL_AIRCRAFTS:
        console.log("Loading...");
        return {...state, dataState:AircraftsStateEnum.LOADING} // Renvoie le nouveau state

        case AircraftsActionTypes.GET_ALL_AIRCRAFTS_SUCCESS:
            return {...state, dataState:AircraftsStateEnum.LOADED, aircrafts:(<AircraftActions> action).payload}
            // réception de la requête : l'effect reçoit l'état, et génère une action

        default:
            return {...state}
    }
}
//Le reducer reçoit chaque état/action, les traite et dispatche dans le store [nouvelle action] (composant, service, effet) s'il n'y a pas d'erreur.