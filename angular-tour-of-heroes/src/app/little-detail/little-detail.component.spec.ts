import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleDetailComponent } from './little-detail.component';

describe('LittleDetailComponent', () => {
  let component: LittleDetailComponent;
  let fixture: ComponentFixture<LittleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LittleDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LittleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
