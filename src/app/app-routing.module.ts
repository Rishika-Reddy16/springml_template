import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReportsNavComponent } from './reports-nav/reports-nav.component';
import { ReportsComponent } from './reports/reports.component';

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
            path:'reports',
            component:ReportsComponent,
            children:[
              {
                path:'reports-nav',
                component:ReportsNavComponent,
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
