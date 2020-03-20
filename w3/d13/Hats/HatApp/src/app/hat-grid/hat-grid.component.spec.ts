import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HatGridComponent } from './hat-grid.component';

describe('HatGridComponent', () => {
  let component: HatGridComponent;
  let fixture: ComponentFixture<HatGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HatGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HatGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
