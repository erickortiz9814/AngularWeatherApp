import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {



  myWeather: any;
  temperature: number = 0;
  feelsLikeTemp: number = 0;
  humidity: number = 0;
  pressure: number = 0;
  summary: string = '';
  iconURL: string = '';
  city: string = 'New York';
  countryCode: string = 'us';
  units: string = 'imperial';

  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
    this.getForecast();
  }

  getForecast(){

    this.forecastService.getForecast(this.city, this.countryCode).subscribe({
      
      next: (res) => {
        console.log(res);
        // for(const entry in res){
        //   //res.list
        // }
        // this.myWeather = res;
        // if(this.units == 'imperial'){
        //   this.temperature = (this.myWeather.main.temp * 9/5) + 32;
        // } else {
        //   this.temperature = this.myWeather.main.temp;
        // }
        // if(this.units == 'imperial'){
        //   this.feelsLikeTemp = (this.myWeather.main.feels_like * 9/5) + 32;
        // } else {
        //   this.feelsLikeTemp = this.myWeather.main.feels_like;
        // }
        // this.humidity = this.myWeather.main.humidity;
        // this.pressure = this.myWeather.main.pressure;
        // this.summary = this.myWeather.weather[0].main;

        // this.iconURL = 'https://openweathermap.org/img/wn/' + this.myWeather.weather[0].icon + '@2x.png';
      },

      error: (error) => console.log(error.message),

      complete: () => console.info('API call completed')
    })
  }
}
