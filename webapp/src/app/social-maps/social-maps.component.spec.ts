import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMapsComponent } from './social-maps.component';

describe('SocialMapsComponent', () => {
  let component: SocialMapsComponent;
  let fixture: ComponentFixture<SocialMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
