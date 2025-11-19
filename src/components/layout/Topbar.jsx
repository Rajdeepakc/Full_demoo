import { Bell, Search, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

function Topbar() {
  const navigate = useNavigate()

  return (
    <header className="px-6 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-1 max-w-[900px]">
          <div className="flex items-center gap-3 rounded-lg bg-slate-800 px-3 py-2 w-full">
            <Search className="h-4 w-4 text-slate-500" />
            <input
              className="flex-1 bg-transparent text-sm text-slate-200 outline-none placeholder:text-slate-500"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="ml-4 flex items-center gap-2">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-slate-800 text-slate-200 transition-colors hover:bg-white/5"
          >
            <Bell className="h-4 w-4" />
          </button>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-slate-200"
          >
            <User className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between">
        <h1 className="text-3xl font-extrabold text-white">Dashboard</h1>

        <Button onClick={() => navigate('/applications')} className="ml-4 h-10 rounded-md bg-blue-500 px-4 text-white hover:bg-blue-500/90">
          Deploy New Application
        </Button>
      </div>
    </header>
  )
}

export default Topbar
