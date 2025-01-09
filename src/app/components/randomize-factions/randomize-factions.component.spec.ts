import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomizeFactionsComponent } from './randomize-factions.component';

describe('RandomizeFactionsComponent', () => {
  let component: RandomizeFactionsComponent;
  let fixture: ComponentFixture<RandomizeFactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomizeFactionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomizeFactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
