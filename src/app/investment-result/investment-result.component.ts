import {
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { InvestmentFormModel } from '../app.model';
import { InvestmentResultService } from './investment-result.service';

@Component({
  selector: 'app-investment-result',
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.scss',
})
export class InvestmentResultComponent {
  formData = input.required<InvestmentFormModel>();
  invResultService = inject(InvestmentResultService);
  resultData = computed(() =>
    this.invResultService.calculateInvestmentResults(this.formData())
  );
}
