import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';

@Component({
  selector: 'app-clan-name',
  imports: [
    MatInput,
    MatFormField,
    MatLabel
  ],
  templateUrl: './clan-name.component.html',
  styleUrl: './clan-name.component.css'
})
export class ClanNameComponent {
  @Input() placeholder: string = 'Clan Name';
  @Input() label: string = 'Clan Name';
  @Output() clanName: EventEmitter<string> = new EventEmitter<string>();

  onChange($event: Event) {
    this.clanName.emit(($event.target as HTMLInputElement).value);
  }
}
