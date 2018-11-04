import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CloudData } from 'angular-tag-cloud-module';

declare var Highcharts: any;

@Component({
  selector: 'app-social-twitter-wordcloud',
  templateUrl: './social-twitter-wordcloud.component.html',
  styleUrls: ['./social-twitter-wordcloud.component.sass']
})
export class SocialTwitterWordcloudComponent implements OnInit {
  data: CloudData[];
  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    this._http.get('assets/world-cloud.json').subscribe((res: any) => {
      const lines = res.text.split(/[,\. ]+/g);
      let data = Highcharts.reduce(lines, (arr, word) => {
        let obj = Highcharts.find(arr, (o) => o.name === word);
        if (obj) {
          obj.count += 1;
          obj.weight += 1;
        } else {
          obj = {
            name: word,
            count: 1,
            weight: 1
          };
          arr.push(obj);
        }
        return arr;
      }, []);

      data = data.filter(d => d.count > 50);

      data = data.sort((a, b) => {
        if (a.count > b.count) {
          return 1;
        } else if (a.count < b.count) {
          return -1;
        } else {
          return 0;
        }
      });

      let weight = 1;
      let offset = 1;

      data.forEach(d => {
        weight += offset;
        offset++;
        d.weight = weight;
      });

      Highcharts.chart('app-social-twitter-wordcloud', {
        series: [
          {
            type: 'wordcloud',
            data: data,
            name: 'weight',
          }
        ],
        title: {
          text: 'Wordcloud'
        }
      });
    });

  }

}
