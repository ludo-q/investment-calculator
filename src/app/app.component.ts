import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InvestmentFormComponent } from './investment-form/investment-form.component';
import { InvestmentResultComponent } from './investment-result/investment-result.component';
import { InvestmentFormModel } from './app.model';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    InvestmentFormComponent,
    InvestmentResultComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Investment Calculator';
  investmentFormData = signal<InvestmentFormModel | undefined>(undefined);

  onSubmitInvestmentForm(formData: InvestmentFormModel) {
    this.investmentFormData.set(formData);
  }
}
