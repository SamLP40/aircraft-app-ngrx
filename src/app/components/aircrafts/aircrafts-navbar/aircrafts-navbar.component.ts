import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { GetAllAircraftsAction, GetDesignedAircrafts, GetDevelopmentAircrafts } from 'src/app/ngrx/aircrafts.actions';
//import { AircraftsComponent } from '../aircrafts.component';

@Component({
  selector: 'app-aircrafts-navbar',
  exportAs: 'ngForm',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css']

})
export class AircraftsNavbarComponent implements OnInit {

 // @Output() eventEmitter : EventEmitter<any> = new EventEmitter(); // écouteur d'événements qui va faire le lien avec aircraftcomponent.ts
  constructor(private store:Store<any>) {
  
  }
  ngOnInit(): void {
    
  }

  getAllAircrafts() {
//     // this.eventEmitter.emit("ALL_AIRCRAFTS");
    this.store.dispatch(new GetAllAircraftsAction({})) // On utilise désormais le store NgRx au lieu de l'écouteur d'événements
  }
  getDesignedAircrafts() {
//  //   this.eventEmitter.emit("ALL_AIRCRAFTS");
    this.store.dispatch(new GetDesignedAircrafts({}))
  }
  getDevelopmentAircrafts() {
//     this.eventEmitter.emit("ALL_AIRCRAFTS");
this.store.dispatch(new GetDevelopmentAircrafts({}))
  }
  user(users:string) { // Méthode qui va chercher les données utilisateur
   


  throw new Error('Method not implemented.');
  }
}