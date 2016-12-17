/**
 * Created by zhenglu on 12/17/16.
 */
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { UserComponent } from "./user/user.component";
import { NotfoundComponent } from "./notfound/notfound.component";

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
    path: 'user',
    component: UserComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

