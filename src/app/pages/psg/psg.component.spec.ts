import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsgComponent } from './psg.component';

describe('PsgComponent', () => {
  let component: PsgComponent;
  let fixture: ComponentFixture<PsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PsgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
