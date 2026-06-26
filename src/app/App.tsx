import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Dashboard from '../pages/Dashboard'
import PromptLibraryPage from '../pages/PromptLibraryPage'
import TrendingPromptsPage from '../pages/TrendingPromptsPage'
import ProjectBuilderPage from '../pages/ProjectBuilderPage'
import WorkflowGeneratorPage from '../pages/WorkflowGeneratorPage'
import ContextRecoveryPage from '../pages/ContextRecoveryPage'
import CategoriesPage from '../pages/CategoriesPage'
import CategoryDetailPage from '../pages/CategoryDetailPage'
import PromptDetailPage from '../pages/PromptDetailPage'
import SubmitPromptPage from '../pages/SubmitPromptPage'
import StacksPage from '../pages/StacksPage'
import StackDetailPage from '../pages/StackDetailPage'
import AssistantPage from '../pages/AssistantPage'
import ProfilePage from '../pages/ProfilePage'
import SavedPage from '../pages/SavedPage'
import LoopEnginePage from '../pages/LoopEnginePage'
import DistrictPage from '../pages/DistrictPage'
import AgentRegistryPage from '../pages/AgentRegistryPage'
import SkillsRegistryPage from '../pages/SkillsRegistryPage'
import PluginsMCPPage from '../pages/PluginsMCPPage'
import WorkflowRegistryPage from '../pages/WorkflowRegistryPage'
import PlaybooksPage from '../pages/PlaybooksPage'
import N8nCandidatesPage from '../pages/N8nCandidatesPage'
import LaunchAgentPage from '../pages/LaunchAgentPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/trending" element={<TrendingPromptsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/category/:categoryId" element={<CategoryDetailPage />} />
        <Route path="/prompt/:id" element={<PromptDetailPage />} />
        <Route path="/stacks" element={<StacksPage />} />
        <Route path="/stack/:id" element={<StackDetailPage />} />
        <Route path="/assistant" element={<AssistantPage />} />
        <Route path="/submit" element={<SubmitPromptPage />} />
        <Route path="/saved" element={<SavedPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
        <Route path="/prompts" element={<PromptLibraryPage />} />
        <Route path="/builder" element={<ProjectBuilderPage />} />
        <Route path="/workflows" element={<WorkflowRegistryPage />} />
        <Route path="/workflows/generator" element={<WorkflowGeneratorPage />} />
        <Route path="/context" element={<ContextRecoveryPage />} />
        <Route path="/loop" element={<LoopEnginePage />} />
        <Route path="/registry" element={<AgentRegistryPage />} />
        <Route path="/skills" element={<SkillsRegistryPage />} />
        <Route path="/plugins" element={<PluginsMCPPage />} />
        <Route path="/playbooks" element={<PlaybooksPage />} />
        <Route path="/n8n" element={<N8nCandidatesPage />} />
        <Route path="/launch-agent" element={<LaunchAgentPage />} />
      </Route>
    </Routes>
  )
}
