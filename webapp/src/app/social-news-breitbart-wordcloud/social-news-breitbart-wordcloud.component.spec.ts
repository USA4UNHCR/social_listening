import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNewsBreitbartWordcloudComponent } from './social-news-breitbart-wordcloud.component';

describe('SocialNewsBreitbartWordcloudComponent', () => {
  let component: SocialNewsBreitbartWordcloudComponent;
  let fixture: ComponentFixture<SocialNewsBreitbartWordcloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialNewsBreitbartWordcloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialNewsBreitbartWordcloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
