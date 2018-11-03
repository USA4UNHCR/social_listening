import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var Highcharts: any;

@Component({
  selector: 'app-social-twitter-countries-tweet',
  templateUrl: './social-twitter-countries-tweet.component.html',
  styleUrls: ['./social-twitter-countries-tweet.component.sass']
})
export class SocialTwitterCountriesTweetComponent implements OnInit {

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.initCharts();
  }

  initCharts() {
    this._http.get('assets/countries_tweets.json').subscribe((res: any[]) => {
      console.log();
      let data: any[] = res.map(country => {
        return {
          name: country['Place.Country'],
          code: country['Place.Country Code'],
          value: country['Number of Records'] + country['Retweet Count'],
          tweet: country['Number of Records'],
          retweet: country['Retweet Count'],
          ratio: (country['SUM([Retweet Count])/SUM([Number of Records])'] * 100).toFixed(2)
        };
      });

      data = data.filter(d => d.value > 0);

      this._http
        .get('https://cdn.rawgit.com/highcharts/highcharts/680f5d50a47e90f53d814b53f80ce1850b9060c0/samples/data/world-population-density.json')
        .subscribe((sample: any[]) => {
          const nameMap = new Map<any, any>();
          const codeMap = new Map<any, any>();
          sample.forEach(s => {
            nameMap.set(s.name.toLowerCase(), s.code3);
            codeMap.set(s.code.toLowerCase(), s.code3);
          });

          data.forEach(d => {
            d.code3 = nameMap.get(d.name.toLowerCase());
            if (!d.code3) {
              d.code3 = codeMap.get(d.code.toLowerCase());
            }
          });

          console.log(data);
          this.renderCharts(data);
        });
    });
  }

  renderCharts(data) {
    Highcharts.mapChart('app-social-twitter-countries-tweet', {
      chart: {
        map: 'custom/world'
      },

      title: {
        text: 'Number of tweets in each countries'
      },

      legend: {
        title: {
          text: 'Number of tweets',
          style: {
            color:
              (Highcharts.theme && Highcharts.theme.textColor) || 'black'
          }
        }
      },

      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
      },

      tooltip: {
        backgroundColor: 'none',
        borderWidth: 0,
        shadow: false,
        useHTML: true,
        padding: 0,
        pointFormat:
          '<span class="f32"><span class="flag {point.properties.hc-key}">' +
          '</span></span> {point.name}<br>' +
          '<span style="font-size:30px">{point.value} tweets</span><br>' +
          '<span style="font-size:20px">{point.tweet} original tweets</span><br>' +
          '<span style="font-size:20px">{point.retweet} retweets</span><br>' +
          '<span style="font-size:14px">Retweets/original retweets ratio: {point.ratio}%</span><br>',
        positioner: function() {
          return { x: 0, y: 550 };
        }
      },

      colorAxis: {
        min: 1,
        max: 1000,
        type: 'logarithmic'
      },

      series: [
        {
          data: data,
          joinBy: ['iso-a3', 'code3'],
          name: 'Tweets',
          states: {
            hover: {
              color: '#a4edba'
            }
          },
          dataLabels: {
            enabled: true,
            format: '{point.name} ({point.value} tweets)'
          }
        }
      ]
    });
  }

}
