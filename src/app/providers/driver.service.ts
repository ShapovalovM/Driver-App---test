import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  driverList = [
    {fullName: 'Aris Gkioumes', photo: './assets/photos/aris.jpg', recent: true},
    {fullName: 'Barbados Loverdos', photo: './assets/photos/francisca.jpg', recent: true},
    {fullName: 'Akmer Girumi', photo: './assets/photos/aris.jpg', recent: false},
    {fullName: 'Bardis Constinous', photo: './assets/photos/francisca.jpg', recent: false},
    {fullName: 'Ciruma Agumi', photo: './assets/photos/aris.jpg', recent: false},
    {fullName: 'Dana Bibilugous', photo: './assets/photos/francisca.jpg', recent: false},
  ];

  constructor() {}

  getDrivers() {
    return this.driverList;
  }
}
