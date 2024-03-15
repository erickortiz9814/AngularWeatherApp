import { Component,ComponentFactoryResolver,ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { WeatherComponent } from './weather/weather.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('weatherContainer', { read: ViewContainerRef }) weatherContainer!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  addComponent(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(WeatherComponent);
    const componentRef = this.weatherContainer.createComponent(componentFactory);
  }
  title = 'WeatherAppAngular17';
}

