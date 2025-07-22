import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent, DropdownOption } from './dropdown/dropdown.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, DropdownComponent],
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

  // Properties to store selected values
  selectedCountry: DropdownOption | null = null;
  selectedFruit: DropdownOption | null = null;

  // Event handlers for dropdown changes
  onCountryChange(selectedValue: DropdownOption): void {
    this.selectedCountry = selectedValue;
    console.log('Country changed to:', selectedValue.id, selectedValue.displayValue);
  }

  onFruitChange(selectedValue: DropdownOption): void {
    this.selectedFruit = selectedValue;
    console.log('Fruit changed to:', selectedValue.id, selectedValue.displayValue);
  }
}
