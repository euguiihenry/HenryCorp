import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HenrylingosComponent } from './henrylingos.component';

describe('HenrylingosComponent', () => {
  let component: HenrylingosComponent;
  let fixture: ComponentFixture<HenrylingosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HenrylingosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HenrylingosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
