import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelVsonComponent } from './tel-vson.component';

describe('TelVsonComponent', () => {
  let component: TelVsonComponent;
  let fixture: ComponentFixture<TelVsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelVsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelVsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
