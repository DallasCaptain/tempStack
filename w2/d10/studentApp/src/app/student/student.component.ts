import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  @Input() student
  name: string
  favColor: string
  level: number
  constructor() { }

  ngOnInit() {
    console.log('student initededed')
    this.name = this.student.name
    this.favColor = this.student.favColor
    this.level = this.student.level
  }

  levelup($event){
    this.level++
  }

}
