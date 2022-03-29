import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Class } from 'src/app/interfaces/Class';
import { Student } from 'src/app/interfaces/Student';
import { ManagementService } from 'src/app/services/management.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
    classes: Class[] = [];
    faFilter = faFilter;
    @Output() popupEventEmitter = new EventEmitter<{action: string, _class: Class, _student?: Student}>();

  constructor(private managementService: ManagementService) {}

  ngOnInit(): void {
    this.classes = this.managementService.getClasses();
  }

  // class management
  deleteClass(_class: Class): void {
    console.log('here');
      this.classes = this.managementService.deleteClass(_class);
  }

  addClass(_class: Class): void {
    console.log('here');
    this.classes = this.managementService.addClass(_class);
  }

  editClass(_class: Class): void {
      console.log('here');
    this.classes = this.managementService.editClass(_class);
  }

//   filterClassByName(str: string): void {
//     this.classes = this.managementService.filterClassByName(str);
//   }

  // student management
  deleteStudent(_class: Class, student: Student): void {
    console.log('here');
    this.classes = this.managementService.deleteStudent(_class, student);
  }

  addStudent(_class: Class, student: Student): void {
    console.log('here');
    this.classes = this.managementService.addStudent(_class, student);
  }

  trackEvent(response: { action: string; _student?: Student; _class: Class; }) {
    this.popupEventEmitter.emit(response);
    // if(response.action === 'add') {
    //     if(response._student){
    //         return this.addStudent(response._class, response._student);
    //     }
    //     return this.addClass(response._class);
    // }
    // else if(response.action === 'delete') {
    //     if(response._student){
    //         return this.deleteStudent(response._class, response._student);
    //     }
    //     return this.deleteClass(response._class);
    // }
    // else if(response.action === 'edit'){
    //     return this.editClass(response._class);
    // }
    // console.log('Error occured while pressing the button');
    // return;
  }

}
