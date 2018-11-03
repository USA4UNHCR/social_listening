import { Component, OnInit } from '@angular/core';

declare var Highcharts: any;

@Component({
  selector: 'app-social-twitter-wordcloud',
  templateUrl: './social-twitter-wordcloud.component.html',
  styleUrls: ['./social-twitter-wordcloud.component.sass']
})
export class SocialTwitterWordcloudComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum erat ac justo sollicitudin, quis lacinia ligula fringilla. Pellentesque hendrerit, nisi vitae posuere condimentum, lectus urna accumsan libero, rutrum commodo mi lacus pretium erat. Phasellus pretium ultrices mi sed semper. Praesent ut tristique magna. Donec nisl tellus, sagittis ut tempus sit amet, consectetur eget erat. Sed ornare gravida lacinia. Curabitur iaculis metus purus, eget pretium est laoreet ut. Quisque tristique augue ac eros malesuada, vitae facilisis mauris sollicitudin. Mauris ac molestie nulla, vitae facilisis quam. Curabitur placerat ornare sem, in mattis purus posuere eget. Praesent non condimentum odio. Nunc aliquet, odio nec auctor congue, sapien justo dictum massa, nec fermentum massa sapien non tellus. Praesent luctus eros et nunc pretium hendrerit. In consequat et eros nec interdum. Ut neque dui, maximus id elit ac, consequat pretium tellus. Nullam vel accumsan lorem.';
    const lines = text.split(/[,\. ]+/g);
    const data = Highcharts.reduce(lines, function (arr, word) {
      let obj = Highcharts.find(arr, function (o) {
        return o.name === word;
      });
      if (obj) {
        obj.weight += 1;
      } else {
        obj = {
          name: word,
          weight: 1
        };
        arr.push(obj);
      }
      return arr;
    }, []);

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
  }

}
