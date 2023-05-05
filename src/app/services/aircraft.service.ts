import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aircraft } from '../models/aircraft.model';

// C'est ici que l'on entre les requêtes qui vont être envoyées vers l'API
@Injectable({
  providedIn: 'root'
})
export class AircraftService {

  constructor(private http:HttpClient) { }
  //liste de tous les avions en base => une fois sur 2 on souhaite provoquer une erreur (= random)
 public getAircrafts():Observable<Aircraft[]> {
    // let host = Math.random() > 0.5 ? environment.host : environment.unreachableHost;
    return this.http.get<Aircraft[]>(environment.host+"/aircrafts");
  }
// avions en phase de design = OK
  public getDesignedAircrafts():Observable<Aircraft[]>{
    return this.http.get<Aircraft[]>(environment.host+"/aircrafts?design=true");
  }
  // liste des avions en phase de dev = OK
  public getDevelopmentAircrafts():Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(environment.host+"/aircrafts?development=true");
  }
  // renvoie un avion à partir de l'id = OK
  public getAircraftById(id:number):Observable<Aircraft> {
    return this.http.get<Aircraft>(environment.host+"/aircrafts/"+ id);
  }
  //Recherche un avion par mot clé (like permet de taper une recherche moins précise) = OK
  public search(str:string):Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(environment.host+"/aircrafts?prog_like" + str)

  // public user():Observable<User>
  
    // return aircrafts.filter((aircraft) => 
    // aircraft.name.toLowerCase().includes(str.toLocaleLowerCase());

    // TEST
  // const str = 'a'
  // const results = search(s);
  //console.log('Résultats trouvés pour la recherche :', results);
 
  }
  
}
