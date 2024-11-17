import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-end-job',
  templateUrl: './end-job.page.html',
  styleUrls: ['./end-job.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EndJobPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
