import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
      var chart = c3.generate({
      bindto: '#chart',
      data: {
          url: '/data/example.json',
          mimeType: 'json'
      }
  });
}

}


