import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAlgorithmComponent } from './dialog-algorithm.component';

describe('DialogAlgorithmComponent', () => {
  let component: DialogAlgorithmComponent;
  let fixture: ComponentFixture<DialogAlgorithmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAlgorithmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
