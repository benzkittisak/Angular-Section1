import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomLineComponent } from './bottom-line.component';

describe('BottomLineComponent', () => {
  let component: BottomLineComponent;
  let fixture: ComponentFixture<BottomLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
