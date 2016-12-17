/**
 * Created by zhenglu on 12/17/16.
 */
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { AboutComponent } from "./about/about.component";

const APP_ROUTES: Routes =[
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent,
    // children: [
    //   {
    //     path: ''
    //   }
    // ]
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

