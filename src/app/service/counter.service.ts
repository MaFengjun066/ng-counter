import { Injectable } from '@angular/core';
import { Counter } from '../models/Counter.model';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  constructor() { }

  doCreateCounter(): Counter {
    return new Counter(0);
  }

  sumCount(counters: Counter[]): number{
    let sum = 0;
    counters.forEach(counter => {
      sum += counter.count;
    });
    return sum;
  }

  reset(counters: Counter[]): Counter[]{
    counters.forEach(counter => {
      counter.count = 0;
    });
    return counters;
  }
}
