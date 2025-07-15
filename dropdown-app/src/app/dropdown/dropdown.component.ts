import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface DropdownOption {
  id: string | number;
  displayValue: string;
}

@Component({
  selector: 'app-dropdown',
  imports: [CommonModule, FormsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  @Input() options: DropdownOption[] = [];
  @Input() placeholder: string = 'Select an option';
  @Input() disabled: boolean = false;
  
  selectedValue: string | number | null = null;

  onSelectionChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedValue = target.value;
    console.log('Selected option:', this.selectedValue);
  }

  getSelectedDisplayValue(): string {
    if (!this.selectedValue) return '';
    const selectedOption = this.options.find(opt => opt.id.toString() === this.selectedValue?.toString());
    return selectedOption?.displayValue || '';
  }

  setValue() {
    this.selectedValue = this.options[3].id; // Example value to set
  }
}
