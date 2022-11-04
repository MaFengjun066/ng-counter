import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Counter } from '../models/Counter.model';

import { CounterGroupComponent } from './counter-group.component';

describe('CounterGroupComponent', () => {
  let component: CounterGroupComponent;
  let fixture: ComponentFixture<CounterGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterGroupComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add new counter to counters when click create counter button', () => {
    // given
    component.counters = [];
    // when
    component.doCreateCounter();
    // then
    expect(component.counters.length).toBe(1)
  });

  it('should return counter group sum when sumCount', () => {
    // given
    component.counters = [new Counter(1), new Counter(5), new Counter(9)];
    // when
    const sumResult = component.sumCount();
    // then
    expect(sumResult).toEqual(15);
  });

  it('should return sumCount is 0 when click reset button', () => {
    // given
    component.counters = [new Counter(1), new Counter(5), new Counter(9)];
    // when
    component.reset();
    // then
    expect(component.sumCount()).toEqual(0);
  });
});
