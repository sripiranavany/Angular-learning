import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {
  userName: string = '';
  displayStatus: boolean = false;
  logs: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  showDisplay() {
    this.displayStatus = !this.displayStatus;
    this.logs.push(new Date());
  }

}
