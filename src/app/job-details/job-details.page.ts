import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.page.html',
  styleUrls: ['./job-details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class JobDetailsPage implements OnInit {
  constructor(private router: Router) {}
  data=[
    {
      id: '#JC4520',
      name: 'Manish Patel',
      address: '4140 Parker Rd. Allentown, New Mexico 31134',
      time: '3:00PM',
      distance: '1.2km',
      amount: '₹1500',
      duration:'2 hr 20 min',
      servicetime:'3.00PM',
      jobstarted:'3:05PM',
      jobended:'4:15PM',
      phone:'989532456'

    }
  ]
  ngOnInit() {}

  route() {
    this.router.navigate(['/take-selfie']);
  }

  back() {
    this.router.navigate(['job-history']);
  }
}
