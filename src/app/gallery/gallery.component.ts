import { Component, OnInit } from '@angular/core';
import { Image } from '../models/image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
  selectImage!:Image;

  ngOnInit(): void {
      
  }

  setImage(image: Image) {
    this.selectImage = image
  }

}
