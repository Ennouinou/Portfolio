import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosPComponent } from './infos-p.component';

describe('InfosPComponent', () => {
  let component: InfosPComponent;
  let fixture: ComponentFixture<InfosPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
