import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage implements OnInit {

  photos: any;
  constructor(private router: Router, private webservice: WebserviceService) {
    this.getPhotos();
  }

  getPhotos() {
    this.webservice.getPhotos().subscribe(response => {
      this.photos = response.hits;
    })
    console.log(this.photos);
  }
  ngOnInit() {
    
  }

}
