import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey: string = '7fe9d7ced8194f6aaf0619a754b0f7e1';
  URI: string = '';

  constructor(private http: HttpClient) { 
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
  }

  getweather(cityName: string, countryCode: string) {
    return this.http.get(`${this.URI}${cityName},${countryCode}`);
  }

  getForecast(){
    let daysForecast: any = this.http.get(`api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${this.apiKey}`);
    console.log(daysForecast);
    return this.http.get(`api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${this.apiKey}`);
  }

}
