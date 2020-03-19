import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HatCarouselComponent } from './hat-carousel.component';

describe('HatCarouselComponent', () => {
  let component: HatCarouselComponent;
  let fixture: ComponentFixture<HatCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HatCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HatCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
