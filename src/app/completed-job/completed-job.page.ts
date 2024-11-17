import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completed-job',
  templateUrl: './completed-job.page.html',
  styleUrls: ['./completed-job.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CompletedJobPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  route(){
    this.router.navigate(['/home'])
  }
}
