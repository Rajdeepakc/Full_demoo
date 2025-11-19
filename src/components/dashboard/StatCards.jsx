import { Card } from '@/components/ui/card'

function StatCards() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {/* Card 1: Total Applications */}
      <Card className="rounded-2xl border-white/5 bg-slate-900/60 p-6 shadow-lg shadow-black/20">
        <p className="text-sm text-slate-400">Total Applications</p>
        <p className="mt-2 text-2xl font-semibold text-white">2</p>
      </Card>

      {/* Card 2: Total Tenants */}
      <Card className="rounded-2xl border-white/5 bg-slate-900/60 p-6 shadow-lg shadow-black/20">
        <p className="text-sm text-slate-400">Total Tenants</p>
        <p className="mt-2 text-2xl font-semibold text-white">4</p>
      </Card>

      {/* Card 3: Current Spend */}
      <Card className="rounded-2xl border-white/5 bg-slate-900/60 p-6 shadow-lg shadow-black/20">
        <p className="text-sm text-slate-400">Current Spend</p>
        <p className="mt-2 text-2xl font-semibold text-blue-500">$58.50</p>
      </Card>

      {/* Card 4: Active Deployments */}
      <Card className="rounded-2xl border-white/5 bg-slate-900/60 p-6 shadow-lg shadow-black/20">
        <p className="text-sm text-slate-400">Active Deployments</p>
        <p className="mt-2 text-2xl font-semibold text-white">2</p>
      </Card>
    </section>
  )
}

export default StatCards

