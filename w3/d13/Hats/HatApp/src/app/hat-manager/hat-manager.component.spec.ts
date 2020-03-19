import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HatManagerComponent } from './hat-manager.component';

describe('HatManagerComponent', () => {
  let component: HatManagerComponent;
  let fixture: ComponentFixture<HatManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HatManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HatManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
