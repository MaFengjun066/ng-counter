import { Component, OnInit } from '@angular/core';
import { Counter } from '../models/Counter.model';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.scss']
})
export class CounterGroupComponent implements OnInit {

  counters: Counter[] = []
  constructor() { }

  ngOnInit(): void {
  }

  doCreateCounter(): void {
    this.counters.push(new Counter(0))
  }

  sumCount(): number{
    let sum = 0;
    this.counters.forEach(counter => {
      sum += counter.count;
    });
    return sum;
  }

  reset(): void{
    this.counters.forEach(counter => {
      counter.count = 0;
    });
  }
}
