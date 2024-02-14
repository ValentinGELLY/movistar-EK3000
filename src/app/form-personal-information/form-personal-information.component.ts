import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-form-personal-information',
  templateUrl: './form-personal-information.component.html',
  styleUrls: ['./form-personal-information.component.scss','../app.component.scss']
})
export class FormPersonalInformationComponent implements AfterViewInit{

  allGood: boolean = true;
  canContinue: boolean = false;
  keyBoardOpen: any;

  constructor(private route: Router) { }

  ngAfterViewInit(): void {
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
      if (element.value == ""  && element.name != 'segundoapellido'){
        element.placeholder = "Por favor, rellena este campo";
        element.style.borderBottom = "SOLID 1px red";
        this.allGood= false;
      }
    } 
    let listeInputRadio = document.getElementsByClassName("custom-radio");
    
  }

  focus(event: any): void {
    if(event.target.value == "" && event.target.type != "radio"){
      event.target.style.border = "none";
      event.target.style.borderBottom = "SOLID 1px #ccc";
    }
    
    document.getElementsByTagName("form")[0].style.transition = "0.7s";
    document.getElementsByTagName("form")[0].style.top = "45%";
    
  }

  blur(event: any): void {
    if(event.target.value != "" && event.target.type != "radio"){
      event.target.style.border = "none";
      event.target.style.borderBottom = "SOLID 1px #2ECC71";
      this.canContinue= true;
      for (let index = 0; index < document.getElementsByTagName("input").length; index++) {
        const element = document.getElementsByTagName("input")[index];
        if(element.value == "" && element.type != "radio" && element.name != 'segundoapellido'){
          this.canContinue= false;
        }
      }
      if(this.canContinue){
        document.getElementById("continuarSection")!.style.display = "none";
        document.getElementById("continuarSection2")!.style.display = "block";
      }
      console.log(this.canContinue);
    }else{
      if(event.target.name != 'segundoapellido'){
        event.target.style.border = "none";
        event.target.style.borderBottom = "SOLID 1px red";     
      }
    }
    
    document.getElementsByTagName("form")[0].style.top = "55%";

  }
}
