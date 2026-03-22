import { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { AuthProvider } from './contexts/AuthContext'
import PublicLayout from './components/PublicLayout'
import ProtectedRoute from './components/ProtectedRoute'

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const Profile = lazy(() => import('./pages/Profile'))

const WhatIsPrompt = lazy(() => import('./pages/intro/WhatIsPrompt'))
const AiModels = lazy(() => import('./pages/intro/AiModels'))

const PromptStructure = lazy(() => import('./pages/learn/PromptStructure'))
const FewShot = lazy(() => import('./pages/learn/FewShot'))
const ChainOfThought = lazy(() => import('./pages/learn/ChainOfThought'))
const RoleSystem = lazy(() => import('./pages/learn/RoleSystem'))

const Writing = lazy(() => import('./pages/practice/Writing'))
const Coding = lazy(() => import('./pages/practice/Coding'))
const Analysis = lazy(() => import('./pages/practice/Analysis'))
const Translation = lazy(() => import('./pages/practice/Translation'))
const Business = lazy(() => import('./pages/practice/Business'))

const Playground = lazy(() => import('./pages/Playground'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

              <Route path="/intro/what-is-prompt" element={<WhatIsPrompt />} />
              <Route path="/intro/ai-models" element={<AiModels />} />

              <Route path="/learn/structure" element={<PromptStructure />} />
              <Route path="/learn/few-shot" element={<FewShot />} />
              <Route path="/learn/chain-of-thought" element={<ChainOfThought />} />
              <Route path="/learn/role-system" element={<RoleSystem />} />

              <Route path="/practice/writing" element={<Writing />} />
              <Route path="/practice/coding" element={<Coding />} />
              <Route path="/practice/analysis" element={<Analysis />} />
              <Route path="/practice/translation" element={<Translation />} />
              <Route path="/practice/business" element={<Business />} />

              <Route path="/playground" element={<Playground />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}
