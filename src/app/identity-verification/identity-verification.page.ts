import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identity-verification',
  templateUrl: './identity-verification.page.html',
  styleUrls: ['./identity-verification.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class IdentityVerificationPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  back() {
    this.router.navigate(['/edit-profile']);
  }
  section() {
    this.router.navigate(['/identity-section']);
  }
}
