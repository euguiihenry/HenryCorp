import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuilhermeHenriqueComponent } from './guilherme-henrique.component';

describe('GuilhermeHenriqueComponent', () => {
  let component: GuilhermeHenriqueComponent;
  let fixture: ComponentFixture<GuilhermeHenriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuilhermeHenriqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuilhermeHenriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
