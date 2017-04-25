import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelProjectComponent } from './panel-project.component';

describe('PanelProjectComponent', () => {
  let component: PanelProjectComponent;
  let fixture: ComponentFixture<PanelProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
