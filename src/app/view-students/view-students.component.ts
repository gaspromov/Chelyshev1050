import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/services/http/http.service'

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {
  students: any = [{}];
  search: string = '';
  edittingStudentId: number = -1;

  constructor(
    private http: HttpService
  ) { }

  async ngOnInit() {
    await this.getStudents();
  }

  async getStudents(){
    this.edittingStudentId = -1;
    await this.http.getStudents()
      .then( w => {
        this.students = w;
      })
      .catch(e => {
        console.log(e);
      })
  }

  editStudent(id: number){
    this.edittingStudentId = id;
  }
}
