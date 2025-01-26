import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatalogService } from '../catalog/catalog.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.css'
})
export class NavHeaderComponent {
  constructor(private catalogService: CatalogService) {}

  protected get filters(): string[] {
    return this.catalogService.getCategories();
  }
}
