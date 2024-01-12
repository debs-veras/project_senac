import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcursoComponent } from './detailcurso.component';

describe('DetailcursoComponent', () => {
  let component: DetailcursoComponent;
  let fixture: ComponentFixture<DetailcursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailcursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
