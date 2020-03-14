import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() task;
  @Output() doneEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  emitDoneEvent(taskId) {
    this.doneEvent.emit(taskId);
  }

}
