import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllflightComponent } from './allflight.component';

describe('AllflightComponent', () => {
  let component: AllflightComponent;
  let fixture: ComponentFixture<AllflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllflightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
