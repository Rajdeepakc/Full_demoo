import AppSidebar from '@/components/layout/Sidebar.jsx'
import Topbar from '@/components/layout/Topbar.jsx'

function Catalog() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <AppSidebar />

      <main className="flex flex-1 flex-col gap-2 bg-slate-950 p-6">
        <Topbar />

        <div className="mt-6">
          <nav className="text-sm text-slate-400 mb-4">Applications / New Deployment / Catalog</nav>
          <h1 className="text-3xl font-extrabold">Open-Source App Catalog (placeholder)</h1>
          <p className="mt-4 text-slate-400">This catalog page is a placeholder. You can add catalog cards and browse actions here.</p>
        </div>
      </main>
    </div>
  )
}

export default Catalog
