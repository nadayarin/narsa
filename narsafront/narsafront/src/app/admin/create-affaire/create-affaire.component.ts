import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AffaireService } from 'src/app/_services/affaire.service';
@Component({
  selector: 'app-create-affaire',
  templateUrl: './create-affaire.component.html',
  styleUrls: ['./create-affaire.component.css']
})
export class CreateAffaireComponent {
  constructor(private affaireService: AffaireService) {}
  today: string;
  tribunals = ['Tribunal A', 'Tribunal B', 'Tribunal C'];
  villes = ['Ville A', 'Ville B', 'Ville C'];
  avocats: any[] = [];
  ngOnInit(): void {
    const currentDate = new Date();
    this.today = currentDate.toISOString().split('T')[0];
    this.affaireService.getAvocats().subscribe(
      (data) => {
        this.avocats = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des avocats', error);
      }
    );
  }
  createAffaire(form: NgForm): void {
    if (form.valid) {
      this.affaireService.createAffaire(form.value).subscribe(
        (response) => {
          console.log('Affaire créée avec succès', response);
          form.reset();
        },
        (error) => {
          console.error('Erreur lors de la création de l\'affaire', error);
        }
      );
    }
  }
}
