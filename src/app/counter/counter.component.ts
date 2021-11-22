import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent{
  @Input() counter!: number;
  @Output() counterChange = new EventEmitter<number>();

  dec(){
    --this.counter;
    this.counterChange.emit(this.counter);
  }
  inc(){
    ++this.counter;
    this.counterChange.emit(this.counter);
  }
}
