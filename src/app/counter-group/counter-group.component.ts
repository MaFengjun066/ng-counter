import { Component, OnInit } from '@angular/core';
import { Counter } from '../models/Counter.model';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.scss']
})
export class CounterGroupComponent implements OnInit {

  counters: Counter[] = []
  constructor(public counterService: CounterService) { }

  ngOnInit(): void {
  }

  doCreateCounter(): void {
    this.counters.push(this.counterService.doCreateCounter());
  }

  sumCount(): number{
    return this.counterService.sumCount(this.counters);
  }

  reset(): void{
    this.counters = this.counterService.reset(this.counters);
  }
}
