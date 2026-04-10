export interface CountryOption {
  value: string;
  label: string;
  currency: string;
  feeRates: FeeRateOption[];
}

export interface FeeRateOption {
  value: string;
  label: string;
  percentage: string;
  fixed: string;
}

export const countries: CountryOption[] = [
  {
    value: 'us-domestic',
    label: 'United States - Domestic',
    currency: 'USD',
    feeRates: [
      {
        value: 'invoicing',
        label: 'Invoicing, PayPal Checkout, Venmo',
        percentage: '3.49',
        fixed: '0.49'
      },
      {
        value: 'credit-debit',
        label: 'Credit and Debit Cards',
        percentage: '2.99',
        fixed: '0.49'
      },
      {
        value: 'goods-services',
        label: 'Goods and Services, Donations',
        percentage: '2.89',
        fixed: '0.49'
      },
      {
        value: 'charity',
        label: 'Charity',
        percentage: '1.99',
        fixed: '0.49'
      },
      {
        value: 'micropayment',
        label: 'Micropayment',
        percentage: '4.99',
        fixed: '0.09'
      },
      {
        value: 'guest-amex',
        label: 'PayPal Guest Checkout - American Express Payments',
        percentage: '3.5',
        fixed: '0'
      },
      {
        value: 'qr-above',
        label: 'QR code - $10.01 and above',
        percentage: '1.9',
        fixed: '0.1'
      },
      {
        value: 'qr-below',
        label: 'QR code - $10 and below',
        percentage: '2.4',
        fixed: '0.05'
      },
    ]
  },
  { value: 'us-international', label: 'United States - International', currency: 'USD', feeRates: [
      {
        value: 'invoicing',
        label: 'Invoicing, PayPal Checkout, Venmo',
        percentage: '4.99',
        fixed: '0.49'
      },
      {
        value: 'credit-debit',
        label: 'Credit and Debit Cards',
        percentage: '4.49',
        fixed: '0.49'
      },
      {
        value: 'goods-services',
        label: 'Goods and Services, Donations',
        percentage: '4.39',
        fixed: '0.49'
      },
      {
        value: 'charity',
        label: 'Charity',
        percentage: '3.49',
        fixed: '0.49'
      },
      {
        value: 'micropayment',
        label: 'Micropayment',
        percentage: '6.49',
        fixed: '0.09'
      },
    ] },
  { value: 'ca-domestic', label: 'Canada - Domestic', currency: 'CAD', feeRates: [
      {
        value: 'standard',
        label: '2.9% + $0.3',
        percentage: '2.9',
        fixed: '0.3'
      },
      {
        value: 'charity',
        label: 'Charitable Organizations',
        percentage: '1.6',
        fixed: '0.3'
      },
      {
        value: 'payments-pro',
        label: 'PayPal Payments Pro',
        percentage: '2.9',
        fixed: '0.3'
      },
      {
        value: 'virtual-terminal',
        label: 'Virtual Terminal',
        percentage: '3.1',
        fixed: '0.3'
      },
      {
        value: 'micropayment',
        label: 'Micropayment',
        percentage: '5',
        fixed: '0.05'
      },
    ] },
  { value: 'ca-from-us', label: 'Canada - From U.S.', currency: 'CAD', feeRates: [
      {
        value: 'standard',
        label: '3.7% + $0.3',
        percentage: '3.7',
        fixed: '0.3'
      },
      {
        value: 'charity',
        label: 'Charitable Organizations',
        percentage: '1.6',
        fixed: '0.3'
      },
      {
        value: 'payments-pro',
        label: 'PayPal Payments Pro',
        percentage: '3.7',
        fixed: '0.3'
      },
      {
        value: 'virtual-terminal',
        label: 'Virtual Terminal',
        percentage: '3.9',
        fixed: '0.3'
      },
      {
        value: 'micropayment',
        label: 'Micropayment',
        percentage: '5',
        fixed: '0.05'
      },
    ] },
  { value: 'ca-from-outside', label: 'Canada - From Outside Canada or U.S.', currency: 'CAD', feeRates: [
      {
        value: 'standard',
        label: '3.9% + $0.3',
        percentage: '3.9',
        fixed: '0.3'
      },
    ] },
  { value: 'ca-amex', label: 'Canada - American Express', currency: 'CAD', feeRates: [
      {
        value: 'amex',
        label: '3.5%',
        percentage: '3.5',
        fixed: '0'
      },
    ] },
  { value: 'in-local', label: 'India - Local', currency: 'INR', feeRates: [
      {
        value: 'standard',
        label: '2.5% + ₹3',
        percentage: '2.5',
        fixed: '3'
      },
    ] },
  { value: 'in-international', label: 'India - International', currency: 'INR', feeRates: [
      {
        value: 'tier1',
        label: 'Up to $3000 monthly sales',
        percentage: '4.4',
        fixed: '3'
      },
      {
        value: 'tier2',
        label: '$3000+ to $10,000 monthly sales',
        percentage: '3.9',
        fixed: '3'
      },
      {
        value: 'tier3',
        label: '$10,000+ to $100,000 monthly sales',
        percentage: '3.7',
        fixed: '3'
      },
      {
        value: 'tier4',
        label: '$100,000+ monthly sales',
        percentage: '3.4',
        fixed: '3'
      },
    ] },
  { value: 'uk', label: 'United Kingdom', currency: 'GBP', feeRates: [
      {
        value: 'domestic',
        label: 'Domestic',
        percentage: '2.9',
        fixed: '0.3'
      },
      {
        value: 'europe1',
        label: 'From Europe I, Northern Europe',
        percentage: '3.4',
        fixed: '0.3'
      },
      {
        value: 'international',
        label: 'From Canada, USA, Europe II, rest of the world',
        percentage: '4.9',
        fixed: '0.3'
      },
      {
        value: 'charity',
        label: 'Charity',
        percentage: '1.4',
        fixed: '0.2'
      },
      {
        value: 'micropayment',
        label: 'Micropayment',
        percentage: '5',
        fixed: '0.05'
      },
    ] },
];
