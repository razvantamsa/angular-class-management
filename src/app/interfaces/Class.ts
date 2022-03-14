import { Student } from './Student';

export interface Class {
    id?: number;
    name: string;
    teacher: string;
    maxNoOfStudents: number;
    students: Student[];
}