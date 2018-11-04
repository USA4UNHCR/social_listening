import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-twitter',
  templateUrl: './social-twitter.component.html',
  styleUrls: ['./social-twitter.component.sass']
})
export class SocialTwitterComponent implements OnInit {
  view;
  constructor() {}

  ngOnInit() {}

  changeView(view?) {
    this.view = view;
  }
}
