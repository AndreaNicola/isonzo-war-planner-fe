import {Component, inject} from '@angular/core';
import {MapListComponent} from './components/map-list/map-list.component';
import {HeaderComponent} from './components/header/header.component';
import {ClanNameComponent} from './components/clan-name/clan-name.component';
import {ViewStateComponent} from './components/view-state/view-state.component';
import {RandomizeButtonComponent} from './components/randomize-button/randomize-button.component';
import {RandomizeFactionsComponent} from './components/randomize-factions/randomize-factions.component';
import {AppStateService} from './services/app-state.service';

@Component({
  selector: 'app-root',
  imports: [MapListComponent, HeaderComponent, ClanNameComponent, ViewStateComponent, RandomizeButtonComponent, RandomizeFactionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'isonzo-war-planner-fe';
  appState = inject(AppStateService);
}
