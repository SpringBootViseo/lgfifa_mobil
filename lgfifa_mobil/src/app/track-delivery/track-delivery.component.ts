import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track-delivery',
  templateUrl: './track-delivery.component.html',
  styleUrls: ['./track-delivery.component.css']
})
export class TrackDeliveryComponent {
  constructor(
    private router: Router
) {}
}
