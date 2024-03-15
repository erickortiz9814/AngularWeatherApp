import { Component,ComponentFactoryResolver,ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { WeatherComponent } from './weather/weather.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentRefs: any[] = [];
  @ViewChild('weatherContainer', { read: ViewContainerRef }) weatherContainer!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  addComponent(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(WeatherComponent);
    const componentRef = this.weatherContainer.createComponent(componentFactory);
    this.weatherContainer.element.nativeElement.appendChild(componentRef.location.nativeElement);
  }

  deleteComponent(): void {
    const componentRef = this.weatherContainer.get(this.weatherContainer.length - 1);
    
    if (componentRef) {
      componentRef.destroy();
    }
  }

  title = 'WeatherAppAngular17';
}

