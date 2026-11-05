import React, { useState } from 'react';
import { 
  Menu, X as CloseIcon, Shield, Phone, Mail, MessageCircle, 
  Lock, UserCheck, ChevronDown, ExternalLink, Globe, Award
} from 'lucide-react';

// Icono oficial de X (Twitter)
const XIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
  </svg>
);

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
      {/* Barra superior de información institucional y contacto rápido (Estilo Raizal Caribeño) */}
      <div className="bg-gradient-to-r from-slate-950 via-cyan-950 to-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-cyan-900/40">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline-flex items-center gap-1 font-medium text-cyan-300">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              {institutional.personeria}
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <a href={`tel:${institutional.telefono}`} className="hover:text-cyan-300 transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3 text-cyan-400" />
              <span>{institutional.telefono}</span>
            </a>
            <span className="hidden md:inline text-slate-500">|</span>
            <a href={`mailto:${institutional.email}`} className="hover:text-cyan-300 transition-colors flex items-center gap-1">
              <Mail className="w-3 h-3 text-cyan-400" />
              <span>{institutional.email}</span>
            </a>
          </div>

          <div className="flex items-center space-x-3 ml-auto sm:ml-0">
            {/* Redes Sociales Oficiales */}
            <div className="flex items-center space-x-2.5 border-r border-slate-700 pr-3">
              <a 
                href={institutional.redes?.x || "https://x.com/fedetco?s=11"} 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
                title="X (Twitter) @fedetco"
              >
                <XIcon className="w-3.5 h-3.5" />
              </a>
              <a 
                href={institutional.redes?.instagram || "https://www.instagram.com/fedetco/"} 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-300 hover:text-pink-400 transition-colors"
                title="Instagram @fedetco"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <span 
                className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                title="Facebook FEDETCO (Próximamente disponible)"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Acceso WhatsApp Directo */}
            <a 
              href={`https://wa.me/${institutional.whatsapp?.replace(/\D/g, '') || '573169040090'}?text=Hola%20FEDETCO,%20deseo%20informaci%C3%B3n%20sobre%20afiliaci%C3%B3n%20y%20asesor%C3%ADa`}
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
          
          {/* Logo Oficial de la Cámara de Comercio con Anillo Turquesa Raizal */}
          <div 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center space-x-3 cursor-pointer group select-none"
          >
            <div className="relative w-13 h-13 rounded-full bg-slate-950 p-0.5 border-2 border-cyan-400 shadow-md group-hover:scale-105 transition-transform duration-200 overflow-hidden flex-shrink-0" style={{ width: '52px', height: '52px' }}>
              <img 
                src="/images/fedetco-logo.png" 
                alt="Logo FEDETCO" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-cyan-900 transition-colors">
                  {institutional.nombre || "FEDETCO"}
                </span>
                <span className="bg-cyan-100 text-cyan-900 text-[10px] font-bold px-2 py-0.5 rounded tracking-wide uppercase border border-cyan-300">
                  Colombia
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-600 line-clamp-1 max-w-[280px] sm:max-w-none">
                {institutional.subtitulo || "Federación de Etnoeducadores de Colombia"}
              </p>
              <p className="text-[10px] font-medium text-teal-700 tracking-wider hidden sm:block">
                {institutional.lema || "EDUCACIÓN • CULTURA • IDENTIDAD • TERRITORIO"}
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
                    ? 'text-cyan-950 bg-cyan-50 font-bold border-b-2 border-cyan-500'
                    : 'text-slate-700 hover:text-cyan-900 hover:bg-slate-100'
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
              className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white text-xs font-bold px-3.5 py-2.5 rounded-lg shadow-sm transition-all duration-200 hover:shadow flex items-center gap-1.5"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Afiliarme</span>
            </button>

            {currentUser ? (
              <button
                onClick={onOpenAdmin}
                className="bg-cyan-950 hover:bg-cyan-900 text-cyan-300 text-xs font-bold px-3.5 py-2.5 rounded-lg shadow-sm transition-all duration-200 hover:shadow flex items-center gap-1.5 border border-cyan-400"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Panel Administrador ({currentUser.rol?.includes('Super') ? 'Desarrollador' : 'Directiva'})</span>
              </button>
            ) : (
              <button
                onClick={onOpenLogin}
                className="bg-slate-900 hover:bg-slate-800 text-cyan-300 hover:text-cyan-200 text-xs font-bold px-3 py-2.5 rounded-lg border border-slate-700 shadow-sm transition-all duration-200 flex items-center gap-1.5"
                title="Acceso exclusivo para directiva sindical y administrador"
              >
                <Lock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Acceso Admin</span>
              </button>
            )}
          </div>

          {/* Botón Móvil */}
          <div className="flex lg:hidden items-center space-x-2">
            {currentUser && (
              <button
                onClick={onOpenAdmin}
                className="bg-cyan-950 text-cyan-300 p-2 rounded-lg text-xs font-bold flex items-center gap-1 border border-cyan-500"
              >
                <Lock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Admin</span>
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                    ? 'bg-cyan-900 text-white font-bold'
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
              className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-sm font-bold py-2.5 rounded-lg text-center flex items-center justify-center gap-2"
            >
              <UserCheck className="w-4 h-4" />
              <span>Diligenciar Afiliación Sindical</span>
            </button>

            {currentUser ? (
              <button
                onClick={() => { onOpenAdmin(); setMobileMenuOpen(false); }}
                className="w-full bg-cyan-950 text-cyan-300 text-sm font-bold py-2.5 rounded-lg text-center flex items-center justify-center gap-2 border border-cyan-400"
              >
                <Lock className="w-4 h-4" />
                <span>Panel de Administración</span>
              </button>
            ) : (
              <button
                onClick={() => { onOpenLogin(); setMobileMenuOpen(false); }}
                className="w-full bg-slate-900 text-white text-sm font-bold py-2.5 rounded-lg text-center flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4 text-cyan-400" />
                <span>Ingreso Directiva / Administrador</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
