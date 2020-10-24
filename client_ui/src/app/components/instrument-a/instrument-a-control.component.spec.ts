import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentAControlComponent } from './instrument-a-control.component';

describe('ApiTestComponent', () => {
  let component: InstrumentAControlComponent;
  let fixture: ComponentFixture<InstrumentAControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentAControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentAControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
