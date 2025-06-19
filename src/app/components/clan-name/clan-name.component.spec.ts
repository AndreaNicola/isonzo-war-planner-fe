import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ClanNameComponent} from './clan-name.component';

describe('ClanNameComponent', () => {
  let component: ClanNameComponent;
  let fixture: ComponentFixture<ClanNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClanNameComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ClanNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
