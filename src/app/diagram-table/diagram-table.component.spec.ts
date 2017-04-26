import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramTableComponent } from './diagram-table.component';

describe('DiagramTableComponent', () => {
  let component: DiagramTableComponent;
  let fixture: ComponentFixture<DiagramTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagramTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagramTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
