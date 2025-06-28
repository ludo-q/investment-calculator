import { Injectable } from '@angular/core';
import { InvestmentFormModel, InvestmentModel } from '../app.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentResultService {
  calculateInvestmentResults(data: InvestmentFormModel): InvestmentModel[] {
    const annualData = [];
    let investmentValue = data.initialInvestment;

    for (let i = 0; i < data.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (data.expectedReturn / 100);
      investmentValue += interestEarnedInYear + data.annualInvestment;
      const totalInterest =
        investmentValue - data.annualInvestment * year - data.initialInvestment;
      annualData.push({
        id: new Date().getUTCDate().toString() + i.toString(),
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: data.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: data.initialInvestment + data.annualInvestment * year,
      });
    }

    return annualData;
  }
}
