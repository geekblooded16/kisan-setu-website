import RegistrationPanel from './RegistrationPanel'
import { SectionShell } from './ui/SectionHeader'

export default function RegistrationSection() {
  return (
    <SectionShell id="registration" variant="muted" containerClassName="max-w-5xl">
      <RegistrationPanel formId="registration-section" />
    </SectionShell>
  )
}
