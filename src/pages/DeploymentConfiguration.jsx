import { useState } from 'react'
import AppSidebar from '@/components/layout/Sidebar.jsx'
import Topbar from '@/components/layout/Topbar.jsx'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Cloud, Layers, LockKeyholeOpen, CheckCircle, MapPin } from 'lucide-react'

function DeploymentConfiguration() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const modeKey = location.state?.mode || 'vm'
  const modeTitles = {
    vm: 'VM (Simple)',
    ha: 'HA OneCluster (Simple)',
    saas1: 'SaaS OneCluster',
    saas2: 'SaaS Multi-Cluster',
  }
  const selectedModeTitle = modeTitles[modeKey] || 'VM (Simple)'

  // Prefill values based on mode
  const defaults = {
    vm: { instanceSize: 'Standard - 2 vCPU, 4GB RAM', instances: 1, region: 'GCP - us-central1 (Iowa)', cost: 24.5 },
    ha: { instanceSize: 'Standard - 4 vCPU, 8GB RAM', instances: 3, region: 'GCP - us-central1 (Iowa)', cost: 74.5 },
    saas1: { instanceSize: 'Small - 2 vCPU, 4GB RAM', instances: 2, region: 'GCP - us-central1 (Iowa)', cost: 48.0 },
    saas2: { instanceSize: 'Medium - 4 vCPU, 8GB RAM', instances: 4, region: 'GCP - us-central1 (Iowa)', cost: 120.0 },
  }

  const initial = defaults[modeKey] || defaults.vm
  const [instanceSize, setInstanceSize] = useState(initial.instanceSize)
  const [instances, setInstances] = useState(initial.instances)
  const [region, setRegion] = useState(initial.region)

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <AppSidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <main className="flex flex-1 flex-col gap-2 bg-slate-950 p-4 sm:p-6">
        <Topbar onOpenSidebar={() => setMobileOpen(true)} hideSearch={true} />

        <div className="mt-6 max-w-7xl w-full mx-auto">
          <div className="text-center">
            <nav className="text-sm text-slate-400 mb-4">Applications / New Deployment / Source Selection / Deployment Mode / Deployment Configuration</nav>
            <h1 className="text-4xl md:text-5xl font-extrabold">Deployment Configuration</h1>
            <p className="mt-3 text-slate-400 max-w-2xl mx-auto">Define all runtime parameters before final deployment.</p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr,360px] items-start">
            <Card className="rounded-3xl border border-white/5 bg-slate-900/80 p-8 shadow-2xl shadow-black/40 relative">
              <h3 className="text-lg font-semibold text-white mb-4">Compute & Region</h3>

              <div className="grid gap-4 relative">
                <div className="absolute left-8 top-28 bottom-8 w-px bg-white/6" />
                <div className="absolute left-8 top-28 bottom-8 w-px bg-white/6" />

                {/* Step: Compute (cloud icon) */}
                <div className="flex items-start gap-6">
                  <div className="z-10 -ml-2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-blue-400 border border-white/5">
                    <Cloud className="h-6 w-6" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-300">Compute & Region</div>
                      <div className="text-xs text-slate-500">Step 1</div>
                    </div>

                    <div className="text-sm font-medium text-white">{selectedModeTitle}</div>

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-slate-300">Instance Size</label>
                        <select value={instanceSize} onChange={(e) => setInstanceSize(e.target.value)} className="w-full rounded-lg border border-white/5 bg-slate-900/60 px-4 py-3 text-slate-200 outline-none shadow-inner text-sm">
                          <option>Standard - 2 vCPU, 4GB RAM</option>
                          <option>Standard - 4 vCPU, 8GB RAM</option>
                          <option>Small - 2 vCPU, 4GB RAM</option>
                          <option>Medium - 4 vCPU, 8GB RAM</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-sm text-slate-300">Number of Instances</label>
                        <input type="number" min={1} value={instances} onChange={(e) => setInstances(Number(e.target.value))} className="w-full rounded-lg border border-white/5 bg-slate-900/80 px-3 py-2 text-slate-200 outline-none text-right" />
                      </div>
                    </div>

                    <div className="mt-4 sm:col-span-2">
                      <label className="text-sm text-slate-300">Cloud Region</label>
                      <select value={region} onChange={(e) => setRegion(e.target.value)} className="w-full rounded-lg border border-white/5 bg-slate-900/60 px-4 py-3 text-slate-200 outline-none text-sm">
                        <option>GCP - us-central1 (Iowa)</option>
                        <option>AWS - us-east-1 (N. Virginia)</option>
                        <option>AWS - us-west-2 (Oregon)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Step: Networking & Storage (workflow icon) */}
                <div className="flex items-start gap-6 mt-6 text-left">
                  <div className="z-10 -ml-2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-slate-300 border border-white/5">
                    <Layers className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-white">Networking & Storage</div>
                    <div className="text-sm text-slate-400">Step 2</div>
                  </div>
                </div>

                {/* Step: Environment Variables / Secrets (fridge icon) */}
                <div className="flex items-start gap-6 mt-6 text-left">
                  <div className="z-10 -ml-2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-slate-300 border border-white/5">
                    <LockKeyholeOpen className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-white">Environment Variables / Secrets</div>
                    <div className="text-sm text-slate-400">Step 3</div>
                  </div>
                </div>

                {/* Step: Review Summary (timer reset icon) */}
                <div className="flex items-start gap-6 mt-6 text-left">
                  <div className="z-10 -ml-2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-slate-300 border border-white/5">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-white">Review Summary</div>
                    <div className="text-sm text-slate-400">Step 4</div>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <Button variant="outline" onClick={() => navigate(-1)} className="bg-slate-800">Back</Button>
                  <Button onClick={() => alert('Deploying...')} className="bg-blue-500">Deploy Application</Button>
                </div>
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="rounded-2xl border border-white/5 bg-slate-900/60 p-6 text-center">
                <p className="text-sm text-slate-400">Estimated Monthly Cost</p>
                <p className="mt-3 text-4xl font-extrabold text-white">$480.00 <span className="text-lg text-slate-400">/ month</span></p>
                <p className="text-xs text-slate-400 mt-2">Updates based on your configuration</p>
              </Card>

              <Card className="rounded-2xl border border-white/5 bg-slate-900/60 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Deployment Region</p>
                    <div className="mt-2 text-sm font-medium text-white">{region}</div>
                  </div>
                  <div className="text-slate-400">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>

                <div className="mt-3 h-36 overflow-hidden rounded-md bg-white/5">
                  <img src="https://plus.unsplash.com/premium_photo-1713389761395-2f372030437f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="region" className="h-full w-full object-cover" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DeploymentConfiguration
