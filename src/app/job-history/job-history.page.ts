import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-history',
  templateUrl: './job-history.page.html',
  styleUrls: ['./job-history.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class JobHistoryPage implements OnInit {

  constructor(private router : Router) { }
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

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/sidebar'])
  }
}
