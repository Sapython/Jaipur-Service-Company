import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonModal,
  IonicModule,
  ModalController,
  NavController,
} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.page.html',
  styleUrls: ['./sidebar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class SidebarPage implements OnInit {
  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    public navCtrl: NavController
  ) {}

  ngOnInit() {}

  close() {
    this.router.navigate(['/home']);
  }
  job() {
    this.router.navigate(['job-history']);
  }
  financial() {
    this.router.navigate(['/financial-details']);
  }
  editProfile() {
    this.router.navigate(['/edit-profile']);
  }

  signout() {
    this.router.navigate(['/signout']);
  }
  logout() {
    this.router.navigate(['/login']);
     this.modalCtrl.dismiss();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
