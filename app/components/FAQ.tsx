'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string | string[];
}

const faqData: FAQItem[] = [
  {
    question: 'What is a PayPal fee calculator?',
    answer: 'PayPal fees can seriously eat into your profits if you handle a lot of transactions through their service. This poses a major problem since many freelancers and small businesses use PayPal to get paid. You can use a PayPal fees calculator to help you recoup these losses by seeing what you should actually charge to make the money you deserve.'
  },
  {
    question: 'Why do I need a PayPal calculator?',
    answer: [
      'One of the biggest reasons is that it saves a lot of time! You can opt to add the numbers up manually, but a PayPal fees calculator gives you the answer instantly. Because of the speed, you can calculate multiple transactions in seconds and adjust your rates to account for any additional PayPal fees.',
      'It\'s also error-free! When your money is on the line, you don\'t want to miss out on any amount of money you\'ve earned. Using a digital solution means you won\'t have to wonder whether your estimates are accurate each time you calculate PayPal fees. You\'ll know they are!'
    ]
  },
  {
    question: 'How much will PayPal charge me to receive money?',
    answer: 'You may wonder how much are paypal fees. PayPal has a set 3.49% processing fee in place as well as a $0.49 per transaction on top. It means the more you transfer, the more you will pay out in processing fees. No matter how much you decide to send, this fee remains. The reason for the additional $0.49 fee, is because for some smaller amounts sent, for example if a client owed you just $1, the fees would be marginal. This isn\'t PayPal attempting to make more money from customers, it\'s more a case of the company trying to persuade customers to avoid sending smaller transactions.'
  },
  {
    question: 'How should I use the PayPal Fee Calculator?',
    answer: [
      'When you know how much you\'ll receive, enter the figure into the paypal fee calculator to determine the online transaction processing fee amount. Once you have inserted how much you want to receive, our paypal calculator will work out how much you should bill the client in order to be paid your rate and cover the PayPal processing fees.',
      'This will allow you to bill your client with the exact amount you wish to be paid after the fees are deducted. There\'s no need to do complicated calculations, so you can just enter in how much you want to be paid, and our paypal fee calculator will take care of the rest.'
    ]
  },
  {
    question: 'How do you calculate the "You should ask for" amount?',
    answer: [
      'We take your original invoice total and add in the PayPal processing fee (3.49% + $0.49 per transaction). If you choose for your client to cover the cost of this processing fee, this number reflects the total amount you should invoice. Once you have the "You should ask for" value, this is how much you will charge the client.',
      'You might notice that the value given out is slightly more than how much PayPal charges in the original instance. The reason for this, is that when you add the processing fees charged from the original calculation there will also be processing fees on the added extra. You will have to add on slightly more than just the processing fees from the original amount. Our calculator carries out the extra calculation needed to cover all processing fees, allowing you to charge your rate without any issues.'
    ]
  },
  {
    question: 'Do you have any other calculators I can use?',
    answer: 'Yes! An online paypal invoice calculator is an easy-to-use tool that helps freelancers get the information they need quickly. Check our Time Card Calculator, our Working Days Calendar Calculator, and our Stripe Fee Calculator. All of these will speed up your working day by removing unnecessary calculations and giving you instant answers. It\'s not just a case of giving you more time to carry out work, but our paypal calculator removes any margin of error. It means you don\'t have to worry about mistakes costing you money, so just use our calculators, so you can run your business efficiently. What\'s not to like? It makes it easy for you to carry out your work.'
  },
  {
    question: 'How do I calculate PayPal fees?',
    answer: 'Well, you could carry out your own calculations. However, this would require working out the formulas, enter all the data and make sure it\'s correct afterwards. Or you could use our PayPal fee calculator. This allows you to enter the amount you want to receive, and then it will instantly give you the amount you should charge. It\'s that simple.'
  },
  {
    question: 'How much is the PayPal fee for $100?',
    answer: 'The PayPal fee for $100 would be $3.20. You can work this out using our calculator. What\'s great about our calculator, is that if you enter in $100, it doesn\'t just tell you what the fees would be, but it also tells you that if you charged the client $103.30, then you would receive $100 for your final bill.'
  },
  {
    question: 'What types of PayPal fees are there?',
    answer: 'There are a few different fees you could be charged depending on the type of transaction:\n\nStandard domestic merchant fee: This is the fee you\'ll be charged when you receive payments from someone who lives in the same country as you.\n\nMerchant fees for international transactions: Because of how interconnected our world has become, we have the benefit of working with people living in different countries. Although long-distance transactions come with an extra charge. International payments will be charged a fee of 4.49% plus a fixed fee based on the currency.\n\nCurrency conversion fee: There\'s also an additional PayPal fee if you plan to exchange currencies. As currencies increase and decrease in value regularly, this rate changes often.\n\nHowever, when you use our calculator, you\'ll know how to adjust your rates to make up for any PayPal fee. Try it out now!'
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set(faqData.map((_, i) => i)));

  const toggleFAQ = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const isOpen = (index: number) => openItems.has(index);

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-24">
      <h2 className="text-5xl font-bold text-zinc-900 text-center mb-12">
        PayPal Fee Calculator FAQs
      </h2>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-zinc-200">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-start justify-between gap-4 py-6 text-left hover:opacity-70 transition-opacity"
            >
              <h3 className="text-xl font-bold text-zinc-900 flex-1">
                {faq.question}
              </h3>
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-0.5 bg-zinc-900 relative">
                  <div 
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-6 bg-zinc-900 transition-transform duration-300 ${
                      isOpen(index) ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                    }`}
                  ></div>
                </div>
              </div>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                isOpen(index) ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pb-6 pr-4">
                {Array.isArray(faq.answer) ? (
                  <div className="space-y-4">
                    {faq.answer.map((paragraph, i) => (
                      <p key={i} className="text-base text-zinc-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-base text-zinc-700 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
