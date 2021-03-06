import { Component, OnInit } from '@angular/core';
import { ImageService } from './shared/services/local_images.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent {
  image: any;

  constructor(private imageService: ImageService,
    private route: ActivatedRoute) { }

  // ngOnInit(){
  //  this.image = this.imageService.getImage(
  //    +this.route.snapshot.params['id']
  //  )
  // }
}
