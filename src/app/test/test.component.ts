import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  todoItem = [
    {
      id: 0,
      name: 'manasa lamba',
      done: false,
    },
    {
      id: 1,
      name: 'manasa trano',
      done: false,
    },
    {
      id: 2,
      name: 'mianatra',
      done: false,
    },
    {
      id: 3,
      name: 'matory',
      done: false,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  public done(id) {
    this.todoItem[id].done = true;
  }

}
