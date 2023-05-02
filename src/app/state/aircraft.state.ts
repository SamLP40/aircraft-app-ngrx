import { ActionEvent } from "../models/action.event";
export enum DataStateEnum{
    LOADING,
    LOADED,
    ERROR
  }
  export interface AppDataState<T> {
    dataState? : DataStateEnum,
    data? : T,
    errorMessage? : string
  }
  export enum AircraftsActionTypes {
    GET_ALL_AIRCRAFTS= "[Aircrafts] Get All Aircrafts",
    GET_DESIGNED_AIRCRAFTS= "[Aircrafts] Get Designed Aircrafts",
    GET_DEVELOPMENT_AIRCRAFTS= "[Aircrafts] Get Developed Aircrafts",
    GET_SEARCH_AIRCRAFTS= "[Aircrafts] Get Search Aircrafts"
  }

export { ActionEvent };
