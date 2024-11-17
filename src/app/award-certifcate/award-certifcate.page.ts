import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-award-certifcate',
  templateUrl: './award-certifcate.page.html',
  styleUrls: ['./award-certifcate.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AwardCertifcatePage implements OnInit {
  picture: string | undefined;
  constructor(private router : Router) { }

  ngOnInit() {
  }
  async takePicture(){
    const image = await Camera.getPhoto({
      quality:100,
      allowEditing:false,
      resultType: CameraResultType.DataUrl,
    })
    this.picture = image.dataUrl
  }

  back(){
    this.router.navigate(['/edit-profile'])
  }
}
