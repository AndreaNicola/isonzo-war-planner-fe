import {Component, inject, OnInit} from '@angular/core';
import {AppStateService} from '../../services/app-state.service';
import {MatSlideToggle} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-randomize-factions',
  imports: [
    MatSlideToggle
  ],
  templateUrl: './randomize-factions.component.html',
  styleUrl: './randomize-factions.component.css'
})
export class RandomizeFactionsComponent implements OnInit {
  appState = inject(AppStateService);
  state: boolean = false;

  ngOnInit(): void {
    this.appState.state$.subscribe(state => {
      this.state = state.selectFactions
    })
  }

  getDescription(): string {
    return this.state ? 'Randomize Factions' : 'No Faction Randomization';
  }

}
