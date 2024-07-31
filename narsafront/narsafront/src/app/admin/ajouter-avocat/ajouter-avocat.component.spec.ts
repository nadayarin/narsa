import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAvocatComponent } from './ajouter-avocat.component';

describe('AjouterAvocatComponent', () => {
  let component: AjouterAvocatComponent;
  let fixture: ComponentFixture<AjouterAvocatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterAvocatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterAvocatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
