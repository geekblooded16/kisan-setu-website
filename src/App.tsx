import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ProviderPortalSection from './components/ProviderPortalSection'
import RegistrationModal from './components/RegistrationModal'
import RegistrationSection from './components/RegistrationSection'
import { RegistrationModalProvider } from './context/RegistrationModalContext'

function App() {
  return (
    <RegistrationModalProvider>
      <Hero />
      <FeaturesSection />
      <ProviderPortalSection />
      <RegistrationSection />
      <Footer />
      <RegistrationModal />
    </RegistrationModalProvider>
  )
}

export default App
