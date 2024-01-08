import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-capture',
  templateUrl: './face-capture.component.html',
  styleUrls: ['./face-capture.component.scss', '../app.component.scss']
})
export class FaceCaptureComponent implements OnInit{

  constructor(private route: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      if(this.route.url == '/face-capture')
      this.route.navigate(['/']);
    }, 10000);
  }
}
