import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'contact-buttons.component.html', // Added quotes
  styleUrls: ['contact-buttons.component.css'], // Added quotes
})
export class ContactButtonsComponent {
  expanded = false;

  toggleExpand() {
    this.expanded = !this.expanded;
  }
}