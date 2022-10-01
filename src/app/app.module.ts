import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewstudentComponent } from './Components/newstudent/newstudent.component';


// From @angular
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

import { FirestoreModule } from "@angular/fire/firestore";
import { environment } from 'src/environments/environment';

import { AngularFireModule } from "@angular/fire/compat";
import { GpaComponent } from './Components/gpa/gpa.component';





@NgModule({
  declarations: [
    AppComponent,
    NewstudentComponent,
    DashboardComponent,
    GpaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    FirestoreModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
