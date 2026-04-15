import { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { AuthProvider } from './contexts/AuthContext'
import PublicLayout from './components/PublicLayout'
import ProtectedRoute from './components/ProtectedRoute'

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const Profile = lazy(() => import('./pages/Profile'))

const WhatIsPrompt = lazy(() => import('./pages/intro/WhatIsPrompt'))
const AiModels = lazy(() => import('./pages/intro/AiModels'))
const IntroChatGPT = lazy(() => import('./pages/intro/ChatGPT'))
const IntroClaude = lazy(() => import('./pages/intro/Claude'))
const IntroGemini = lazy(() => import('./pages/intro/Gemini'))

const PromptStructure = lazy(() => import('./pages/learn/PromptStructure'))
const FewShot = lazy(() => import('./pages/learn/FewShot'))
const ChainOfThought = lazy(() => import('./pages/learn/ChainOfThought'))
const RoleSystem = lazy(() => import('./pages/learn/RoleSystem'))

const Writing = lazy(() => import('./pages/practice/Writing'))
const Coding = lazy(() => import('./pages/practice/Coding'))
const Analysis = lazy(() => import('./pages/practice/Analysis'))
const Translation = lazy(() => import('./pages/practice/Translation'))
const Business = lazy(() => import('./pages/practice/Business'))

const AiTipsHome = lazy(() => import('./pages/ai-tips/AiTipsHome'))
const AiTipsChatGPT = lazy(() => import('./pages/ai-tips/AiTipsChatGPT'))
const AiTipsClaude = lazy(() => import('./pages/ai-tips/AiTipsClaude'))
const AiTipsGemini = lazy(() => import('./pages/ai-tips/AiTipsGemini'))
const AiTipsCopilot = lazy(() => import('./pages/ai-tips/AiTipsCopilot'))
const AiTipsPrompt = lazy(() => import('./pages/ai-tips/AiTipsPrompt'))
const AiTipsCoding = lazy(() => import('./pages/ai-tips/AiTipsCoding'))
const AiTipsWriting = lazy(() => import('./pages/ai-tips/AiTipsWriting'))
const AiTipsLearning = lazy(() => import('./pages/ai-tips/AiTipsLearning'))

const Playground = lazy(() => import('./pages/Playground'))

const LecturesHome = lazy(() => import('./pages/lectures/LecturesHome'))
const LectureWriteForm = lazy(() => import('./pages/lectures/LectureWrite'))
const LectureDetailView = lazy(() => import('./pages/lectures/LectureDetail'))
const LectureWhatIsPrompt = lazy(() => import('./pages/lectures/LectureWhatIsPrompt'))
const LectureAiModels = lazy(() => import('./pages/lectures/LectureAiModels'))
const LectureStructure = lazy(() => import('./pages/lectures/LectureStructure'))
const LectureFewShot = lazy(() => import('./pages/lectures/LectureFewShot'))
const LectureChainOfThought = lazy(() => import('./pages/lectures/LectureChainOfThought'))
const LectureRoleSystem = lazy(() => import('./pages/lectures/LectureRoleSystem'))
const LectureWriting = lazy(() => import('./pages/lectures/LectureWriting'))
const LectureCoding = lazy(() => import('./pages/lectures/LectureCoding'))
const LectureAnalysis = lazy(() => import('./pages/lectures/LectureAnalysis'))
const LectureTranslation = lazy(() => import('./pages/lectures/LectureTranslation'))
const LectureBusiness = lazy(() => import('./pages/lectures/LectureBusiness'))


const References = lazy(() => import('./pages/References'))
const Favorites = lazy(() => import('./pages/Favorites'))

const CommunityList = lazy(() => import('./pages/community/CommunityList'))
const CommunityWrite = lazy(() => import('./pages/community/CommunityWrite'))
const CommunityView = lazy(() => import('./pages/community/CommunityView'))

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
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

              <Route path="/intro/what-is-prompt" element={<WhatIsPrompt />} />
              <Route path="/intro/ai-models" element={<AiModels />} />
              <Route path="/intro/chatgpt" element={<IntroChatGPT />} />
              <Route path="/intro/claude" element={<IntroClaude />} />
              <Route path="/intro/gemini" element={<IntroGemini />} />

              <Route path="/learn/structure" element={<PromptStructure />} />
              <Route path="/learn/few-shot" element={<FewShot />} />
              <Route path="/learn/chain-of-thought" element={<ChainOfThought />} />
              <Route path="/learn/role-system" element={<RoleSystem />} />

              <Route path="/practice/writing" element={<Writing />} />
              <Route path="/practice/coding" element={<Coding />} />
              <Route path="/practice/analysis" element={<Analysis />} />
              <Route path="/practice/translation" element={<Translation />} />
              <Route path="/practice/business" element={<Business />} />

              <Route path="/ai-tips" element={<AiTipsHome />} />
              <Route path="/ai-tips/chatgpt" element={<AiTipsChatGPT />} />
              <Route path="/ai-tips/claude" element={<AiTipsClaude />} />
              <Route path="/ai-tips/gemini" element={<AiTipsGemini />} />
              <Route path="/ai-tips/copilot" element={<AiTipsCopilot />} />
              <Route path="/ai-tips/prompt" element={<AiTipsPrompt />} />
              <Route path="/ai-tips/coding" element={<AiTipsCoding />} />
              <Route path="/ai-tips/writing" element={<AiTipsWriting />} />
              <Route path="/ai-tips/learning" element={<AiTipsLearning />} />

              <Route path="/playground" element={<Playground />} />

              <Route path="/lectures" element={<LecturesHome />} />
              <Route path="/lectures/write" element={<ProtectedRoute><LectureWriteForm /></ProtectedRoute>} />
              <Route path="/lectures/edit/:id" element={<ProtectedRoute><LectureWriteForm /></ProtectedRoute>} />
              <Route path="/lectures/view/:id" element={<LectureDetailView />} />
              <Route path="/lectures/what-is-prompt" element={<LectureWhatIsPrompt />} />
              <Route path="/lectures/ai-models" element={<LectureAiModels />} />
              <Route path="/lectures/structure" element={<LectureStructure />} />
              <Route path="/lectures/few-shot" element={<LectureFewShot />} />
              <Route path="/lectures/chain-of-thought" element={<LectureChainOfThought />} />
              <Route path="/lectures/role-system" element={<LectureRoleSystem />} />
              <Route path="/lectures/writing" element={<LectureWriting />} />
              <Route path="/lectures/coding" element={<LectureCoding />} />
              <Route path="/lectures/analysis" element={<LectureAnalysis />} />
              <Route path="/lectures/translation" element={<LectureTranslation />} />
              <Route path="/lectures/business" element={<LectureBusiness />} />

              <Route path="/references" element={<References />} />
              <Route path="/favorites" element={<Favorites />} />

              <Route path="/community" element={<CommunityList />} />
              <Route path="/community/write" element={<ProtectedRoute><CommunityWrite /></ProtectedRoute>} />
              <Route path="/community/:id" element={<CommunityView />} />

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}
