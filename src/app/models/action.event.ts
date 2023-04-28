import { AircraftsActionTypes } from "../state/aircraft.state";

export interface ActionEvent {
    $actionEvent:any,
    type: AircraftsActionTypes,
    payload: any
}