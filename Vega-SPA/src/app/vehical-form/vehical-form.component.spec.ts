import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicalFormComponent } from './vehical-form.component';

describe('VehicalFormComponent', () => {
  let component: VehicalFormComponent;
  let fixture: ComponentFixture<VehicalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
