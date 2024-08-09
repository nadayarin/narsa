import { Component, OnInit } from '@angular/core';
import { Avocat } from '../../models/avocat.model';

@Component({
  selector: 'app-consulter-avocat',
  templateUrl: './consulter-avocat.component.html',
  styleUrls: ['./consulter-avocat.component.css']
})
export class ConsulterAvocatComponent implements OnInit {
  avocats: Avocat[] = [];

  ngOnInit(): void {
    if (this.avocats.length === 0) {
      console.log('ngOnInit appelé');
      this.loadAvocats();
    }
  }

  loadAvocats(): void {
    console.log('Chargement des avocats');
    this.avocats = [
      {
        userName: 'jdoe',
        userFirstName: 'John',
        userLastName: 'Doe',
        cabinet: 'Cabinet A',
        specialisation: 'Droit Civil'
      },
      {
        userName: 'asmith',
        userFirstName: 'Alice',
        userLastName: 'Smith',
        cabinet: 'Cabinet B',
        specialisation: 'Droit Commercial'
      },
      {
        userName: 'bjohnson',
        userFirstName: 'Bob',
        userLastName: 'Johnson',
        cabinet: 'Cabinet C',
        specialisation: 'Droit Pénal'
      }
    ];
  }
}
