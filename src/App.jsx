import Home from './components/Home'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="relative min-h-screen flex items-center justify-center p-8">
        <div className="max-w-5xl w-full">
          <Home />
        </div>
      </div>
    </div>
  )
}

export default App
