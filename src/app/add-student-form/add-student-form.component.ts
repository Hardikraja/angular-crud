import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../model/student.model';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.css']
})
export class AddStudentFormComponent implements OnInit {


  student : any;
  name : any;
  age : any;
  id : any;

  constructor(private studentService : StudentServiceService,
    private route :ActivatedRoute, private router : Router) { }



  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        debugger;
        let id = this.route.snapshot.paramMap.get('id');
        if(id!==null){
          this.student = this.studentService.getStudent(parseInt(id));
          this.name = this.student.name;
          this.age = this.student.age;
          this.id = this.student.id;
        }
      });
  }

  onAddStudent(){
      if(typeof this.studentService.getStudent(this.id) !== 'undefined'){
        let studentToUpdate = new Student(this.id,this.name,this.age);
        this.studentService.updateStudent(studentToUpdate);
      }else{
        this.studentService.addStudent(this.name,parseInt(this.age));
      }
      this.router.navigate(['list/student']);
      
  }


}
