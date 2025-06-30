export interface InvestmentModel {
    id: string;
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
}

export interface InvestmentFormModel {
    initialInvestment: number;
    annualInvestment: number;
    duration: number;
    expectedReturn: number;
}