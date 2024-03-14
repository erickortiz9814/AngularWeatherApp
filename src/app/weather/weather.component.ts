import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

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

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
  }

  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {
    if (cityName.value && countryCode.value) {
      this.city = cityName.value;
      this.countryCode = countryCode.value;
      this.getWeather(); 
    } else {
      alert('Please. Insert some values');
    }
    cityName.focus();
    return false;
  }

  getWeather() {
    
    this.weatherService.getweather(this.city, this.countryCode).subscribe({

      next: (res) => {
        this.myWeather = res;
        if(this.units == 'imperial'){
          this.temperature = (this.myWeather.main.temp * 9/5) + 32;
        } else {
          this.temperature = this.myWeather.main.temp;
        }
        if(this.units == 'imperial'){
          this.feelsLikeTemp = (this.myWeather.main.feels_like * 9/5) + 32;
        } else {
          this.feelsLikeTemp = this.myWeather.main.feels_like;
        }
        this.humidity = this.myWeather.main.humidity;
        this.pressure = this.myWeather.main.pressure;
        this.summary = this.myWeather.weather[0].main;

        this.iconURL = 'https://openweathermap.org/img/wn/' + this.myWeather.weather[0].icon + '@2x.png';
      },

      error: (error) => console.log(error.message),

      complete: () => console.info('API call completed')
    })
  }

  onRadioButtonChange() {
    if (this.units == 'imperial') {
      this.units = 'metric';
    } else {
      this.units = 'imperial';
    }

    this.getWeather();
  }

}
