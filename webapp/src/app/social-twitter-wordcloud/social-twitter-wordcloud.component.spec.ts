import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialTwitterWordcloudComponent } from './social-twitter-wordcloud.component';

describe('SocialTwitterWordcloudComponent', () => {
  let component: SocialTwitterWordcloudComponent;
  let fixture: ComponentFixture<SocialTwitterWordcloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialTwitterWordcloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialTwitterWordcloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
