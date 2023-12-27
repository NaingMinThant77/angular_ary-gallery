import { Component, Input } from '@angular/core';
import { Image } from '../../models/image';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent {
  @Input() selectImage: Image | null = null;

  hideImage() {
    this.selectImage = null;
  }
}
