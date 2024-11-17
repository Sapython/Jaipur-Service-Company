import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.page.html',
  styleUrls: ['./get-started.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GetStartedPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    setTimeout(()=>{
      this.redirect()
    },1500)
  }


  redirect(){
    this.route.navigate(['/language'])
  }

}
