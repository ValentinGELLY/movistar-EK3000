import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalConditionComponent } from './legal-condition.component';

describe('LegalConditionComponent', () => {
  let component: LegalConditionComponent;
  let fixture: ComponentFixture<LegalConditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegalConditionComponent]
    });
    fixture = TestBed.createComponent(LegalConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
