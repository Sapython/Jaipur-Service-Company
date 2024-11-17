import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class EditProfilePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  back() {
    this.router.navigate(['/sidebar']);
  }
  identity() {
    this.router.navigate(['/identity-verification']);
  }
  award(){
    this.router.navigate(['/award-certifcate'])
  }
}
