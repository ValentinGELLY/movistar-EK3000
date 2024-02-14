import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-information-consent',
  templateUrl: './information-consent.component.html',
  styleUrls: ['./information-consent.component.scss']
})
export class InformationConsentComponent {
  
  saveDataBool: string ="";

  constructor(private route: Router) { }

  
  
  saveData() {
    
    
    let listRadio = document.getElementsByTagName("input");

    for (let index = 0; index < listRadio.length; index++) {
      const element = listRadio[index];
      console.log(element);
      if(element.checked){
        this.saveDataBool = element.value;
      }
    }
    console.log("saveData");
    console.log(this.saveDataBool);
    if(this.saveDataBool=="yes"){
      this.route.navigate(['/ES/formPersonalInformation']);
    }else{
      document.getElementById("loading")!.style.setProperty("display", "block");
      document.getElementById("loadingSection")!.style.setProperty("display", "block");
    }
  }


  

  ngOnDestroy() {
    document.getElementById("loading")!.style.setProperty("display", "none");
    document.getElementById("loadingSection")!.style.setProperty("display", "none");
  }


}
