import quantumLogo from '../assets/quantum-logo.svg'

function AppLogo() {
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef3ff] shadow-[0_1px_2px_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,0.15)]"
      aria-hidden
    >
      <img src={quantumLogo} alt="Quantum logo" className="h-[22px] w-[22px]" />
    </div>
  )
}

export default AppLogo
