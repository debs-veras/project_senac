import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcompanyComponent } from './detailcompany.component';

describe('DetailcompanyComponent', () => {
  let component: DetailcompanyComponent;
  let fixture: ComponentFixture<DetailcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailcompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
