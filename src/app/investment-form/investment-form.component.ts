import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentFormModel } from '../../core/investment.model';
import { InvestmentService } from '../../core/investment.service';

@Component({
  selector: 'app-investment-form',
  imports: [FormsModule],
  templateUrl: './investment-form.component.html',
  styleUrl: './investment-form.component.scss',
})
export class InvestmentFormComponent {
  formDate = signal(this.defaultFormData);
  investmentService = inject(InvestmentService);

  onSubmit() {
    if (this.hasEnteredSomeValue) {
      this.investmentService.calculateInvestmentResults(this.formDate());
      this.formDate.set(this.defaultFormData);
    }
  }

  get defaultFormData(): InvestmentFormModel {
    return {
      initialInvestment: 0,
      annualInvestment: 0,
      duration: 0,
      expectedReturn: 0,
    };
  }

  get hasEnteredSomeValue(): boolean {
    return !!(
      this.formDate().duration ||
      this.formDate().expectedReturn ||
      this.formDate().annualInvestment ||
      this.formDate().initialInvestment
    );
  }
}
