import { useId } from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd',
  amountDisable = false,
  className = '',
}) {
  const amountInputId = useId()

  return (
    <div
      className={`bg-white rounded-xl p-4 text-sm flex items-center gap-4 shadow-sm ${className}`}
    >
      {/* Amount */}
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-gray-500 mb-2 inline-block font-medium"
        >
          {label}
        </label>

        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-2 text-lg font-semibold text-gray-800 placeholder-gray-400"
          type="number"
          placeholder="Enter amount"
          value={amount}
          disabled={amountDisable}
          onChange={(e) =>
            onAmountChange &&
            onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* Currency */}
      <div className="w-1/2">
        <p className="text-gray-500 mb-2 font-medium">
          Currency
        </p>

        <select
          className="w-full rounded-lg px-3 py-2.5 bg-gray-100 border border-gray-300 text-gray-800 font-semibold cursor-pointer outline-none focus:ring-2 focus:ring-blue-500"
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyChange &&
            onCurrencyChange(e.target.value)
          }
        >
          {currencyOptions.map((currency) => (
            <option
              value={currency}
              key={currency}
            >
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox