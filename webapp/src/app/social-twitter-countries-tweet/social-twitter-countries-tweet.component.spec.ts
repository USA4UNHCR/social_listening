import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialTwitterCountriesTweetComponent } from './social-twitter-countries-tweet.component';

describe('SocialTwitterCountriesTweetComponent', () => {
  let component: SocialTwitterCountriesTweetComponent;
  let fixture: ComponentFixture<SocialTwitterCountriesTweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialTwitterCountriesTweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialTwitterCountriesTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
