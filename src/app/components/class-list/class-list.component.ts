import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private managementService: ManagementService) {}

  ngOnInit(): void {
    this.classes = this.managementService.getClasses();
  }

  // class management
  deleteClass(_class: Class): void {
      this.classes = this.managementService.deleteClass(_class);
  }

  addClass(_class: Class): void {
    this.classes = this.managementService.addClass(_class);
  }

  editClass(_class: Class): void {
    this.classes = this.managementService.editClass(_class);
  }

//   filterClassByName(str: string): void {
//     this.classes = this.managementService.filterClassByName(str);
//   }

  // student management
  deleteStudent(_class: Class, student: Student): void {
    this.classes = this.managementService.deleteStudent(_class, student);
  }

  addStudent(_class: Class, student: Student): void {
    this.classes = this.managementService.addStudent(_class, student);
  }

}
