import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { AngularFirestore, AngularFirestoreDocument  } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-newstudent',
  templateUrl: './newstudent.component.html',
  styleUrls: ['./newstudent.component.scss']
})
export class NewstudentComponent implements OnInit {

  studentForm:FormGroup | any;
  success:any;
  constructor(private fb:FormBuilder, private db:AngularFirestore) { }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      Fname:'',
      Sname:'',
      email:'',
      faculty:'CSE',
      GPA:null
      
    })
    this.studentForm.valueChanges.subscribe(console.log)

    console.log(this.db)
   
  }

  submit(){
    if(this.studentForm.value.name !== '' && this.studentForm.value.email !== '' ){
      this.db.collection('Students').doc(this.studentForm.value.email).set(this.studentForm.value)
      .then(responce =>{ alert(`Student added succesfully`)
      this.studentForm = this.fb.group({
        Fname:'',
        Sname:'',
        email:'',
        faculty:'CSE',
        GPA:null
        
      })
    } )
      .catch(err => alert(err))
    }
  }

}
