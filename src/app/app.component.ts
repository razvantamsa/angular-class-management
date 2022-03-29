import { Component,EventEmitter, Output } from '@angular/core';
import { Student } from './interfaces/Student';
import { Class } from './interfaces/Class';
import { Popup } from './interfaces/Popup';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    popup: Popup = '';
    response!:{action: string; _student?: Student; _class: Class};

    // receive data from child
    emitToService(response: { action: string; _student?: Student; _class: Class; }){
        this.response = response;
        this.togglePopup();
    }

    // toggle a popup with 3 possible values
    togglePopup() {
        if(this.popup === ''){
            if(this.response._student){
                this.popup = 'student';
                return;
            }
            this.popup = 'class';
            return;
        }
        this.popup = '';
    }
}
