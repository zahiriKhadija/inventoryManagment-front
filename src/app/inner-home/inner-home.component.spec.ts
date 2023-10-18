import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerHomeComponent } from './inner-home.component';

describe('InnerHomeComponent', () => {
  let component: InnerHomeComponent;
  let fixture: ComponentFixture<InnerHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnerHomeComponent]
    });
    fixture = TestBed.createComponent(InnerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
