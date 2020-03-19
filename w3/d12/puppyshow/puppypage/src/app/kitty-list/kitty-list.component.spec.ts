import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KittyListComponent } from './kitty-list.component';

describe('KittyListComponent', () => {
  let component: KittyListComponent;
  let fixture: ComponentFixture<KittyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KittyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KittyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
