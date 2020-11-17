import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../shared/interfaces/student';
import { HttpService } from '../shared/services/http/http.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit, OnChanges {
  addForm: FormGroup;
  @Output() changeStudents = new EventEmitter();
  @Input() studentId: number = -1;
  student: Student;

  constructor(
    private http: HttpService,
  ) { }

  ngOnInit(): void {
    let disabled = false;
    this.addForm = new FormGroup( {

      lastName: new FormControl( { value: this.studentId == -1 ? '' : this.student.lastName, disabled: disabled }, [Validators.required] ),
      firstName: new FormControl( { value: this.studentId == -1 ? '' : this.student.firstName, disabled: disabled }, [Validators.required] ),
      middleName: new FormControl( { value: this.studentId == -1 ? '' : this.student.middleName, disabled: disabled }, [Validators.required] ),
      phone: new FormControl( { value: this.studentId == -1 ? '' : this.student.phone, disabled: disabled }, [Validators.required] ),
      email: new FormControl( { value: this.studentId == -1 ? '' : this.student.email, disabled: disabled }, [Validators.required, Validators.email] ),
      birthDay: new FormControl( { value: this.studentId == -1 ? '' : this.student.birthDay, disabled: disabled }, [Validators.required] ),
      group: new FormControl( { value: this.studentId == -1 ? '' : this.student.group, disabled: disabled }, [Validators.required] ),
      direction: new FormControl( { value: this.studentId == -1 ? '' : this.student.direction, disabled: disabled }, [Validators.required] ) 

    })
  }

  async ngOnChanges(){
    if (this.studentId !== -1){
      await this.getStudent();
      this.ngOnInit();
    }
  }

  async postStudent(){
    await this.http.postStudent( this.addForm.value )
      .then( () => {this.changeStudents.emit();} )
      .catch( (e) => {console.log(e)} )
  }

  async getStudent(){
    await this.http.getStudent(this.studentId)
      .then( (w: Student) => {
        this.student = w;
      })
      .catch( e => {
        console.log(e);
      })
  }

  async putStudent(){
    await this.http.putStudent(this.studentId, this.addForm.value)
      .then(() => {
        this.addForm.reset();
        this.changeStudents.emit();
      })
      .catch( e => {console.log(e)})
  }

  async deleteStudent(){
    await this.http.deleteStudent(this.studentId)
      .then((w) => {
        this.addForm.reset();
        this.changeStudents.emit();
      })
      .catch( e => {console.log(e)})
  }

}
