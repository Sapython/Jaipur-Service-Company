import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-gst',
  templateUrl: './add-gst.page.html',
  styleUrls: ['./add-gst.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddGstPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  back(){
    this.route.navigate(['financial-details'])
  }
}
