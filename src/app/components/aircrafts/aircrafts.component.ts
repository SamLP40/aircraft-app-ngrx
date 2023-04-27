import { Component, OnInit } from '@angular/core';
import { Aircraft } from 'src/app/models/aircraft.model';
import { AircraftService } from 'src/app/services/aircraft.service';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {
aircrafts : Aircraft[] | null = null; //tableau d'avions vide
error = null;

constructor(private aircraftService:AircraftService) {}

ngOnInit(): void {
  
}

getAllAircrafts() {

  this.aircraftService.getAircrafts().subscribe({
    next: (data) => this.aircrafts = data,
    error : (err) => this.error = err.message,
    complete : () => this.error = null
  })
}
getDesignedAircrafts(){}
getDevelopmentAircrafts(){}
}
