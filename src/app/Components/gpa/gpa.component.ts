import { Component, OnInit } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.scss']
})
export class GpaComponent implements OnInit {

  email:string |any;
  student:any;
  constructor(private db:AngularFirestore, private route: ActivatedRoute) { }

  ngOnInit(): void{

    this.route.params.subscribe(params => {
      this.email =  params['email'] 
    });
this.db.collection('Students').doc(this.email).get()
.forEach(responce => {
  this.student=  responce.data()
})

  }

}
