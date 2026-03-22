const site = {
  name: 'AI Prompt',
  nameKo: '프롬프트 엔지니어링 학습',
  description: 'ChatGPT, Claude 등 AI 모델에서 원하는 결과를 이끌어내는 프롬프트 작성 기법을 학습합니다.',
  url: 'https://ai-prompt.dreamitbiz.com',
  brand: {
    parts: [
      { text: 'AI', className: 'brand-ai' },
      { text: ' Prompt', className: 'brand-prompt' }
    ]
  },
  themeColor: '#7C3AED',
  colorThemes: [
    { name: 'purple', color: '#7C3AED', label: 'Purple' },
    { name: 'blue', color: '#0046C8', label: 'Blue' },
    { name: 'green', color: '#059669', label: 'Green' },
    { name: 'rose', color: '#E11D48', label: 'Rose' },
    { name: 'orange', color: '#EA580C', label: 'Orange' }
  ],
  menuItems: [
    {
      label: 'PE 개론',
      children: [
        { label: '프롬프트 엔지니어링이란?', path: '/intro/what-is-prompt' },
        { label: 'AI 모델 이해하기', path: '/intro/ai-models' },
        { label: 'ChatGPT (OpenAI)', path: '/intro/chatgpt' },
        { label: 'Claude (Anthropic)', path: '/intro/claude' },
        { label: 'Gemini (Google)', path: '/intro/gemini' }
      ]
    },
    {
      label: '학습하기',
      children: [
        { label: '프롬프트 구조와 패턴', path: '/learn/structure' },
        { label: 'Few-shot 기법', path: '/learn/few-shot' },
        { label: 'Chain-of-Thought', path: '/learn/chain-of-thought' },
        { label: '역할 부여와 시스템 프롬프트', path: '/learn/role-system' }
      ]
    },
    {
      label: '실전 활용',
      children: [
        { label: '글쓰기', path: '/practice/writing' },
        { label: '코딩', path: '/practice/coding' },
        { label: '데이터 분석', path: '/practice/analysis' },
        { label: '번역', path: '/practice/translation' },
        { label: '비즈니스', path: '/practice/business' }
      ]
    },
    {
      label: 'AI활용 Tip!',
      children: [
        { label: 'ChatGPT', path: '/ai-tips/chatgpt' },
        { label: 'Claude', path: '/ai-tips/claude' },
        { label: 'Gemini', path: '/ai-tips/gemini' },
        { label: 'Copilot', path: '/ai-tips/copilot' },
        { label: '프롬프트 작성법', path: '/ai-tips/prompt' },
        { label: 'AI 코딩 활용', path: '/ai-tips/coding' },
        { label: 'AI 문서 작성', path: '/ai-tips/writing' },
        { label: 'AI 학습 활용', path: '/ai-tips/learning' }
      ]
    },
    { label: '실습', path: '/playground' },
    {
      label: '강의안',
      children: [
        { label: '강의안 목록', path: '/lectures' },
        { label: '강의안 등록', path: '/lectures/write' }
      ]
    },
    {
      label: '실습워크북',
      children: [
        { label: '워크북 목록', path: '/workbook' },
        { label: '워크북 등록', path: '/workbook/write' }
      ]
    },
    { label: '참고문서', path: '/references' },
    {
      label: '커뮤니티',
      children: [
        { label: '게시판', path: '/community' },
        { label: '글쓰기', path: '/community/write' }
      ]
    }
  ],
  footerLinks: [
    { label: '프롬프트란?', path: '/intro/what-is-prompt' },
    { label: 'AI 모델', path: '/intro/ai-models' },
    { label: '구조와 패턴', path: '/learn/structure' },
    { label: 'Few-shot', path: '/learn/few-shot' },
    { label: 'CoT 기법', path: '/learn/chain-of-thought' },
    { label: '역할 부여', path: '/learn/role-system' },
    { label: '글쓰기 실전', path: '/practice/writing' },
    { label: '코딩 실전', path: '/practice/coding' }
  ]
}

export default site
