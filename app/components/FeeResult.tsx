interface FeeResultProps {
  label: string;
  value: number;
  currencySymbol: string;
  highlight?: boolean;
}

export default function FeeResult({ label, value, currencySymbol, highlight = false }: FeeResultProps) {
  return (
    <div className={`flex justify-between items-center py-4 px-5 rounded-2xl transition-all ${
      highlight 
        ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/30' 
        : 'bg-zinc-50'
    }`}>
      <span className={`text-sm font-medium ${
        highlight ? 'text-white/90' : 'text-zinc-600'
      }`}>
        {label}
      </span>
      <span className={`text-xl font-bold ${
        highlight ? 'text-white' : 'text-zinc-900'
      }`}>
        {currencySymbol}{value.toFixed(2)}
      </span>
    </div>
  );
}
