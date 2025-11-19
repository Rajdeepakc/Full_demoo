import AppSidebar from '@/components/layout/Sidebar.jsx'
import Topbar from '@/components/layout/Topbar.jsx'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

function DeploymentModeSelector() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <AppSidebar />

      <main className="flex flex-1 flex-col gap-2 bg-slate-950 p-6">
        <Topbar />

        <div className="mt-6">
          <nav className="text-sm text-slate-400 mb-4">Applications / New Deployment / Deployment Mode</nav>
          <h1 className="text-3xl font-extrabold">Deployment Mode Selector</h1>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-white/5 bg-slate-900/60 p-6">VM (Simple)</div>
            <div className="rounded-lg border border-white/5 bg-slate-900/60 p-6">HA OneCluster (Simple)</div>
            <div className="rounded-lg border border-white/5 bg-slate-900/60 p-6">SaaS OneCluster</div>
            <div className="rounded-lg border border-white/5 bg-slate-900/60 p-6">SaaS Multi-Cluster</div>
          </div>

          <div className="mt-6 flex justify-end">
            <Button onClick={() => navigate('/applications/deployment-config')}>Continue</Button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DeploymentModeSelector
