import { useState } from 'react'
import './App.css'
import Header from './Component/Header'
import Content from './Component/Content'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Content/>
      <Footer/>
    </>
  )
}

export default App
