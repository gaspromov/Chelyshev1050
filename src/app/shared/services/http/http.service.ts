import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../../interfaces/student';
import { API } from '../API';

@Injectable({
  providedIn: 'root'
})
export class HttpService extends API {
  headers: HttpHeaders;
  url = "students";

  constructor(httpClient: HttpClient) {
    super (httpClient);
    this.headers = new HttpHeaders();
    this.headers.set ('Content-type', 'application/json');
   }

   async getStudents(){
     return await this.get(this.url, this.headers).toPromise();
   }

   async postStudent(student: Student){
     return await this.post( this.url, student, this.headers ).toPromise();
   }

   async getStudent(id){
    return await this.get(`${this.url}/${id}`, this.headers).toPromise();
   }

   async deleteStudent(id){
    return await this.delete(`${this.url}/${id}`, this.headers).toPromise();
   }

   async putStudent(id, data){
    return await this.put(`${this.url}/${id}`, data, this.headers).toPromise();
   }


}
