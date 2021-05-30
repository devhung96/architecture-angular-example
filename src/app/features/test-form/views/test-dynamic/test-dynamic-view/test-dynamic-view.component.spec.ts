import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDynamicViewComponent } from './test-dynamic-view.component';

describe('TestDynamicViewComponent', () => {
  let component: TestDynamicViewComponent;
  let fixture: ComponentFixture<TestDynamicViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDynamicViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDynamicViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
