import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// MODULES
import { MaterialModule } from './_modules/app-material.module';
import { AppRoutingModule } from './_modules/app-routing.module';
// import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
// import { HighchartsChartModule } from 'highcharts-angular';
import * as highmaps from 'highcharts/modules/map.src';

// COMPONENTS
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialComponent } from './social/social.component';
import { WaterComponent } from './water/water.component';
import { SocialTwitterComponent } from './social-twitter/social-twitter.component';
import { SocialNewsComponent } from './social-news/social-news.component';
import { SocialLandingComponent } from './social-landing/social-landing.component';
import { SocialAllComponent } from './social-all/social-all.component';
import { SocialMapsComponent } from './social-maps/social-maps.component';
import { HttpClientModule } from '@angular/common/http';
import { SocialComboDualAxesComponent } from './social-combo-dual-axes/social-combo-dual-axes.component';
import { SocialTwitterCountryTweetComponent } from './social-twitter-country-tweet/social-twitter-country-tweet.component';
import { SocialTwitterWordcloudComponent } from './social-twitter-wordcloud/social-twitter-wordcloud.component';


@NgModule({
  declarations: [
    AppComponent,
    SocialComponent,
    WaterComponent,
    SocialTwitterComponent,
    SocialNewsComponent,
    SocialLandingComponent,
    SocialAllComponent,
    SocialMapsComponent,
    // SocialComboDualAxesComponent,
    SocialTwitterCountryTweetComponent,
    SocialTwitterWordcloudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    // ChartModule,
    // HighchartsChartModule,
    HttpClientModule
  ],
  providers: [
    // { provide: HIGHCHARTS_MODULES, useFactory: () => [highmaps] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
