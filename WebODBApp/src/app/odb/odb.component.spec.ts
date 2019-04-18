import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdbComponent } from './odb.component';

describe('OdbComponent', () => {
  let component: OdbComponent;
  let fixture: ComponentFixture<OdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
