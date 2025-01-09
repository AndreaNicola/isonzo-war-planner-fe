import {Component, inject, Input, OnInit} from '@angular/core';
import {AppStateService, IsonzoMap} from '../../services/app-state.service';

@Component({
  selector: 'app-map-list-element',
  imports: [],
  templateUrl: './map-list-element.component.html',
  styleUrl: './map-list-element.component.css'
})
export class MapListElementComponent implements OnInit {

  appState = inject(AppStateService);
  isMapExcluded: boolean = false;
  @Input() m!: IsonzoMap;

  ngOnInit(): void {
    this.appState.state$.subscribe(state => {
      this.isMapExcluded = state.excludedMaps.has(this.m);
    })
  }

}
