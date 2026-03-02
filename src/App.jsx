import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import textureImage from './images/Texture.jpg'
import Banner from './components/Banner'
import Form from './components/Form'
import SuccessScreen from './components/SuccessScreen'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleFormSubmit = () => {
    setShowSuccess(true)
  }

  return (
    <div className="app" style={{ backgroundImage: `url(${textureImage})` }}>
      <Banner />
      {showSuccess ? (
        <SuccessScreen />
      ) : (
        <Form onSubmit={handleFormSubmit} />
      )}
      <Footer />
      <Analytics />
    </div>
  )
}

export default App