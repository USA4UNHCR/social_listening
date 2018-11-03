import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialComboDualAxesComponent } from './social-combo-dual-axes.component';

describe('SocialComboDualAxesComponent', () => {
  let component: SocialComboDualAxesComponent;
  let fixture: ComponentFixture<SocialComboDualAxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialComboDualAxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialComboDualAxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
