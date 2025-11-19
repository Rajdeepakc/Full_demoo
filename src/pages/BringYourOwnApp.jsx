import { useState } from 'react'
import AppSidebar from '@/components/layout/Sidebar.jsx'
import Topbar from '@/components/layout/Topbar.jsx'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Switch from '@/components/ui/switch'
import { ArrowRight } from 'lucide-react'

function BringYourOwnApp() {
  const [sourceType, setSourceType] = useState('docker')
  const [dockerUrl, setDockerUrl] = useState('')
  const [username, setUsername] = useState('')
  const [token, setToken] = useState('')
  const [privateRepo, setPrivateRepo] = useState(false)
  const [provider, setProvider] = useState('')

  return (
    <div className="flex h-screen bg-slate-950 text-white overflow-hidden">
      <AppSidebar />

      <main className="flex flex-1 flex-col gap-3 bg-slate-950 pt-1 px-6 pb-4">
        <Topbar />

        <div className="w-full max-w-4xl ml-6 mt-2">
          <div className="mb-4">
            <nav className="text-sm text-slate-400"> 
              <span className="font-medium text-slate-400">Applications</span>
              <span className="mx-2">/</span>
              <span className="text-slate-400">New Deployment</span>
              <span className="mx-2">/</span>
              <span className="text-slate-200 font-semibold">Bring Your Own App</span>
            </nav>
            <h1 className="text-4xl font-extrabold leading-tight mt-0">Bring Your Own App</h1>
          </div>

          <div className="space-y-4 mt-4">
            <Card className="rounded-2xl border border-white/5 bg-slate-900/60">
              <CardContent>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-slate-300">Source Type</h3>
                </div>

                <div className="mt-4">
                  <div className="rounded-md bg-slate-800/60 p-1">
                    <div className="relative rounded-md bg-slate-900/40 p-1 flex w-full">
                      <button
                        onClick={() => setSourceType('docker')}
                        className={`flex-1 text-sm rounded-md px-4 py-2 ${sourceType === 'docker' ? 'bg-slate-700 text-white' : 'text-slate-400'}`}>
                        Docker Image
                      </button>
                      <button
                        onClick={() => setSourceType('github')}
                        className={`flex-1 text-sm rounded-md px-4 py-2 ${sourceType === 'github' ? 'bg-slate-700 text-white' : 'text-slate-400'}`}>
                        GitHub/Git Repository
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-white/5 bg-slate-900/60">
              <CardContent>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-slate-300">Source</h3>
                </div>

                <div className="mt-4">
                    <div className="text-xs text-slate-400 mb-2">{sourceType === 'docker' ? 'Docker Image URL' : 'Repository URL'}</div>
                  <input
                    type="text"
                    placeholder={sourceType === 'docker' ? 'e.g., registry.hub.docker.com/my-app:v1.0' : 'e.g., https://github.com/owner/repo'}
                    value={dockerUrl}
                    onChange={(e) => setDockerUrl(e.target.value)}
                    className="w-full rounded-md border border-white/5 bg-slate-900/60 px-3 py-2 text-slate-200 placeholder:text-slate-500 outline-none"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-white/5 bg-slate-900/60">
              <CardContent>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-slate-300">Credentials</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-slate-400">Private Repository</span>
                    <Switch checked={privateRepo} onChange={setPrivateRepo} />
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <div className="text-xs text-slate-400 mb-2">Registry Username</div>
                    <input
                      type="text"
                      placeholder="your-username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      disabled={!privateRepo}
                      aria-disabled={!privateRepo}
                      className={`w-full rounded-md border border-white/5 px-3 py-2 placeholder:text-slate-500 outline-none ${privateRepo ? 'bg-slate-900/60 text-slate-200' : 'bg-slate-900/40 text-slate-500'}`}
                    />
                  </div>

                  <div>
                    <div className="text-xs text-slate-400 mb-2">Access Token</div>
                    <input
                      type="password"
                      placeholder={privateRepo ? '••••••••••••••' : '••••••••••••••'}
                      value={token}
                      onChange={(e) => setToken(e.target.value)}
                      disabled={!privateRepo}
                      aria-disabled={!privateRepo}
                      className={`w-full rounded-md border border-white/5 px-3 py-2 placeholder:text-slate-500 outline-none ${privateRepo ? 'bg-slate-900/60 text-slate-200' : 'bg-slate-900/40 text-slate-500'}`}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-white/5 bg-slate-900/60">
              <CardContent>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-slate-300">Provider</h3>
                </div>

                <div className="mt-3">
                  <div className="text-xs text-slate-400 mb-2">Cloud Provider</div>
                  <select
                    value={provider}
                    onChange={(e) => setProvider(e.target.value)}
                    className="w-full rounded-md border border-white/5 bg-slate-900/60 px-3 py-2 text-slate-200 outline-none"
                  >
                    <option value="">Select a provider</option>
                    <option value="abc">abc</option>
                    <option value="cde">cde</option>
                    <option value="efg">efg</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button variant="default" className="bg-blue-500 inline-flex items-center gap-2 mt-2 px-4 py-2">
                <span>Next</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default BringYourOwnApp
