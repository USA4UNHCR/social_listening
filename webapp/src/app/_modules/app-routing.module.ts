import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialComponent } from '../social/social.component';
import { WaterComponent } from '../water/water.component';
import { SocialTwitterComponent } from '../social-twitter/social-twitter.component';
import { SocialNewsComponent } from '../social-news/social-news.component';
import { SocialLandingComponent } from '../social-landing/social-landing.component';
import { SocialAllComponent } from '../social-all/social-all.component';

const routes: Routes = [
  {
    path: 'social-listening',
    component: SocialComponent,
    children: [
      {
        path: '',
        component: SocialLandingComponent
      },
      {
        path: 'twitter',
        component: SocialTwitterComponent
      },
      {
        path: 'news',
        component: SocialNewsComponent
      },
      {
        path: 'all',
        component: SocialAllComponent
      }
    ]
  },
  {
    path: 'water-accessing',
    component: WaterComponent
  },
  {
    path: '**',
    redirectTo: 'social-listening'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
