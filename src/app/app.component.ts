import { Component } from '@angular/core';
import { Alert } from './models/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'QarmaProject';
  showAlert:boolean=false; // flag which handles whether the alert should display or not
  popupData: Alert = {
    alert_type: 'Remove User',
    label: 'Anuja kumari',
    toConfirmMessage:`Are you sure you want to Remove User`,
    content: `By confirming this Anuja kumari wouldn't be able to:`,
    rightsGoingToLoss: ['Access any Projects related to this Account','Any Personal Data Synced with this Account']
  };
  // it will 
  handleAlert(){
    this.showAlert=true;
  }

  // handles the response from alert component
  handleResponse(event:any){
    console.log(event);
    this.showAlert=false;
  }
}
