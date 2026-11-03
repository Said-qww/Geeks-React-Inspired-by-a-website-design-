import React from 'react'
import './App.css'
import Header from './components/Header'   
import Hero from './components/Hero'
import Main from './components/Main'
import Aside from './components/Aside'
import Article from './components/Article'
import Div from './components/Div'
import Footer1 from './components/Footer1'
import Footer2 from './components/Footer2'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Main />
        <Aside />
        <Article />
        <Div />
        <Footer1 />
      </main>
      <Footer2 />
    </div>
  )
}

export default App
