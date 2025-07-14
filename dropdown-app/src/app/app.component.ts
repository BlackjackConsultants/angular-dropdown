import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DropdownComponent, DropdownOption } from './dropdown/dropdown.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DropdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dropdown-app';

  // Sample options data
  countries: DropdownOption[] = [
    { id: 'us', displayValue: 'United States' },
    { id: 'ca', displayValue: 'Canada' },
    { id: 'mx', displayValue: 'Mexico' },
    { id: 'uk', displayValue: 'United Kingdom' },
    { id: 'fr', displayValue: 'France' },
    { id: 'de', displayValue: 'Germany' },
    { id: 'jp', displayValue: 'Japan' },
    { id: 'au', displayValue: 'Australia' }
  ];

  fruits: DropdownOption[] = [
    { id: 1, displayValue: 'Apple' },
    { id: 2, displayValue: 'Banana' },
    { id: 3, displayValue: 'Orange' },
    { id: 4, displayValue: 'Mango' },
    { id: 5, displayValue: 'Grapes' }
  ];
}
