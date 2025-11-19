import AppSidebar from '../components/layout/Sidebar.jsx'
import Topbar from '../components/layout/Topbar.jsx'
import StatCards from '../components/dashboard/StatCards.jsx'
import TrendCard from '../components/dashboard/TrendCard.jsx'
import DeploymentsTable from '../components/dashboard/DeploymentsTable.jsx'

// Inline deployments data (moved from src/data/mockDeployments.js)
const deployments = [
  { appName: 'Billing API', status: 'Active', cluster: 'us-east-1', updated: '2m ago' },
  { appName: 'Auth Service', status: 'Active', cluster: 'us-west-2', updated: '1h ago' },
  { appName: 'Legacy CRM', status: 'Stopped', cluster: 'eu-central-1', updated: '5h ago' },
  { appName: 'Data Pipeline', status: 'Active', cluster: 'us-east-1', updated: '1d ago' },
  { appName: 'Reporting Engine', status: 'Active', cluster: 'us-west-2', updated: '2d ago' },
]


function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white dark ">
      <AppSidebar />

      <main className="flex flex-1 flex-col gap-2 bg-slate-950 p-6">
        <Topbar />

        <StatCards />

        <section className="grid gap-3 lg:grid-cols-[2fr_1.2fr]">
          <TrendCard />
          <DeploymentsTable rows={deployments} />
        </section>
      </main>
    </div>
  )
}

export default Dashboard

