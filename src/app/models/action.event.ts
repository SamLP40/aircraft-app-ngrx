import { AircraftsActionTypes } from "../state/aircraft.state";

export interface ActionEvent {
    type: AircraftsActionTypes,
    payload: any
}