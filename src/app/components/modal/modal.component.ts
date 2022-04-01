import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Class } from 'src/app/interfaces/Class';
import { Student } from 'src/app/interfaces/Student';

type Popup = '' | 'class' | 'student';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
    fieldValue:string = '';
    @Input() popup: Popup = '';
    @Input() response!:{action: string; _student?: Student; _class: Class};

    @Output() togglePopupEventEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
      if(this.response._student){
          this.fieldValue = this.response._student.name;
      }
      else{
          this.fieldValue = this.response._class.name;
      }
  }

  changeFieldValue(event: any){
      this.fieldValue = event.target.value;
  }

  closePopup(){
    this.popup = '';
    this.togglePopupEventEmitter.emit(this.popup);
  }

  submit(){
      console.log(this.fieldValue);
      this.closePopup();
  }

}
