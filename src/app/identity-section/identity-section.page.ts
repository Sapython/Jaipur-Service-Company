import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identity-section',
  templateUrl: './identity-section.page.html',
  styleUrls: ['./identity-section.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IdentitySectionPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/identity-verification'])
  }
}
