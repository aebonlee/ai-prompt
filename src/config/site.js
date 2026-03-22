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
        { label: 'AI 모델 이해하기', path: '/intro/ai-models' }
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
    { label: '실습', path: '/playground' }
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
