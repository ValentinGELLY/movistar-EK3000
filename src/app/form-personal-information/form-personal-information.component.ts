import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-form-personal-information',
  templateUrl: './form-personal-information.component.html',
  styleUrls: ['./form-personal-information.component.scss','../app.component.scss']
})
export class FormPersonalInformationComponent implements OnInit{

  allGood: boolean = true;
  canContinue: boolean = false;

  constructor(private route: Router) { }

  ngOnInit(): void {
    let btnContinuar = document.getElementById('btnContinuar');
    btnContinuar!.addEventListener('click', this.continuar);
    
    let allInput = document.querySelectorAll('input');
    for (let index = 0; index < allInput.length; index++) {
      const element = allInput[index];
      if ( element.type != "radio"){
        element.addEventListener('focus', this.focus);
        element.addEventListener('blur', this.blur);
      }
      
    }
  }

  continuar(): void {
    let allInput = document.querySelectorAll('input');
    this.allGood= true;

    for (let index = 0; index < allInput.length; index++) {
      const element = allInput[index];
      if (element.value == "" && element.type != "radio"){
        element.placeholder = "Por favor, rellena este campo";
        element.style.borderBottom = "SOLID 1px red";
        this.allGood= false;
      }
    }
        
  }

  focus(event: any): void {
    if(event.target.value == "" && event.target.type != "radio"){
      event.target.style.border = "none";
      event.target.style.borderBottom = "SOLID 1px #ccc";
    }
  }

  blur(event: any): void {
    if(event.target.value != "" && event.target.type != "radio"){
      event.target.style.border = "none";
      event.target.style.borderBottom = "SOLID 1px #2ECC71";
    }else{
      event.target.style.border = "none";
      event.target.style.borderBottom = "SOLID 1px red";
      for (let index = 0; index < document.getElementsByTagName("input").length; index++) {
        const element = document.getElementsByTagName("input")[index];
        if(element.value == "" && element.type != "radio"){
          this.canContinue= false;
        }
      }
    }

  }


}
