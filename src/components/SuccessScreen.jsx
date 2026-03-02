import { useState, useEffect } from 'react'
import './SuccessScreen.css'

const SuccessScreen = () => {
  const [copied, setCopied] = useState(false)
  const code = 'PALMONASWOMEN'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      
      // Redirect after a short delay
      setTimeout(() => {
        window.location.href = 'https://palmonas.com/collections/flat-50'
      }, 1000)
    } catch (err) {
      console.error('Failed to copy:', err)
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = code
      document.body.appendChild(textArea)
      textArea.select()
      try {
        document.execCommand('copy')
        setCopied(true)
        setTimeout(() => {
          window.location.href = 'https://palmonas.com/collections/flat-50'
        }, 1000)
      } catch (fallbackErr) {
        console.error('Fallback copy failed:', fallbackErr)
      }
      document.body.removeChild(textArea)
    }
  }

  return (
    <div className="success-container">
      <div className="success-wrapper">
        <div className="success-icon">✓</div>
        <h2>Thank You!</h2>
        <p>Your exclusive code is ready</p>
        <div className="code-section">
          <div className="code-display">
            <span className="code-text">{code}</span>
          </div>
          <button
            onClick={handleCopy}
            className="copy-button"
            disabled={copied}
          >
            {copied ? 'Copied! Redirecting...' : 'Copy Code'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuccessScreen