import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselunidadesComponent } from './carrosselunidades.component';

describe('CarrosselunidadesComponent', () => {
  let component: CarrosselunidadesComponent;
  let fixture: ComponentFixture<CarrosselunidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarrosselunidadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrosselunidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
