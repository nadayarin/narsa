// src/app/admin/ajouter-avocat/ajouter-avocat.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajouter-avocat',
  templateUrl: './ajouter-avocat.component.html',
  styleUrls: ['./ajouter-avocat.component.css']
})
export class AjouterAvocatComponent implements OnInit {
  avocatForm: FormGroup;
  availableAffaires: any[] = [
    { id: 1, title: 'Affaire 1' },
    { id: 2, title: 'Affaire 2' },
    { id: 3, title: 'Affaire 3' }
  ];
  selectedAffaires: any[] = [];

  constructor(private fb: FormBuilder) {
    this.avocatForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      affaires: this.fb.array([])
    });
  }

  ngOnInit(): void {
    // No need to fetch cases as we're using a static list
  }

  get affaires(): FormArray {
    return this.avocatForm.get('affaires') as FormArray;
  }

  addAffaire(affaire: any): void {
    this.selectedAffaires.push(affaire);
    this.affaires.push(this.fb.control(affaire));
  }

  removeAffaire(index: number): void {
    this.selectedAffaires.splice(index, 1);
    this.affaires.removeAt(index);
  }

  submitForm(): void {
    if (this.avocatForm.valid) {
      console.log(this.avocatForm.value);
      // Handle form submission logic here
    }
  }
}
