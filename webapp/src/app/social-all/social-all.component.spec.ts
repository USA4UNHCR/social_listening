import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAllComponent } from './social-all.component';

describe('SocialAllComponent', () => {
  let component: SocialAllComponent;
  let fixture: ComponentFixture<SocialAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
