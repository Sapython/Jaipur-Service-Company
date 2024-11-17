import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { IonicModule } from '@ionic/angular';
import {  OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {

  }

}



