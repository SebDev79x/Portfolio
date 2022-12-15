import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnoCardComponent } from './techno-card.component';

describe('TechnoCardComponent', () => {
  let component: TechnoCardComponent;
  let fixture: ComponentFixture<TechnoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
