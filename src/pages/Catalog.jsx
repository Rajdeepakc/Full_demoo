import { useState } from 'react'
import AppSidebar from '@/components/layout/Sidebar.jsx'
import Topbar from '@/components/layout/Topbar.jsx'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

function Catalog() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <AppSidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <main className="flex flex-1 flex-col gap-2 bg-slate-950 p-4 sm:p-6">
        <Topbar onOpenSidebar={() => setMobileOpen(true)} />

        <div className="mt-6 max-w-6xl w-full mx-auto">
          <nav className="text-sm text-slate-400 mb-4">Applications / New Deployment / Catalog</nav>
          <h1 className="text-3xl font-extrabold">Open-Source App Catalog (placeholder)</h1>
          <p className="mt-4 text-slate-400">This catalog page is a placeholder. You can add catalog cards and browse actions here.</p>

          <div className="mt-6 flex justify-end">
            <Button onClick={() => navigate('/applications/deployment-mode', { state: { source: 'catalog' } })} className="bg-blue-500">
              Continue
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Catalog
