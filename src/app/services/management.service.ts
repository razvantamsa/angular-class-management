import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Class } from '../interfaces/Class';
import { Student } from '../interfaces/Student';
import { classes } from '../data';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  private classes: Class[] = classes;

  constructor() { }

  getClasses(): Class[] {
    return this.classes;
  }

	deleteClass(_class: Class): Class[] {
		this.classes = this.classes.filter(c => c.id !== _class.id);
    return this.classes;
  }

	addClass(_class: Class): Class[] {
		this.classes.push(_class);
    return this.classes;
  }

	editClass(_class: Class): Class[] {
		for(const _cls of this.classes) {
			if(_cls.name === _class.name){
				_cls.maxNoOfStudents = _class.maxNoOfStudents;
				_cls.teacher = _class.teacher;
			}
		}
    return this.classes;
  }

	deleteStudent(_class: Class, student: Student): Class[] {
		for(const _cls of this.classes) {
			if(_cls.name === _class.name){
				_cls.students = _cls.students.filter(s => s.name !== student.name);
			}
		}
    return this.classes;
  }

	addStudent(_class: Class, student: Student): Class[] {
		for(const _cls of this.classes) {
			if(_cls.name === _class.name){
				_cls.students.push(student);
			}
		}
    return this.classes;
  }

}
