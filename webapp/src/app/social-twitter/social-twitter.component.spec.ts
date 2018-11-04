import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialTwitterComponent } from './social-twitter.component';

describe('SocialTwitterComponent', () => {
  let component: SocialTwitterComponent;
  let fixture: ComponentFixture<SocialTwitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialTwitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialTwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
