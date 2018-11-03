import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapChart } from 'angular-highcharts';
import { chart } from 'highcharts';
// import * as Highcharts from 'highcharts/highmaps';
declare var $: any;
declare var Highcharts: any;

@Component({
  selector: 'app-social-maps',
  templateUrl: './social-maps.component.html',
  styleUrls: ['./social-maps.component.sass']
})
export class SocialMapsComponent implements OnInit, AfterViewInit {
  DATA = [
    ['eu', 43.91],
    ['oc', 34.91],
    ['af', 52.31],
    ['as', 40.75],
    ['na', 41.60],
    ['sa', 41.6]
  ];

  constructor(private _http: HttpClient) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.initMap();
  }

  initMap() {
    Highcharts.mapChart('app-social-maps-container', {
      chart: {
        map: 'custom/world-continents'
      },

      title: {
        text: 'Percent of Positive Sentiments group by continents'
      },

      subtitle: {
        text:
          'Data parsed by Katherine'
      },

      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
      },

      colorAxis: {
        min: 30
      },

      series: [
        {
          data: this.DATA,
          name: 'Random data',
          states: {
            hover: {
              color: '#BADA55'
            }
          },
          dataLabels: {
            enabled: true,
            format: '{point.name} ({point.value}%)'
          }
        }
      ]
    });
  }
}
