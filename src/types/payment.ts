export interface PaymentMethod {
  id: number;
  documentId: string;

  Name: string;
  Description: string;

  ProcessingTime: string;

  SupportedCurrency: string[];

  MinimumDeposit: number;

  MaximumDeposit: number;

  DisplayOrder: number;

  Active: boolean;

  Logo?: {
    id: number;
    url: string;
    alternativeText?: string;
  };
}