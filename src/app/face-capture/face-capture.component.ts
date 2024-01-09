import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { count } from 'rxjs';

@Component({
  selector: 'app-face-capture',
  templateUrl: './face-capture.component.html',
  styleUrls: ['./face-capture.component.scss', '../app.component.scss']
})
export class FaceCaptureComponent implements OnInit{
countdown: any;

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.countdown = 5;
    let interval = setInterval(() => {
      if(this.countdown == 0 && this.route.url == '/face-capture' ) {
        this.route.navigate(['/face-result']);
        clearInterval(interval);
      }else{
        this.countdown = this.countdown - 1;
      }
    }, 1000);
  }
}
