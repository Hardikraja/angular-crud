import { Injectable } from '@angular/core';
import { Student } from './model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  students:Student[] = [];

  constructor() { 
    this.students.push(new Student(1,"Hardik",23));
    this.students.push(new Student(2,"Harshit",24));
    this.students.push(new Student(3,"Soham",25));
  }

  getStudents(){
    return this.students;
  }

  getStudent(id : number) : Student | undefined{
    return this.students.find(student => student.id === id);
  }


  addStudent(name:string,age:number){
    this.students.push(new Student(this.students[this.students.length-1].id+1,name,age));
    console.log(this.students);
  }

  
  updateStudent(student:Student){
    debugger;
    this.students.forEach(function(studentIterator){
      if(studentIterator.id === student.id){
        studentIterator.name = student.name;
        studentIterator.age = student.age;
        console.log(studentIterator);
      }
    });
  }

  deleteStudent(student:Student){
    for(let i = 0 ; i <this.students.length ; i++){
      if(this.students[i].id==student.id){
        this.students.splice(i,1);
      }
    }
  }

}
