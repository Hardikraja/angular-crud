import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students:Student[] = [];  

  constructor( private studentService:StudentServiceService) { }

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

  onDeleteStudent(student:Student){
    this.studentService.deleteStudent(student);
  }


}
