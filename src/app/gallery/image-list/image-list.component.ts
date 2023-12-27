import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Image } from '../../models/image';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrl: './image-list.component.css'
})
export class ImageListComponent implements OnInit {

  @Output() sendImage = new EventEmitter<Image>();
  images: Image[] = [];
  // selectedImage!: Image;

  constructor(private imgs: ImageService) {}

  ngOnInit(): void {
    // this.images = this.imgs.getImageAry();
    this.imgs.getImageAry().subscribe(
      response => this.images = response
    )
  }

  setSelectedImage(image: Image) {
    if (image) {
        // this.selectedImage = image;
        // console.log(this.selectedImage);

        this.sendImage.emit(image);
    }
}



}
