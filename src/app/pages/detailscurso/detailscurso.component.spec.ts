import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailscursoComponent } from './detailscurso.component';

describe('DetailscursoComponent', () => {
  let component: DetailscursoComponent;
  let fixture: ComponentFixture<DetailscursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailscursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailscursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
