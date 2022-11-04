import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  increase(): void{
    this.count++;
  }

  descrease(): void{
    this.count--;
  }

  isLagerOrEqualThanZero(): boolean{
    return this.count >= 0;
  }

  isLessThan10(): boolean{
    return this.count <= 10;
  }

  reset(): void{
    this.count = 0;
  }

}
