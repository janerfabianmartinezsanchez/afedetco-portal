import React, { useState } from 'react';
import { 
  Menu, X, Shield, Phone, Mail, MessageCircle, 
  Lock, UserCheck, ChevronDown, ExternalLink, Globe, Award
} from 'lucide-react';

export const Navbar = ({ institutional, currentUser, onOpenLogin, onOpenAdmin, activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', target: 'hero' },
    { label: 'Quiénes Somos', target: 'mision-vision' },
    { label: 'Noticias & Boletines', target: 'noticias' },
    { label: 'Galería', target: 'galeria' },
    { label: 'Foro Docente', target: 'foro' },
    { label: 'Circulares & Documentos', target: 'documentos' },
    { label: 'Redes Sociales', target: 'redes' }
  ];

  const handleNavClick = (target) => {
    onNavigate(target);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-md border-b border-slate-200">
      {/* Barra superior de información institucional y contacto rápido */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline-flex items-center gap-1 font-medium text-amber-400">
              <Award className="w-3.5 h-3.5" />
              {institutional.personeria}
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <a href={`tel:${institutional.telefono}`} className="hover:text-amber-300 transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{institutional.telefono}</span>
            </a>
            <span className="hidden md:inline text-slate-400">|</span>
            <a href={`mailto:${institutional.email}`} className="hover:text-amber-300 transition-colors flex items-center gap-1">
              <Mail className="w-3 h-3 text-amber-400" />
              <span>{institutional.email}</span>
            </a>
          </div>

          <div className="flex items-center space-x-3 ml-auto sm:ml-0">
            {/* Redes Sociales directas */}
            <div className="flex items-center space-x-2 border-r border-slate-700 pr-3">
              <a 
                href="https://instagram.com/afedetco" 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-300 hover:text-amber-400 transition-colors"
                title="Instagram @afedetco"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-300 hover:text-amber-400 transition-colors"
                title="Facebook AFEDETCO"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-300 hover:text-amber-400 transition-colors"
                title="Canal YouTube AFEDETCO"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
            </div>

            {/* Acceso WhatsApp */}
            <a 
              href={`https://wa.me/${institutional.whatsapp?.replace(/\D/g, '') || '573169040090'}?text=Hola%20AFEDETCO,%20deseo%20informaci%C3%B3n%20sobre%20afiliaci%C3%B3n%20y%20asesor%C3%ADa`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Sindical</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navegación Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Institucional con Emblema Étnico y Cultural */}
          <div 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center space-x-3 cursor-pointer group select-none"
          >
            {/* Emblema SVG que evoca el sol, la semilla y los colores afrocolombianos e indígenas */}
            <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-300 flex items-center justify-center shadow-md p-1 group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden relative">
                {/* Rayos de sol e identidad */}
                <svg viewBox="0 0 100 100" className="w-10 h-10 text-amber-400 fill-current">
                  <circle cx="50" cy="50" r="18" fill="#f59e0b" />
                  <path d="M50 8 L54 22 L46 22 Z" fill="#eab308" />
                  <path d="M50 92 L54 78 L46 78 Z" fill="#eab308" />
                  <path d="M8 50 L22 54 L22 46 Z" fill="#eab308" />
                  <path d="M92 50 L78 54 L78 46 Z" fill="#eab308" />
                  <path d="M20 20 L32 28 L28 32 Z" fill="#10b981" />
                  <path d="M80 80 L68 72 L72 68 Z" fill="#10b981" />
                  <path d="M80 20 L68 28 L72 32 Z" fill="#ef4444" />
                  <path d="M20 80 L32 72 L28 68 Z" fill="#ef4444" />
                  {/* Libro / Sabiduría en la base */}
                  <path d="M36 54 Q50 48 64 54 L64 64 Q50 58 36 64 Z" fill="#ffffff" />
                </svg>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors">
                  AFEDETCO
                </span>
                <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wide uppercase border border-amber-300">
                  Colombia
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-600 line-clamp-1 max-w-[280px] sm:max-w-none">
                Federación de Etnoeducadores de Colombia
              </p>
              <p className="text-[10px] font-medium text-amber-700 tracking-wider hidden sm:block">
                EDUCACIÓN • CULTURA • IDENTIDAD • TERRITORIO
              </p>
            </div>
          </div>

          {/* Menú Desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                  activeSection === link.target
                    ? 'text-blue-950 bg-blue-50 font-bold border-b-2 border-amber-500'
                    : 'text-slate-700 hover:text-blue-900 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Botones de Acción (Afiliación + Panel Admin) */}
          <div className="hidden sm:flex items-center space-x-2">
            <button
              onClick={() => handleNavClick('documentos')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2.5 rounded-lg shadow-sm transition-all duration-200 hover:shadow flex items-center gap-1.5"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Afiliarme</span>
            </button>

            {currentUser ? (
              <button
                onClick={onOpenAdmin}
                className="bg-blue-900 hover:bg-blue-950 text-white text-xs font-bold px-3.5 py-2.5 rounded-lg shadow-sm transition-all duration-200 hover:shadow flex items-center gap-1.5 border border-amber-400"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Panel CMS ({currentUser.rol.includes('Super') ? 'Dev' : 'Cliente'})</span>
              </button>
            ) : (
              <button
                onClick={onOpenLogin}
                className="bg-slate-900 hover:bg-slate-800 text-amber-400 hover:text-amber-300 text-xs font-bold px-3 py-2.5 rounded-lg border border-slate-700 shadow-sm transition-all duration-200 flex items-center gap-1.5"
                title="Acceso exclusivo para directiva sindical y administrador"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Acceso Admin</span>
              </button>
            )}
          </div>

          {/* Botón Móvil */}
          <div className="flex lg:hidden items-center space-x-2">
            {currentUser && (
              <button
                onClick={onOpenAdmin}
                className="bg-blue-900 text-white p-2 rounded-lg text-xs font-bold flex items-center gap-1"
              >
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>CMS</span>
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-fadeIn">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-semibold transition-colors ${
                  activeSection === link.target
                    ? 'bg-blue-900 text-white font-bold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('documentos')}
              className="w-full bg-emerald-600 text-white text-sm font-bold py-2.5 rounded-lg text-center flex items-center justify-center gap-2"
            >
              <UserCheck className="w-4 h-4" />
              <span>Diligenciar Afiliación Sindical</span>
            </button>

            {currentUser ? (
              <button
                onClick={() => { onOpenAdmin(); setMobileMenuOpen(false); }}
                className="w-full bg-blue-950 text-amber-300 text-sm font-bold py-2.5 rounded-lg text-center flex items-center justify-center gap-2 border border-amber-400"
              >
                <Lock className="w-4 h-4" />
                <span>Administrar Sitio (CMS)</span>
              </button>
            ) : (
              <button
                onClick={() => { onOpenLogin(); setMobileMenuOpen(false); }}
                className="w-full bg-slate-900 text-white text-sm font-bold py-2.5 rounded-lg text-center flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4 text-amber-400" />
                <span>Ingreso Directiva / Administrador</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
