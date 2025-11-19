import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import BringYourOwnApp from './pages/BringYourOwnApp.jsx'
import Applications from './pages/Applications.jsx'
import Catalog from './pages/Catalog.jsx'
import DeploymentModeSelector from './pages/DeploymentModeSelector.jsx'
import DeploymentConfiguration from './pages/DeploymentConfiguration.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        {/* Applications flow */}
        <Route path="/applications" element={<Applications />} />
        <Route path="/applications/select" element={<Applications />} />
        <Route path="/applications/catalog" element={<Catalog />} />
        <Route path="/applications/bring-your-own" element={<BringYourOwnApp />} />
        <Route path="/applications/deployment-mode" element={<DeploymentModeSelector />} />
        <Route path="/applications/deployment-config" element={<DeploymentConfiguration />} />

        {/* Backwards-compatible route */}
        <Route path="/bring-your-own-app" element={<BringYourOwnApp />} />

        {/* Fallback placeholder routes for other sidebar items */}
        <Route path="/tenants" element={<Dashboard />} />
        <Route path="/finops" element={<Dashboard />} />
        <Route path="/settings" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
