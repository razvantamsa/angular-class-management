import { Component,Input } from '@angular/core';
import { Student } from './interfaces/Student';
import { Class } from './interfaces/Class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    @Input() popup:boolean = false;

    emitToService(response: { action: string; _student?: Student; _class: Class; }){
        console.log('Response from app', response);
        this.togglePopup();
    }

    togglePopup() {
        this.popup = !this.popup;
    }
}
