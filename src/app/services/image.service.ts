import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../models/image';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  // images: Image[] = [];
  imgLink = "assets/data/gallery.json";

  constructor(private http: HttpClient) {
    // for (let i = 1; i < 13; i++) {
    //   this.images.push(new Image('' + i + '', 'title', 'description', 'assets/images/' + i + '.png', 'assets/images/' + i + '.png'));
    // }
  }

  getImageAry() {
    // return this.images;
    return this.http.get<Image[]>(this.imgLink).pipe(
      map((response: Image[]) => response) // http auto convert json
    );
  }
}
