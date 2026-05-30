import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Dashboard from '../pages/Dashboard'
import PromptLibraryPage from '../pages/PromptLibraryPage'
import TrendingPromptsPage from '../pages/TrendingPromptsPage'
import ProjectBuilderPage from '../pages/ProjectBuilderPage'
import WorkflowGeneratorPage from '../pages/WorkflowGeneratorPage'
import ContextRecoveryPage from '../pages/ContextRecoveryPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/prompts" element={<PromptLibraryPage />} />
        <Route path="/trending" element={<TrendingPromptsPage />} />
        <Route path="/builder" element={<ProjectBuilderPage />} />
        <Route path="/workflows" element={<WorkflowGeneratorPage />} />
        <Route path="/context" element={<ContextRecoveryPage />} />
      </Route>
    </Routes>
  )
}
