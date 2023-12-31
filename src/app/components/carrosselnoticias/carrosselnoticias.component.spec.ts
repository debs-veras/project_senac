import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselnoticiasComponent } from './carrosselnoticias.component';

describe('CarrosselnoticiasComponent', () => {
  let component: CarrosselnoticiasComponent;
  let fixture: ComponentFixture<CarrosselnoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarrosselnoticiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrosselnoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
