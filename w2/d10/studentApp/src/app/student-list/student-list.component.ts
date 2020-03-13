import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students = [
    {name:'bob',
    favColor:'red',
    level:0},
    {name:'carl',
    favColor:'blue',
    level:0,}
  ]

  newStudent ={
    name:'',
    favColor:'',
    level:0
  }

  constructor() { }

  ngOnInit() {
  }

  levelup($event){
    this.students[0].level++
    console.log(this.students[0])
  }

  onSubmit(){
    this.students.push(this.newStudent)
    this.newStudent ={
      name:'',
      favColor:'',
      level:0
    }
    http.subscribe(http.get('/students').subscribe(this.students))
  }

  showbind(){
    console.log(this.newStudent)
  }
}
