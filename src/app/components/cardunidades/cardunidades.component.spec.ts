import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardunidadesComponent } from './cardunidades.component';

describe('CardunidadesComponent', () => {
  let component: CardunidadesComponent;
  let fixture: ComponentFixture<CardunidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardunidadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardunidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
