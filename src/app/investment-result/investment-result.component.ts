import { Component, inject } from '@angular/core';

import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../../core/investment.service';

@Component({
  selector: 'app-investment-result',
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.scss',
})
export class InvestmentResultComponent {
  invResultService = inject(InvestmentService);
  resultData = this.invResultService.investmentResults;
}
