import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 3000, noPause: true, showIndicators: true } }
  ]
})

export class BannerComponent {
  imagens: string[] = [
                        '../../../assets/images/banner3.jpg', 
                        '../../../assets/images/banner2.png', 
                        '../../../assets/images/banner1.png'
                      ];
}
