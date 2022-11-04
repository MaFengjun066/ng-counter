import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add 1 when click plus button', () => {
    // given
    component.count = 0;
    const plusBtn = fixture.nativeElement.querySelector('[data-test="plusBtn"]');
    // when
    plusBtn.click();
    fixture.detectChanges();
    // then
    const displayCount = fixture.nativeElement.querySelector('[data-test="displayCount"]');
    expect(displayCount.textContent).toEqual('number: 1')
  })

  it('should minus 1 when click minus button', () => {
    // given
    component.count = 0;
    const minusBtn = fixture.nativeElement.querySelector('[data-test="minusBtn"]');
    // when
    minusBtn.click();
    fixture.detectChanges();
    // then
    const displayCount = fixture.nativeElement.querySelector('[data-test="displayCount"]');
    expect(displayCount.textContent).toEqual('number: -1');
  });

  it('should minus btn disappear when count number less than 0', () => {
    // given
    component.count = -1;
    // when
    fixture.detectChanges();
    // then
    const minusBtn = fixture.nativeElement.querySelector('[data-test="minusBtn"]');
    expect(minusBtn).toBeFalsy();
  });

  it('should plus btn disappear when count number more than 10', () => {
    // given
    component.count = 11;
    // when
    fixture.detectChanges();
    // then
    const plusBtn = fixture.nativeElement.querySelector('[data-test="plusBtn"]');
    expect(plusBtn).toBeFalsy();
  });

  it('should backgroud green when count number is less than 0', () => {
    // given
    component.count = -1;
    // when
    fixture.detectChanges();
    // then
    const minusBtn = fixture.nativeElement.querySelector('[data-test="minusBtn"]');
    expect(minusBtn).toBeFalsy();
  });

  it('should return false when count number less than 0', () => {
    // given
    component.count = -1;
    // when
    expect(component.isLagerOrEqualThanZero()).toBeFalse();
  });

  it('should return true when count number less than 0', () => {
    // given
    component.count = 1;
    // when
    expect(component.isLagerOrEqualThanZero()).toBeTrue();
  });

  it('should return true when count number less than 10', () => {
    // given
    component.count = 3;
    // when
    expect(component.isLessThan10()).toBeTrue();
  });

  it('should return false when count number more than 10', () => {
    // given
    component.count = 12;
    // when
    expect(component.isLessThan10()).toBeFalse();
  });

  it('should reset count number to 0', () => {
    // given
    component.count = 5;
    // when
    component.reset();
    fixture.detectChanges();
    // then
    const displayCount = fixture.nativeElement.querySelector('[data-test="displayCount"]');
    expect(displayCount.textContent).toEqual('number: 0');
  });
});
