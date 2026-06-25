const BASE = import.meta.env.BASE_URL

type LogoProps = {
  className?: string
}

export default function Logo({ className }: LogoProps) {
  return <img src={`${BASE}logo.svg`} alt="Kisaan Setu" className={className} />
}
