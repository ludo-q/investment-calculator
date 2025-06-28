import { Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { InvestmentFormModel, InvestmentModel } from '../app.model';
import { InvestmentResultService } from './investment-result.service';

@Component({
  selector: 'app-investment-result',
  imports: [],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.scss',
})
export class InvestmentResultComponent {
  formData = input.required<InvestmentFormModel>();
  invResultService = inject(InvestmentResultService);
  resultData = computed(() => {
    return this.invResultService.calculateInvestmentResults(this.formData())
  });
}
