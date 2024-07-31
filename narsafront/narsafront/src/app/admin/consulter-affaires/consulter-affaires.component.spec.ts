import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterAffairesComponent } from './consulter-affaires.component';

describe('ConsulterAffairesComponent', () => {
  let component: ConsulterAffairesComponent;
  let fixture: ComponentFixture<ConsulterAffairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsulterAffairesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterAffairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
