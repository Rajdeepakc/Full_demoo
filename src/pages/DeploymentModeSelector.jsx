import { useState } from 'react'
import AppSidebar from '@/components/layout/Sidebar.jsx'
import Topbar from '@/components/layout/Topbar.jsx'
import { Button } from '@/components/ui/button'
import { useNavigate, useLocation } from 'react-router-dom'

function DeploymentModeSelector() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [selected, setSelected] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const source = location.state?.source || 'source-selection'

  const modes = [
    { key: 'vm', title: 'VM (Simple)', desc: 'A single virtual machine architecture for basic deployments.' },
    { key: 'ha', title: 'HA OneCluster (Simple)', desc: 'High-availability single-cluster mode for improved reliability.' },
    { key: 'saas1', title: 'SaaS OneCluster', desc: 'Single-tenant SaaS deployment model for dedicated instances.' },
    { key: 'saas2', title: 'SaaS Multi-Cluster', desc: 'Multi-tenant, multi-cluster SaaS architecture for scalability.' },
  ]

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <AppSidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <main className="flex flex-1 flex-col gap-2 bg-slate-950 p-4 sm:p-6">
        <Topbar onOpenSidebar={() => setMobileOpen(true)} hideSearch={true} />

        <div className="mt-6 max-w-6xl w-full mx-auto">
          <nav className="text-sm text-slate-400 mb-4">Applications / New Deployment / Source Selection / Deployment Mode</nav>
          <h1 className="text-3xl font-extrabold">Deployment Mode Selector</h1>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {modes.map((m) => (
              <button
                key={m.key}
                type="button"
                onClick={() => setSelected(m.key)}
                aria-pressed={selected === m.key}
                className={`text-left rounded-lg border p-6 transition-colors hover:shadow-lg focus:outline-none ${
                  selected === m.key
                    ? 'border-blue-500 bg-slate-800 shadow-[0_8px_24px_rgba(59,130,246,0.08)]'
                    : 'border-white/5 bg-slate-900/60'
                }`}
              >
                <h3 className="text-lg font-semibold">{m.title}</h3>
                <p className="text-sm text-slate-400 mt-2">{m.desc}</p>
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-white/5 bg-slate-900/60 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-300">i</div>
              <div>
                <p className="text-sm font-semibold text-slate-200">Comparing Deployment Modes</p>
                <p className="text-sm text-slate-400 mt-2">The 'Simple' modes (VM, HA OneCluster) are ideal for development, testing, or single-instance applications. The 'SaaS' modes are designed for scalable, multi-tenant services, offering greater complexity and control for production environments.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <Button
              onClick={() => navigate('/applications/deployment-config', { state: { mode: selected, source } })}
              disabled={!selected}
              className="ml-2"
            >
              Continue
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DeploymentModeSelector
