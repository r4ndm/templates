import { Component, Input } from '@angular/core';
import { IBreadcrumbItem } from './breadcrumb.interface';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-breadcrumb',
  imports: [CommonModule, RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {
  @Input() public breadcrumb: IBreadcrumbItem[] = [];
}
