import { useState, useEffect } from 'react'

function useTypeWriter(lines, speed) {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayedLines, setDisplayedLines] = useState(Array(lines.length).fill(''))

  useEffect(() => {
    if (currentLine >= lines.length) return

    let charIndex = 0

    const interval = setInterval(() => {
      setDisplayedLines(prev => {
        const newLines = [...prev]
        newLines[currentLine] = lines[currentLine].slice(0, charIndex + 1)
        return newLines
      })

      charIndex++

      if (charIndex === lines[currentLine].length) {
        clearInterval(interval)
        setTimeout(() => setCurrentLine(prev => prev + 1), 150)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [currentLine, lines, speed])

  return displayedLines
}

export default useTypeWriter