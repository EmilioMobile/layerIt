import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ImageService } from './shared/services/local_images.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnChanges {
  images: any[];
  filterBy?: String = 'all';
  visibleImages: any[] = [];

  constructor(private imageService: ImageService) {
    console.log(this.filterBy);
    this.visibleImages = this.imageService.getImages();
  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }
}
