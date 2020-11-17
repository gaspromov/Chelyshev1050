import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortPipe } from './shared/pipes/sort/sort.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FirstCharPipe } from './shared/pipes/firstChar/first-char.pipe';
import { SearchPipe } from './shared/pipes/search/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    NavbarComponent,
    MainComponent,
    ViewStudentsComponent,
    AddStudentComponent,
    FirstCharPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
