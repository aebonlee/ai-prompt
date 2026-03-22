import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => localStorage.getItem('theme-mode') || 'auto')
  const [colorTheme, setColorTheme] = useState(() => localStorage.getItem('color-theme') || 'purple')

  const getAutoTheme = () => {
    const hour = new Date().getHours()
    return (hour >= 6 && hour < 18) ? 'light' : 'dark'
  }

  const activeTheme = mode === 'auto' ? getAutoTheme() : mode

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', activeTheme)
    document.documentElement.setAttribute('data-color', colorTheme)
    localStorage.setItem('theme-mode', mode)
    localStorage.setItem('color-theme', colorTheme)
  }, [activeTheme, colorTheme, mode])

  useEffect(() => {
    if (mode !== 'auto') return
    const interval = setInterval(() => {
      document.documentElement.setAttribute('data-theme', getAutoTheme())
    }, 60000)
    return () => clearInterval(interval)
  }, [mode])

  const cycleMode = () => {
    setMode(prev => {
      if (prev === 'auto') return 'light'
      if (prev === 'light') return 'dark'
      return 'auto'
    })
  }

  return (
    <ThemeContext.Provider value={{ mode, activeTheme, colorTheme, cycleMode, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
