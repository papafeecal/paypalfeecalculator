'use client';

import { useState, useEffect } from 'react';
import CalculatorInput from './CalculatorInput';
import FeeResult from './FeeResult';
import { countries } from '../config/feeConfig';

type CalculationMode = 'send' | 'receive';

export default function FeeCalculator() {
  const [amount, setAmount] = useState('');
  const [feePercentage, setFeePercentage] = useState('3.49');
  const [fixedFee, setFixedFee] = useState('0.49');
  const [mode, setMode] = useState<CalculationMode>('send');
  const [country, setCountry] = useState('us-domestic');
  const [selectedFeeRate, setSelectedFeeRate] = useState('invoicing');
  
  const [paypalFee, setPaypalFee] = useState(0);
  const [receiveAmount, setReceiveAmount] = useState(0);

  // Get current country's fee rates
  const currentCountry = countries.find(c => c.value === country);
  const availableFeeRates = currentCountry?.feeRates || [];
  const currencySymbol = currentCountry?.currency === 'USD' ? '$' : 
                         currentCountry?.currency === 'CAD' ? '$' :
                         currentCountry?.currency === 'GBP' ? '£' :
                         currentCountry?.currency === 'INR' ? '₹' : '$';

  useEffect(() => {
    const amountNum = parseFloat(amount) || 0;
    const feePercent = parseFloat(feePercentage) || 0;
    const fixed = parseFloat(fixedFee) || 0;

    if (mode === 'send') {
      // I Send (Receiver Gets Less)
      const fee = (amountNum * feePercent / 100) + fixed;
      const receive = amountNum - fee;
      setPaypalFee(fee);
      setReceiveAmount(receive);
    } else {
      // I Want to Receive (Sender Pays More)
      const receive = amountNum;
      const fee = (receive + fixed) / (1 - feePercent / 100) - receive;
      setPaypalFee(fee);
      setReceiveAmount(receive);
    }
  }, [amount, feePercentage, fixedFee, mode]);

  const handleCountryChange = (value: string) => {
    setCountry(value);
    const newCountry = countries.find(c => c.value === value);
    if (newCountry && newCountry.feeRates.length > 0) {
      const firstRate = newCountry.feeRates[0];
      setSelectedFeeRate(firstRate.value);
      setFeePercentage(firstRate.percentage);
      setFixedFee(firstRate.fixed);
    }
  };

  const handleFeeRateChange = (value: string) => {
    setSelectedFeeRate(value);
    const rate = availableFeeRates.find(r => r.value === value);
    if (rate) {
      setFeePercentage(rate.percentage);
      setFixedFee(rate.fixed);
    }
  };

  const handleReset = () => {
    setAmount('');
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-3xl shadow-sm border border-zinc-200 p-8 space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-zinc-900 mb-2">
            PayPal Fee Calculator
          </h2>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-base font-semibold text-zinc-900">Calculation Mode</h3>
              <div className="relative group">
                <div className="w-3 h-3 rounded-full bg-zinc-800 text-white flex items-center justify-center text-[8px] font-bold cursor-help">
                  i
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-64 p-4 bg-zinc-800 text-white text-sm rounded-2xl shadow-lg z-10">
                  <div className="text-center leading-relaxed">
                    Choose whether you're calculating based on what you send, or what you want to receive after fees.
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-zinc-800"></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="mode"
                  value="send"
                  checked={mode === 'send'}
                  onChange={(e) => setMode(e.target.value as CalculationMode)}
                  className="w-4 h-4 text-blue-600 accent-blue-600"
                />
                <span className="text-sm text-zinc-700">
                  I Send (Receiver Gets Less)
                </span>
              </label>
              
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="mode"
                  value="receive"
                  checked={mode === 'receive'}
                  onChange={(e) => setMode(e.target.value as CalculationMode)}
                  className="w-4 h-4 text-blue-600 accent-blue-600"
                />
                <span className="text-sm text-zinc-700">
                  I Want to Receive (Sender Pays More)
                </span>
              </label>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-zinc-600 uppercase tracking-wide">
                {mode === 'send' ? 'Amount I Send' : 'Amount I Want to Receive'}
              </label>
              <button
                onClick={handleReset}
                className="text-xs text-zinc-500 hover:text-zinc-700 font-medium transition-colors"
              >
                Reset
              </button>
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base text-zinc-500">
                {currencySymbol}
              </span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full pl-10 pr-4 py-2 text-base border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                step="0.01"
                min="0"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-zinc-600 uppercase tracking-wide">
              Country or Region (currency)
            </label>
            <select
              value={country}
              onChange={(e) => handleCountryChange(e.target.value)}
              className="w-full px-4 py-2 text-sm border border-zinc-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23000'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                backgroundSize: '1.5rem',
                backgroundColor: '#FFFFFF'
              }}
            >
              {countries.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label} ({c.currency})
                </option>
              ))}
            </select>
          </div>
          
          {availableFeeRates.length > 0 && (
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-zinc-600 uppercase tracking-wide">
                Fee rate
              </label>
              <select
                value={selectedFeeRate}
                onChange={(e) => handleFeeRateChange(e.target.value)}
                className="w-full px-4 py-2 text-sm border border-zinc-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23000'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1.5rem',
                  backgroundColor: '#FFFFFF'
                }}
              >
                {availableFeeRates.map((rate) => {
                  // Check if label already contains the rate (has % symbol)
                  if (rate.label.includes('%')) {
                    return (
                      <option key={rate.value} value={rate.value}>
                        {rate.label}
                      </option>
                    );
                  }
                  
                  // Otherwise, add the rate to the label
                  const symbol = currentCountry?.currency === 'INR' ? '₹' : 
                                 currentCountry?.currency === 'GBP' ? '£' : 
                                 currentCountry?.currency === 'CAD' ? '$' : '$';
                  return (
                    <option key={rate.value} value={rate.value}>
                      {rate.percentage}% + {symbol}{rate.fixed} ({rate.label})
                    </option>
                  );
                })}
              </select>
            </div>
          )}
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <label className="text-xs font-bold text-zinc-600 uppercase tracking-wide">
                  Fee Rate (%)
                </label>
                <div className="relative group">
                  <div className="w-3 h-3 rounded-full bg-zinc-800 text-white flex items-center justify-center text-[8px] font-bold cursor-help">
                    i
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-64 p-4 bg-zinc-800 text-white text-sm rounded-2xl shadow-lg z-10">
                    <div className="text-center leading-relaxed">
                      The percentage fee charged by PayPal for the transaction (e.g., 3.49 for domestic).
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-zinc-800"></div>
                  </div>
                </div>
              </div>
              <input
                type="number"
                value={feePercentage}
                onChange={(e) => setFeePercentage(e.target.value)}
                placeholder="3.49"
                className="w-full px-4 py-2 text-base border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                step="0.01"
                min="0"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <label className="text-xs font-bold text-zinc-600 uppercase tracking-wide">
                  Fixed Fee ({currencySymbol})
                </label>
                <div className="relative group">
                  <div className="w-3 h-3 rounded-full bg-zinc-800 text-white flex items-center justify-center text-[8px] font-bold cursor-help">
                    i
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-64 p-4 bg-zinc-800 text-white text-sm rounded-2xl shadow-lg z-10">
                    <div className="text-center leading-relaxed">
                      The fixed fee charged by PayPal per transaction (e.g., 0.49 for domestic transactions).
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-zinc-800"></div>
                  </div>
                </div>
              </div>
              <input
                type="number"
                value={fixedFee}
                onChange={(e) => setFixedFee(e.target.value)}
                placeholder="0.49"
                className="w-full px-4 py-2 text-base border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                step="0.01"
                min="0"
              />
            </div>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <FeeResult label="PayPal Fee" value={paypalFee} currencySymbol={currencySymbol} />
          <FeeResult 
            label={mode === 'send' ? "You'll Receive" : "You Should Ask For"} 
            value={mode === 'send' ? receiveAmount : amount ? parseFloat(amount) + paypalFee : 0} 
            currencySymbol={currencySymbol} 
            highlight 
          />
        </div>
      </div>
    </div>
  );
}
