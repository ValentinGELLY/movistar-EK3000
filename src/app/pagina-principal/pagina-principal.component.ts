import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss','../app.component.scss']
})
export class PaginaPrincipalComponent {

  constructor(private route: Router) { }

  ngOnInit(): void {
    console.log(this.route.url);
  }
    

}
