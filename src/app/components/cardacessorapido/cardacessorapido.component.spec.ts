import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardacessorapidoComponent } from './cardacessorapido.component';

describe('CardacessorapidoComponent', () => {
  let component: CardacessorapidoComponent;
  let fixture: ComponentFixture<CardacessorapidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardacessorapidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardacessorapidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
