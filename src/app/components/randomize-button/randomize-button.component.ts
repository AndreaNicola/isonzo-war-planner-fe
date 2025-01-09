import {Component, inject} from '@angular/core';
import {AppStateService} from '../../services/app-state.service';
import {MatButton, MatFabButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-randomize-button',
  imports: [
    MatButton, MatIcon
  ],
  templateUrl: './randomize-button.component.html',
  styleUrl: './randomize-button.component.css'
})
export class RandomizeButtonComponent {
appState = inject(AppStateService);
}
