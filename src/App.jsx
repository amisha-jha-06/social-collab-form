import { useState } from 'react'
import Banner from './components/Banner'
import Form from './components/Form'
import SuccessScreen from './components/SuccessScreen'
import './App.css'

function App() {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleFormSubmit = () => {
    setShowSuccess(true)
  }

  return (
    <div className="app">
      <Banner />
      {showSuccess ? (
        <SuccessScreen />
      ) : (
        <Form onSubmit={handleFormSubmit} />
      )}
    </div>
  )
}

export default App