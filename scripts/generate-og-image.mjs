import sharp from 'sharp'

const width = 1200
const height = 630

const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#001a4d"/>
      <stop offset="100%" style="stop-color:#0046C8"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <circle cx="950" cy="100" r="250" fill="#0055E0" opacity="0.5"/>
  <circle cx="1100" cy="500" r="180" fill="#0055E0" opacity="0.4"/>
  <circle cx="100" cy="580" r="120" fill="#0055E0" opacity="0.3"/>
  <text x="100" y="250" font-family="Arial,sans-serif" font-weight="bold" font-size="72" fill="white">AI Prompt</text>
  <text x="100" y="320" font-family="Arial,sans-serif" font-weight="500" font-size="36" fill="#B0C4FF">프롬프트 엔지니어링 학습</text>
  <text x="100" y="400" font-family="Arial,sans-serif" font-size="24" fill="#8AAEFF">ChatGPT, Claude 등 AI 모델에서 원하는 결과를</text>
  <text x="100" y="435" font-family="Arial,sans-serif" font-size="24" fill="#8AAEFF">이끌어내는 프롬프트 작성 기법을 체계적으로 학습합니다.</text>
  <rect x="100" y="480" width="110" height="36" rx="18" fill="none" stroke="#6B9FFF" stroke-width="1.5"/>
  <text x="155" y="504" font-family="Arial,sans-serif" font-size="16" fill="#B0C4FF" text-anchor="middle">ChatGPT</text>
  <rect x="225" y="480" width="90" height="36" rx="18" fill="none" stroke="#6B9FFF" stroke-width="1.5"/>
  <text x="270" y="504" font-family="Arial,sans-serif" font-size="16" fill="#B0C4FF" text-anchor="middle">Claude</text>
  <rect x="330" y="480" width="95" height="36" rx="18" fill="none" stroke="#6B9FFF" stroke-width="1.5"/>
  <text x="377" y="504" font-family="Arial,sans-serif" font-size="16" fill="#B0C4FF" text-anchor="middle">Prompt</text>
  <rect x="440" y="480" width="100" height="36" rx="18" fill="none" stroke="#6B9FFF" stroke-width="1.5"/>
  <text x="490" y="504" font-family="Arial,sans-serif" font-size="16" fill="#B0C4FF" text-anchor="middle">Few-shot</text>
  <rect x="555" y="480" width="65" height="36" rx="18" fill="none" stroke="#6B9FFF" stroke-width="1.5"/>
  <text x="587" y="504" font-family="Arial,sans-serif" font-size="16" fill="#B0C4FF" text-anchor="middle">CoT</text>
  <text x="100" y="570" font-family="Arial,sans-serif" font-size="18" fill="#6B9FFF">ai-prompt.dreamitbiz.com</text>
</svg>`

await sharp(Buffer.from(svg))
  .png()
  .toFile('public/og-image.png')

console.log('OG image generated successfully (blue theme)')
