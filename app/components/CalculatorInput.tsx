interface CalculatorInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function CalculatorInput({
  label,
  value,
  onChange,
  placeholder = "0.00"
}: CalculatorInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-bold text-zinc-600 uppercase tracking-wide">
        {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2 text-base border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
        step="0.01"
        min="0"
      />
    </div>
  );
}
