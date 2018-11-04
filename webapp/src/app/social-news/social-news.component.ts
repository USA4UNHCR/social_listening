import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-news',
  templateUrl: './social-news.component.html',
  styleUrls: ['./social-news.component.sass']
})
export class SocialNewsComponent implements OnInit {

  view;
  constructor() { }

  ngOnInit() { }

  changeView(view?) {
    this.view = view;
  }
}
