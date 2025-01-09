import {Component, inject, Input, OnInit} from '@angular/core';
import {AppStateService, IsonzoMap} from '../../services/app-state.service';
import {MatSlideToggle} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-map-list-element',
  imports: [
    MatSlideToggle
  ],
  templateUrl: './map-list-element.component.html',
  styleUrl: './map-list-element.component.css'
})
export class MapListElementComponent implements OnInit {

  appState = inject(AppStateService);
  isMapSelected: boolean = true;
  @Input() m!: IsonzoMap;

  ngOnInit(): void {
    this.appState.state$.subscribe(state => {
      this.isMapSelected = !state.excludedMaps.has(this.m);
    })
  }

}
