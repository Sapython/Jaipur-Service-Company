import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-take-selfie',
  templateUrl: './take-selfie.page.html',
  styleUrls: ['./take-selfie.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TakeSelfiePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
