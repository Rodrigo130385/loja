import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderbarComponent } from './loaderbar.component';

describe('LoaderbarComponent', () => {
  let component: LoaderbarComponent;
  let fixture: ComponentFixture<LoaderbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
