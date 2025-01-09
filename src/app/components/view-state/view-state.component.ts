import {Component, inject, OnInit} from '@angular/core';
import {AppState, AppStateService} from '../../services/app-state.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-view-state',
  imports: [
    NgForOf
  ],
  templateUrl: './view-state.component.html',
  styleUrl: './view-state.component.css'
})
export class ViewStateComponent implements OnInit {
  appState = inject(AppStateService);
  state!: AppState;

  ngOnInit(): void {
    this.appState.getState().subscribe(state => this.state = state);
  }

}
