import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AircraftState } from "./aircrafts.state";

export const selectCountAlertAircrafts = createSelector(
    createFeatureSelector('airbusState'),
    (state:AircraftState) => {
        let total:number = 0;
        state.aircrafts.forEach(a => {
            if (a.development==true&&a.design==true) total++;
        })
        return total;
    }
)