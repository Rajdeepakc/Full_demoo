import AppSidebar from '@/components/layout/Sidebar.jsx'
import Topbar from '@/components/layout/Topbar.jsx'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useNavigate } from 'react-router-dom'

function Applications() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <AppSidebar />

      <main className="flex flex-1 flex-col gap-2 bg-slate-950 p-6">
        <Topbar />

        <div className="mt-6">
          <nav className="text-sm text-slate-400 mb-4">Applications / New Deployment / Select Application</nav>
          <h1 className="text-3xl font-extrabold">Select Application Source</h1>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Card className="p-6 rounded-2xl border border-white/5 bg-slate-900/60">
              <h3 className="text-lg font-semibold">Open-Source App Catalog</h3>
              <p className="text-sm text-slate-400 mt-2">Choose from a curated library of pre-configured and verified application templates for quick deployment.</p>
              <div className="mt-4">
                <Button onClick={() => navigate('/applications/catalog')} className="bg-transparent border border-blue-600 text-blue-400">Browse Catalog</Button>
              </div>
            </Card>

            <Card className="p-6 rounded-2xl border border-white/5 bg-slate-900/60">
              <h3 className="text-lg font-semibold">Bring Your Own App</h3>
              <p className="text-sm text-slate-400 mt-2">Deploy a custom application using a Docker image or from a Git repository.</p>
              <div className="mt-4">
                <Button onClick={() => navigate('/applications/bring-your-own')} className="bg-transparent border border-blue-600 text-blue-400">Start Custom Deployment</Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Applications
