// src/app/models/affaire.model.ts
export interface Affaire {
  id: number;
  objet: string;
  nature: string;
  typeAffaire: string;
  dateCreation: Date;
  plaignant: string;
  defendeur: string;
  tribunal: string;
  ville: string;
  avocat: string;
  dateReception: Date;
  priorite: string;
  etat: string;
  montantDemande: number;
  montantJuge: number;
}
