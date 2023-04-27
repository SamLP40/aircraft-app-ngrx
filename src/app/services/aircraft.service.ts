import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aircraft } from '../models/aircraft.model';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AircraftService {

  constructor(private http:HttpClient) { }
  //liste de tous les avions en base => une fois sur 2 on souhaite provoquer une erreur
 public getAircrafts():Observable<Aircraft[]> {
    let host = Math.random() > 0.5 ? environment.host : environment.unreachableHost;
    return this.http.get<Aircraft[]>(host+"/aircrafts");
  }
// avions en phase de design
  public getDesignedAircrafts():Observable<Aircraft[]>{
    return this.http.get<Aircraft[]>(environment.host+"/aircrafts?design-true");
  }
  // liste des avions en phase de dev
  public getDevelopmentAircrafts():Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(environment.host+"/aircrafts?development=true");
  }
  // renvoie un avion à partir de l'id
  public getAircraftByMsn(id:number):Observable<Aircraft> {
    return this.http.get<Aircraft>(environment.host+"/aircrafts/"+ id);
  }
}
