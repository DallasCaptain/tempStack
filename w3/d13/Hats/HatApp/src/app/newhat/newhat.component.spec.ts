import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewhatComponent } from './newhat.component';

describe('NewhatComponent', () => {
  let component: NewhatComponent;
  let fixture: ComponentFixture<NewhatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewhatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
