function Home() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Three-page utility site
        </h1>
        <p className="text-blue-200/80 leading-relaxed mb-6">
          Use the calculators to quickly estimate academic CGPA and plan loan installments.
        </p>
        <ul className="space-y-2 text-blue-200/90">
          <li>• CGPA calculator with per-semester GPA and credit weighting</li>
          <li>• Installment calculator with interest and amortization schedule</li>
        </ul>
      </div>
      <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-6">
        <img src="/flame-icon.svg" alt="Illustration" className="w-28 h-28 opacity-90" />
        <p className="mt-4 text-blue-200/70 text-sm">
          Navigate using the top menu.
        </p>
      </div>
    </div>
  )
}

export default Home
