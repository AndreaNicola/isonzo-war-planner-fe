import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export class AppState {
  battles: number = 3;
  clan1: string = '';
  clan2: string = '';
  selectMaps: boolean = true;
  selectFactions: boolean = true;
  excludedMaps: Set<IsonzoMap> = new Set<IsonzoMap>();
  selectedMaps: { map: IsonzoMap, entente: string, centralPowers: string }[] = [];
}

export class IsonzoMap {
  name: string = '';
  image: string = '';
}

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  maps: IsonzoMap[] = [
    {name: 'Adamello', image: 'assets/images/adamello.png'},
    {name: 'Carso', image: 'assets/images/carso.png'},
    {name: 'Cengio', image: 'assets/images/cengio.png'},
    {name: 'Dolomiti', image: 'assets/images/dolomiti.png'},
    {name: 'Fior', image: 'assets/images/fior.png'},
    {name: 'Gorizia', image: 'assets/images/gorizia.png'},
    {name: 'Grappa', image: 'assets/images/grappa.png'},
    {name: 'Marmolada', image: 'assets/images/marmolada.png'},
    {name: 'Montello', image: 'assets/images/montello.png'},
    {name: 'Piana', image: 'assets/images/piana.png'},
    {name: 'Piave', image: 'assets/images/piave.png'},
    {name: 'Sabotino', image: 'assets/images/sabotino.png'},
  ];

  private state: AppState = new AppState();
  readonly state$: BehaviorSubject<AppState> = new BehaviorSubject(this.state)

  setClan1Name: (name: string) => void = (name: string) => {
    this.state.clan1 = name;
    this.state$.next(this.state);
  };

  setClan2Name: (name: string) => void = (name: string) => {
    this.state.clan2 = name;
    this.state$.next(this.state);
  };

  getState(): Observable<AppState> {
    return this.state$;
  }

  randomize(): void {

    const cleanMaps = this.maps.filter(map => !this.state.excludedMaps.has(map));

    this.state.selectedMaps = [];
    for (let i = 0; i < this.state.battles; i++) {
      const randomIndex = Math.floor(Math.random() * cleanMaps.length);
      const randomMap = cleanMaps[randomIndex];

      // if selectFactions is true, select random factions
      if (this.state.selectFactions) {

        let randomFaction1 = '';
        let randomFaction2 = '';
        const r = Math.random();
        if (r > 0.5) {
          randomFaction1 = this.state.clan1;
          randomFaction2 = this.state.clan2;
        } else {
          randomFaction1 = this.state.clan2;
          randomFaction2 = this.state.clan1;
        }

        this.state.selectedMaps.push({map: randomMap, entente: randomFaction1, centralPowers: randomFaction2});
      } else {
        this.state.selectedMaps.push({map: randomMap, entente: this.state.clan1, centralPowers: this.state.clan2});
      }

    }

    this.state$.next(this.state);

  }

  toggleRandomizeFactions() {
    this.state.selectFactions = !this.state.selectFactions;
    this.state$.next(this.state);
  }

  toggleMap(m: IsonzoMap) {
    if (this.state.excludedMaps.has(m)) {
      this.state.excludedMaps.delete(m);
    } else {
      this.state.excludedMaps.add(m)
    }

    this.state$.next(this.state);
  }
}
