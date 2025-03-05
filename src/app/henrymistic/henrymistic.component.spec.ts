import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HenrymisticComponent } from './henrymistic.component';

describe('HenrymisticComponent', () => {
  let component: HenrymisticComponent;
  let fixture: ComponentFixture<HenrymisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HenrymisticComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HenrymisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
