import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
@Component({
  selector: 'app-edit-pan',
  templateUrl: './edit-pan.page.html',
  styleUrls: ['./edit-pan.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class EditPanPage implements OnInit {
  picture: string | undefined;
  constructor(private route: Router) {}
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
    this.route.navigate(['/financial-details'])
   }
}
