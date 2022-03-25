import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { PageFoodComponent } from './pages/page-food/page-food.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageFoodComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "", component: AppComponent},
      {path: "tomatoes/:id", component: PageFoodComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
