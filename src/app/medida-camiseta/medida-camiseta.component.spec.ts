import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidaCamisetaComponent } from './medida-camiseta.component';

describe('MedidaCamisetaComponent', () => {
  let component: MedidaCamisetaComponent;
  let fixture: ComponentFixture<MedidaCamisetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedidaCamisetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedidaCamisetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
