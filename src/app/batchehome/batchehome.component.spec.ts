import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchehomeComponent } from './batchehome.component';

describe('BatchehomeComponent', () => {
  let component: BatchehomeComponent;
  let fixture: ComponentFixture<BatchehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
