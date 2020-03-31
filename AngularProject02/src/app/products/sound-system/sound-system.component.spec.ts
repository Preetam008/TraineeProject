import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundSystemComponent } from './sound-system.component';

describe('SoundSystemComponent', () => {
  let component: SoundSystemComponent;
  let fixture: ComponentFixture<SoundSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
