import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselacessorapidoComponent } from './carrosselacessorapido.component';

describe('CarrosselacessorapidoComponent', () => {
  let component: CarrosselacessorapidoComponent;
  let fixture: ComponentFixture<CarrosselacessorapidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarrosselacessorapidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrosselacessorapidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
