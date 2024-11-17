import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-financial-details',
  templateUrl: './financial-details.page.html',
  styleUrls: ['./financial-details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FinancialDetailsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['sidebar'])

  }
  addGST(){
    this.router.navigate(['/add-gst'])
  }
  editBank() {
    this.router.navigate(['/edit-bank']);
  }
  editPan(){
    this.router.navigate(['edit-pan'])
  }
}
