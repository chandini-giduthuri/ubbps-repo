import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewceilingComponent } from './viewceiling.component';

describe('ViewceilingComponent', () => {
  let component: ViewceilingComponent;
  let fixture: ComponentFixture<ViewceilingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewceilingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewceilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
