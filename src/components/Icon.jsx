import {
  Home,
  Users,
  ShieldCheck,
  HeartHandshake,
  ShowerHead,
  Puzzle,
  Pill,
} from 'lucide-react'

const map = {
  Home,
  Users,
  ShieldCheck,
  HeartHandshake,
  ShowerHead,
  Puzzle,
  Pill,
}

export default function Icon({ name, className }) {
  const Cmp = map[name] ?? Home
  return <Cmp className={className} aria-hidden="true" />
}
