import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MapListElementComponent} from './map-list-element.component';

describe('MapListElementComponent', () => {
  let component: MapListElementComponent;
  let fixture: ComponentFixture<MapListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapListElementComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MapListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
