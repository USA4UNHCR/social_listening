import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var Highcharts: any;

@Component({
  selector: 'app-social-twitter-wordcloud',
  templateUrl: './social-twitter-wordcloud.component.html',
  styleUrls: ['./social-twitter-wordcloud.component.sass']
})
export class SocialTwitterWordcloudComponent implements OnInit {

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    this._http.get('assets/world-cloud.json').subscribe(res => {
      console.log(res);
      const data = [];
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          data.push({
            name: key,
            weight: res[key]
          });
        }
      }

      Highcharts.chart('app-social-twitter-wordcloud', {
        series: [{
          type: 'wordcloud',
          data: data,
          name: 'Occurrences'
        }],
        title: {
          text: 'Wordcloud'
        }
      });
    });

  }

}
