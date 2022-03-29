import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Class } from 'src/app/interfaces/Class';
import { Student } from 'src/app/interfaces/Student';


@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  @Input() class!: Class;
  @Output() trackEventEmitter = new EventEmitter<{action: string, _class: Class, _student?: Student}>();
  panelOpenState: boolean = false;
  
  percentage: number = 0;
  color: string = 'primary';

  constructor() { }

  ngOnInit(): void {
    this.percentage = this.class.students.length / this.class.maxNoOfStudents * 100;
    if(this.percentage > 75){
        this.color = 'warn';
    }
    else if(this.percentage >= 25 ){
        this.color = 'accent';
    }
    console.log(this.class.students.slice(-1));
  }

  emitTrackedEvent(action: string, _class: Class, _student?: Student){
    const response = { action, _class, _student };
    this.trackEventEmitter.emit(response);
  }

//   onAddStudent(_class: Class, student: Student) {
    
//     this.triggerModalAddStudent.emit({});
//   }

//   onEditStudent(_class: Class, student: Student) {
//     this.triggerModalEditStudent.emit({_class, student});
//   }

//   onDeletetStudent(_class: Class, student: Student) {
//     this.triggerModalDeleteStudent.emit({_class, student});
//   }

}
