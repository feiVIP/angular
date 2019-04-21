import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QqDemoComponent } from './qq-demo.component';

describe('QqDemoComponent', () => {
  let component: QqDemoComponent;
  let fixture: ComponentFixture<QqDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QqDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QqDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
