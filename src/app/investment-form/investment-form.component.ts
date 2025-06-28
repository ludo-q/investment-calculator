import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentFormModel } from '../app.model';

@Component({
  selector: 'app-investment-form',
  imports: [FormsModule],
  templateUrl: './investment-form.component.html',
  styleUrl: './investment-form.component.scss',
})
export class InvestmentFormComponent {
  formDate: InvestmentFormModel = {
    initialInvestment: 4,
    annualInvestment: 7,
    duration: 3,
    expectedReturn: 1,
  };

  submitForm = output<InvestmentFormModel>();

  onSubmit() {
    this.submitForm.emit(this.formDate);
  }
}
