import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialTwitterCountryTweetComponent } from './social-twitter-country-tweet.component';

describe('SocialTwitterCountryTweetComponent', () => {
  let component: SocialTwitterCountryTweetComponent;
  let fixture: ComponentFixture<SocialTwitterCountryTweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialTwitterCountryTweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialTwitterCountryTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
