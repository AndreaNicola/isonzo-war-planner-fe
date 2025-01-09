import {Component, inject} from '@angular/core';
import {AppStateService} from '../../services/app-state.service';

@Component({
  selector: 'app-randomize-factions',
  imports: [],
  templateUrl: './randomize-factions.component.html',
  styleUrl: './randomize-factions.component.css'
})
export class RandomizeFactionsComponent {
  appState = inject(AppStateService);
}
