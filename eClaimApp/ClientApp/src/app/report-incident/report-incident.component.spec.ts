import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportIncident } from './report-incident.component';

describe('ContactCreateComponent', () => {
  let component: ReportIncident;
  let fixture: ComponentFixture<ReportIncident>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportIncident ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportIncident);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
