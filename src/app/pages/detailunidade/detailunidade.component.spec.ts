import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailunidadeComponent } from './detailunidade.component';

describe('DetailunidadeComponent', () => {
  let component: DetailunidadeComponent;
  let fixture: ComponentFixture<DetailunidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailunidadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailunidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
