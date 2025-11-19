import { useState } from 'react'

function CGPACalculator() {
  const [rows, setRows] = useState([
    { name: 'Sem 1', credits: 20, gpa: 8.5 },
  ])

  const addRow = () => setRows([...rows, { name: `Sem ${rows.length + 1}`, credits: 0, gpa: 0 }])
  const removeRow = (idx) => setRows(rows.filter((_, i) => i !== idx))
  const updateRow = (idx, key, value) => {
    const next = [...rows]
    next[idx][key] = value
    setRows(next)
  }

  const totals = rows.reduce(
    (acc, r) => {
      const c = Number(r.credits) || 0
      const g = Number(r.gpa) || 0
      acc.credits += c
      acc.points += c * g
      return acc
    },
    { credits: 0, points: 0 }
  )
  const cgpa = totals.credits ? (totals.points / totals.credits).toFixed(2) : '0.00'

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">CGPA Calculator</h2>
      <div className="bg-slate-800/50 border border-white/10 rounded-xl overflow-hidden">
        <div className="grid grid-cols-12 gap-3 p-4 text-sm font-medium text-blue-200/80 border-b border-white/10">
          <div className="col-span-4">Semester</div>
          <div className="col-span-4">Credits</div>
          <div className="col-span-3">GPA</div>
          <div className="col-span-1 text-right">-</div>
        </div>
        {rows.map((r, i) => (
          <div key={i} className="grid grid-cols-12 gap-3 p-4 border-b border-white/5">
            <input
              className="col-span-4 bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              value={r.name}
              onChange={(e) => updateRow(i, 'name', e.target.value)}
            />
            <input
              type="number"
              min="0"
              className="col-span-4 bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              value={r.credits}
              onChange={(e) => updateRow(i, 'credits', Number(e.target.value))}
            />
            <input
              type="number"
              min="0" max="10" step="0.01"
              className="col-span-3 bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              value={r.gpa}
              onChange={(e) => updateRow(i, 'gpa', Number(e.target.value))}
            />
            <div className="col-span-1 flex items-center justify-end">
              <button
                onClick={() => removeRow(i)}
                className="text-red-300 hover:text-red-200 text-sm"
                aria-label="Remove"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-4">
        <button onClick={addRow} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
          Add Semester
        </button>
        <div className="ml-auto text-right">
          <div className="text-blue-200/80 text-sm">Total Credits: {totals.credits}</div>
          <div className="text-xl font-semibold">CGPA: {cgpa}</div>
        </div>
      </div>
    </div>
  )
}

export default CGPACalculator
