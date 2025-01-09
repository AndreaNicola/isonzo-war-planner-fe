import {Component, inject} from '@angular/core';
import {AppStateService} from '../../services/app-state.service';

@Component({
  selector: 'app-randomize-button',
  imports: [],
  templateUrl: './randomize-button.component.html',
  styleUrl: './randomize-button.component.css'
})
export class RandomizeButtonComponent {
appState = inject(AppStateService);
}
