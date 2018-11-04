import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNewsComponent } from './social-news.component';

describe('SocialNewsComponent', () => {
  let component: SocialNewsComponent;
  let fixture: ComponentFixture<SocialNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
