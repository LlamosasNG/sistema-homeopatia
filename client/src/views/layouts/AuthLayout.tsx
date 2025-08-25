import { LogoHomeopatia } from '@/components/LogoHomeopatia'
import { LogoIPN } from '@/components/LogoIPN'
import { Outlet } from 'react-router' // Es buena práctica usar react-router-dom

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#6a003c] p-4 sm:p-6 font-sans">
      <div className="w-full max-w-lg mx-auto">
        <header className="mb-8 text-center text-white">
          <div className="flex items-center justify-center gap-x-6 mb-6">
            <LogoIPN className="h-24 w-24 sm:h-28 sm:w-28 bg-white p-2 rounded-full shadow-md" />
            <LogoHomeopatia className="h-24 w-24 sm:h-28 sm:w-28 bg-white p-2 rounded-full shadow-md" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Instituto Politécnico Nacional
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mt-1">
            Escuela Nacional de Medicina y Homeopatía
          </p>
        </header>
        <main>
          <div className="bg-white p-8 rounded-2xl shadow-2xl border-t-4 border-yellow-400">
            <Outlet />
          </div>
        </main>
        <footer className="mt-8 text-center text-white/70 text-sm">
          <p className="font-semibold italic">
            "La Técnica al Servicio de la Patria"
          </p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} Escuela Nacional de Medicina y
            Homeopatía. Todos los derechos reservados.
          </p>
        </footer>
      </div>
    </div>
  )
}
