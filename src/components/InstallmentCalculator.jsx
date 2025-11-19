import { useMemo, useState } from 'react'

function pmt(rate, nper, pv) {
  if (rate === 0) return -(pv / nper)
  const r = rate
  return -(pv * r) / (1 - Math.pow(1 + r, -nper))
}

function InstallmentCalculator() {
  const [principal, setPrincipal] = useState(100000)
  const [annualRate, setAnnualRate] = useState(10)
  const [months, setMonths] = useState(24)

  const monthlyRate = useMemo(() => (annualRate / 100) / 12, [annualRate])
  const emi = useMemo(() => Math.abs(pmt(monthlyRate, months, principal)), [monthlyRate, months, principal])

  const schedule = useMemo(() => {
    let bal = principal
    const rows = []
    for (let i = 1; i <= months; i++) {
      const interest = bal * monthlyRate
      const principalPaid = emi - interest
      bal = Math.max(0, bal - principalPaid)
      rows.push({ i, interest, principalPaid, bal })
    }
    return rows
  }, [principal, monthlyRate, months, emi])

  const totalInterest = schedule.reduce((a, r) => a + r.interest, 0)
  const totalPayment = emi * months

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Installment Calculator</h2>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-800/50 border border-white/10 rounded-xl p-4">
          <label className="block text-sm text-blue-200/80 mb-1">Principal</label>
          <input type="number" className="w-full bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2" value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))} />
        </div>
        <div className="bg-slate-800/50 border border-white/10 rounded-xl p-4">
          <label className="block text-sm text-blue-200/80 mb-1">Annual Interest %</label>
          <input type="number" step="0.01" className="w-full bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2" value={annualRate}
            onChange={(e) => setAnnualRate(Number(e.target.value))} />
        </div>
        <div className="bg-slate-800/50 border border-white/10 rounded-xl p-4">
          <label className="block text-sm text-blue-200/80 mb-1">Months</label>
          <input type="number" className="w-full bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2" value={months}
            onChange={(e) => setMonths(Number(e.target.value))} />
        </div>
      </div>

      <div className="bg-slate-800/50 border border-white/10 rounded-xl p-4 mb-6 grid md:grid-cols-3 gap-4">
        <div>
          <div className="text-blue-200/80 text-sm">Monthly EMI</div>
          <div className="text-xl font-semibold">₹ {emi.toFixed(2)}</div>
        </div>
        <div>
          <div className="text-blue-200/80 text-sm">Total Interest</div>
          <div className="text-xl font-semibold">₹ {totalInterest.toFixed(2)}</div>
        </div>
        <div>
          <div className="text-blue-200/80 text-sm">Total Payment</div>
          <div className="text-xl font-semibold">₹ {totalPayment.toFixed(2)}</div>
        </div>
      </div>

      <div className="overflow-auto bg-slate-800/40 border border-white/10 rounded-xl">
        <table className="min-w-full text-sm">
          <thead className="bg-white/5">
            <tr>
              <th className="text-left px-3 py-2 font-medium">Month</th>
              <th className="text-right px-3 py-2 font-medium">Interest</th>
              <th className="text-right px-3 py-2 font-medium">Principal</th>
              <th className="text-right px-3 py-2 font-medium">Balance</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((r) => (
              <tr key={r.i} className="border-t border-white/5">
                <td className="px-3 py-2">{r.i}</td>
                <td className="px-3 py-2 text-right">₹ {r.interest.toFixed(2)}</td>
                <td className="px-3 py-2 text-right">₹ {r.principalPaid.toFixed(2)}</td>
                <td className="px-3 py-2 text-right">₹ {r.bal.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default InstallmentCalculator
