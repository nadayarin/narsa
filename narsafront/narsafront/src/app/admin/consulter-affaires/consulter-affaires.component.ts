import { Component } from '@angular/core';
import {Affaire} from "../../models/affaire.model";

@Component({
  selector: 'app-consulter-affaires',
  templateUrl: './consulter-affaires.component.html',
  styleUrl: './consulter-affaires.component.css'
})
export class ConsulterAffairesComponent {

  affaires: Affaire[] = [];

  ngOnInit(): void {
    this.loadAffaires();
  }

  loadAffaires(): void {
    // Simuler le chargement des données
    this.affaires = [
      {
        id: 1,
        objet: 'Contrat de travail',
        nature: 'Civil',
        typeAffaire: 'Contentieux',
        dateCreation: new Date('2024-01-15'),
        plaignant: 'John Doe',
        defendeur: 'Acme Corp.',
        tribunal: 'Tribunal de Grande Instance',
        ville: 'Paris',
        avocat: 'Avocat A',
        dateReception: new Date('2024-02-01'),
        priorite: 'Haute',
        etat: 'En cours',
        montantDemande: 5000,
        montantJuge: 0
      },
      {
        id: 2,
        objet: 'Litige commercial',
        nature: 'Commercial',
        typeAffaire: 'Contentieux',
        dateCreation: new Date('2024-03-10'),
        plaignant: 'Jane Smith',
        defendeur: 'XYZ Ltd.',
        tribunal: 'Tribunal de Commerce',
        ville: 'Lyon',
        avocat: 'Avocat B',
        dateReception: new Date('2024-03-20'),
        priorite: 'Moyenne',
        etat: 'Clôturé',
        montantDemande: 10000,
        montantJuge: 8000
      },
      {
        id: 3,
        objet: 'Litige en droit du travail',
        nature: 'Droit du travail',
        typeAffaire: 'Contentieux',
        dateCreation: new Date('2024-04-15'),
        plaignant: 'John Doe',
        defendeur: 'ABC Corp.',
        tribunal: 'Tribunal des Prud’hommes',
        ville: 'Marseille',
        avocat: 'Avocat C',
        dateReception: new Date('2024-04-25'),
        priorite: 'Haute',
        etat: 'En cours',
        montantDemande: 15000,
        montantJuge: null
      },

      {
        id: 4,
        objet: 'Recours en appel',
        nature: 'Appel',
        typeAffaire: 'Recours',
        dateCreation: new Date('2024-05-01'),
        plaignant: 'Marie Dubois',
        defendeur: 'Leclerc SA',
        tribunal: 'Cour d’Appel',
        ville: 'Lille',
        avocat: 'Avocat D',
        dateReception: new Date('2024-05-10'),
        priorite: 'Basse',
        etat: 'En appel',
        montantDemande: 5000,
        montantJuge: 4000
      }
,
      {
        id: 5,
        objet: 'Contrat non respecté',
        nature: 'Civil',
        typeAffaire: 'Réclamation',
        dateCreation: new Date('2024-06-20'),
        plaignant: 'Pierre Martin',
        defendeur: 'Société XY',
        tribunal: 'Tribunal de Grande Instance',
        ville: 'Toulouse',
        avocat: 'Avocat E',
        dateReception: new Date('2024-06-30'),
        priorite: 'Moyenne',
        etat: 'En cours',
        montantDemande: 20000,
        montantJuge: null
      }
,
      {
        id: 6,
        objet: 'Infraction pénale',
        nature: 'Pénal',
        typeAffaire: 'Criminalité',
        dateCreation: new Date('2024-07-10'),
        plaignant: 'Laura Moreau',
        defendeur: 'Paul Dupont',
        tribunal: 'Tribunal Correctionnel',
        ville: 'Nice',
        avocat: 'Avocat F',
        dateReception: new Date('2024-07-15'),
        priorite: 'Haute',
        etat: 'Jugé',
        montantDemande: 0,
        montantJuge: 3000
      },

      {
        id: 7,
        objet: 'Divorce avec séparation de biens',
        nature: 'Famille',
        typeAffaire: 'Divorce',
        dateCreation: new Date('2024-08-01'),
        plaignant: 'Sophie Renault',
        defendeur: 'Marc Renault',
        tribunal: 'Tribunal de la Famille',
        ville: 'Strasbourg',
        avocat: 'Avocat G',
        dateReception: new Date('2024-08-05'),
        priorite: 'Moyenne',
        etat: 'Finalisé',
        montantDemande: 5000,
        montantJuge: null
      }
    ];
  }

  updateAffaire(id: number): void {
    // Implémentez la logique de mise à jour ici
    console.log('Mettre à jour l\'affaire avec ID:', id);
  }
}
