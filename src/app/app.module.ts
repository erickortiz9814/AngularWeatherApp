import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherComponent2 } from './weather/weather.component2';
import { WeatherComponent3} from './weather/weather.component3';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherComponent2,
    WeatherComponent3,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'weather', component: WeatherComponent},
      { path: 'detail', component: DetailComponent},
      { path: '', redirectTo: 'weather', pathMatch: 'full',},
      { path: '*', redirectTo: 'weather', pathMatch: 'full',}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
