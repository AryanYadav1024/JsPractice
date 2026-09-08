import { useEffect, useState } from 'react'

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})

  useEffect(() => {
    if (!currency) return

    fetch(
      `https://api.frankfurter.dev/v2/rates?base=${currency.toUpperCase()}`
    )
      .then((res) => res.json())
      .then((res) => {
        const rates = {}

        res.forEach((item) => {
          rates[item.quote.toLowerCase()] = item.rate
        })

        setData(rates)
      })
      .catch((error) => {
        console.error('Currency API Error:', error)
        setData({})
      })
  }, [currency])

  return data
}

export default useCurrencyInfo