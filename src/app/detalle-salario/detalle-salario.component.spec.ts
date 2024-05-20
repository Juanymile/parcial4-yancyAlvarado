import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSalarioComponent } from './detalle-salario.component';

describe('DetalleSalarioComponent', () => {
  let component: DetalleSalarioComponent;
  let fixture: ComponentFixture<DetalleSalarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleSalarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleSalarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
