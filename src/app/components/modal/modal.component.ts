import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

type Popup = '' | 'class' | 'student';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
    @Input() popup: Popup = '';
    @Output() togglePopupEventEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  closePopup(){
    this.popup = '';
    this.togglePopupEventEmitter.emit(this.popup);
  }

}
