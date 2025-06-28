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
    initialInvestment: 0,
    annualInvestment: 0,
    duration: 0,
    expectedReturn: 0,
  };

  submitForm = output<InvestmentFormModel>();

  onSubmit() {
    this.submitForm.emit(this.formDate);
  }
}
