import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtered-product',
  templateUrl: './filtered-product.component.html',
  styleUrls: ['./filtered-product.component.css']
})
export class FilteredProductComponent {
  constructor(
    private router: Router
) {}
}
