import { Action } from "@ngrx/store";
import { AircraftState, AircraftsStateEnum, initialState } from "./aircrafts.state";
import { AircraftActions, AircraftsActionTypes } from "./aircrafts.actions";

export function AircraftsReducer(state:AircraftState = initialState, action:Action) {
    switch(action.type) {
        case AircraftsActionTypes.GET_ALL_AIRCRAFTS:
      //  console.log("Loading...");
        return {...state, dataState:AircraftsStateEnum.LOADING} // Renvoie le nouveau state

        case AircraftsActionTypes.GET_ALL_AIRCRAFTS_SUCCESS:
            return {...state, dataState:AircraftsStateEnum.LOADED, aircrafts:(<AircraftActions> action).payload}
            // réception de la requête : l'effect reçoit l'état, et génère une action
        case AircraftsActionTypes.GET_ALL_AIRCRAFTS_ERROR:
            return {...state, dataState:AircraftsStateEnum.ERROR, errorMessage:(<AircraftActions> action).payload}
        case AircraftsActionTypes.GET_DESIGNED_AIRCRAFTS:
            return {...state, dataState:AircraftsStateEnum.LOADING}
        case AircraftsActionTypes.GET_DESIGNED_AIRCRAFTS_SUCCESS:
            return {...state, dataState:AircraftsStateEnum.LOADED, aircrafts:(<AircraftActions> action).payload}
        case AircraftsActionTypes.GET_DESIGNED_AIRCRAFTS_ERROR:
            return {...state, dataState:AircraftsStateEnum.ERROR, errorMessage:(<AircraftActions> action).payload}
        case AircraftsActionTypes.GET_DEVELOPMENT_AIRCRAFTS:
            return {...state, dataState:AircraftsStateEnum.LOADING}
        case AircraftsActionTypes.GET_DEVELOPMENT_AIRCRAFTS_SUCCESS:
            return {...state, dataState:AircraftsStateEnum.LOADED, aircrafts:(<AircraftActions> action).payload}

        default:
            return {...state}
    }
}
//Le reducer reçoit chaque état/action, les traite et dispatche dans le store [nouvelle action] (effets => composant, service) s'il n'y a pas d'erreur.