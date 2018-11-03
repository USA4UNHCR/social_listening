import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLandingComponent } from './social-landing.component';

describe('SocialLandingComponent', () => {
  let component: SocialLandingComponent;
  let fixture: ComponentFixture<SocialLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
