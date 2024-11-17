import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  constructor(private router: Router) {}

  data = [
    {
      id: '#JC4520',
      name: 'Manish Patel',
      address: 'Virat Nagar, Ahmedabad, 460001',
      time: '3:00PM',
      distance: '1.2km',
      amount: '₹1500',
    },
    {
      id: '#JC4520',
      name: 'Manish Patel',
      address: 'Virat Nagar, Ahmedabad, 460001',
      time: '3:00PM',
      distance: '1.2km',
      amount: '₹1500',
    },
    {
      id: '#JC4520',
      name: 'Manish Patel',
      address: 'Virat Nagar, Ahmedabad, 460001',
      time: '3:00PM',
      distance: '1.2km',
      amount: '₹1500',
    },
    {
      id: '#JC4520',
      name: 'Manish Patel',
      address: 'Virat Nagar, Ahmedabad, 460001',
      time: '3:00PM',
      distance: '1.2km',
      amount: '₹1500',
    },
  ];

  route() {
    this.router.navigate(['/job-details']);
  }
  side() {
    this.router.navigate(['/sidebar']);
  }

}
