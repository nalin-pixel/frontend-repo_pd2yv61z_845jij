import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const [locale, setLocale] = useState('en')
  // If you have a branding image, place it in /public and set the path here, e.g. '/cyberorigen-logo.png'
  const brandingImage = '/branding.png'

  return (
    <div className="min-h-screen bg-[#0A0E27] text-white">
      <Header locale={locale} setLocale={setLocale} brandingImage={brandingImage} />
      <main>
        <Hero locale={locale} />
        <Stats locale={locale} />
        <Features locale={locale} />
        <CTA locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  )
}

export default App
