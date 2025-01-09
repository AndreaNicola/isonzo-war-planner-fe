import {Component, inject} from '@angular/core';
import {AppStateService} from '../../services/app-state.service';
import {NgForOf} from '@angular/common';
import {MapListElementComponent} from '../map-list-element/map-list-element.component';

@Component({
  selector: 'app-map-list',
  imports: [
    NgForOf,
    MapListElementComponent
  ],
  templateUrl: './map-list.component.html',
  styleUrl: './map-list.component.css'
})
export class MapListComponent {
  appState = inject(AppStateService);
}
