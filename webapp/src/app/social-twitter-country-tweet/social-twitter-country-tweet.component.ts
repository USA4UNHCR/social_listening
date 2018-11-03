import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-social-twitter-country-tweet',
  templateUrl: './social-twitter-country-tweet.component.html',
  styleUrls: ['./social-twitter-country-tweet.component.sass']
})
export class SocialTwitterCountryTweetComponent implements OnInit, AfterViewInit {

  constructor(private _http: HttpClient) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.tableau();
  }

  tableau() {
    const divElement = document.getElementById('viz1541277817841');
    const vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.minWidth = '100%';
    vizElement.style.maxWidth = '100%';
    vizElement.style.minHeight = 'calc(100vh - 208px)';
    vizElement.style.maxHeight = 'calc(100vh - 208px)'; // divElement.offsetWidth * 0.75 + 'px';
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }
}
