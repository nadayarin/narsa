import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterAvocatComponent } from './consulter-avocat.component';

describe('ConsulterAvocatComponent', () => {
  let component: ConsulterAvocatComponent;
  let fixture: ComponentFixture<ConsulterAvocatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsulterAvocatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterAvocatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
