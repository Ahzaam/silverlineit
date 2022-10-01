import { Component, OnInit } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  students: any;
  id:any;

  constructor(private db:AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection("Students",  ref => ref.orderBy('GPA', 'desc')).valueChanges()
    .forEach(collection => {
      
  this.students = collection

    }
)

        

  }

}
