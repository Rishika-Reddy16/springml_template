import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReportsNavComponent } from './reports-nav/reports-nav.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportsNav1Component } from './reports-nav1/reports-nav1.component';
import { LibComponent } from './lib/lib.component';
import { AdsComponent } from './ads/ads.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'',
    component:HeaderComponent,
    children:[
      {
        path:'',
        component:NavbarComponent,
        children:[
          {
            path:'home',
            component:HomeComponent,
          },
          {
            path:'lib',
            component:LibComponent,
          },
          {
            path:'reports',
            component:ReportsComponent,
            children:[
              {
                path:'reports-nav',
                component:ReportsNavComponent,
              },
              {
                path:'reports-nav1',
                component:ReportsNav1Component,
              },
              {
                path:'lib',
                component:LibComponent,
              }
            ]
          },
          {
            path:'ads',
            component:AdsComponent,
            children:[
              {
                path:'reports-nav',
                component:ReportsNavComponent,
              },
              {
                path:'reports-nav1',
                component:ReportsNav1Component,
              },
              {
                path:'lib',
                component:LibComponent,
              }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
