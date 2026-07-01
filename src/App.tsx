import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ProviderPortalSection from './components/ProviderPortalSection'
import RegistrationModal from './components/RegistrationModal'
import RegistrationSection from './components/RegistrationSection'
import TestimonialSection from './components/TestimonialSection'
import { LanguageProvider } from './context/LanguageContext'
import { RegistrationModalProvider } from './context/RegistrationModalContext'

function App() {
  return (
    <div className="overflow-x-clip">
      <LanguageProvider>
        <RegistrationModalProvider>
          <Hero />
          <FeaturesSection />
          <ProviderPortalSection />
          <RegistrationSection />
          <TestimonialSection />
          <Footer />
          <RegistrationModal />
        </RegistrationModalProvider>
      </LanguageProvider>
    </div>
  )
}

export default App
