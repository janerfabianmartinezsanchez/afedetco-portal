import React from 'react';
import { Shield, Phone, Mail, MapPin, Heart, Lock, ExternalLink, Code2 } from 'lucide-react';

const WhatsAppIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.071.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.146.564 4.161 1.545 5.908l-1.645 6.006 6.183-1.622c1.7 1.01 3.687 1.587 5.817 1.587 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/>
  </svg>
);

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

export const Footer = ({ institutional, onNavigate, onOpenLogin, currentUser, onOpenAdmin }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Sección Principal del Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Columna 1: Identidad & Personería */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/fedetco-logo.png" 
                alt="Logo FEDETCO" 
                className="w-12 h-12 rounded-full object-cover border-2 border-amber-400 shadow-md"
              />
              <div>
                <h3 className="text-xl font-black text-white tracking-tight">{institutional.nombre || "FEDETCO"}</h3>
                <p className="text-[10px] text-amber-400 font-bold uppercase tracking-widest">
                  Colombia
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {institutional.descripcionCorta}
            </p>

            <div className="pt-2 text-[11px] text-slate-400 space-y-1 border-t border-slate-800/80">
              <p><strong className="text-slate-300">NIT:</strong> {institutional.nit}</p>
              <p><strong className="text-slate-300">Personería:</strong> {institutional.personeria}</p>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Navegación Institucional
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-amber-400 transition-colors">
                  Inicio & Comunicados de Portada
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('mision-vision')} className="hover:text-amber-400 transition-colors">
                  Quiénes Somos (Comité Ejecutivo Oficial)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('noticias')} className="hover:text-amber-400 transition-colors">
                  Boletines Sindicales & Noticias
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('galeria')} className="hover:text-amber-400 transition-colors">
                  Galería Multimedia de Luchas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('foro')} className="hover:text-amber-400 transition-colors">
                  Foro Magisterial y Diálogo Docente
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('documentos')} className="hover:text-amber-400 transition-colors">
                  Estatutos & Formulario de Afiliación
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 3: Sedes y Contacto */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Atención Sindical
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{institutional.sedePrincipal}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`tel:${institutional.telefono}`} className="hover:text-white">{institutional.telefono}</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`mailto:${institutional.email}`} className="hover:text-white">{institutional.email}</a>
              </p>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${institutional.whatsapp?.replace(/\D/g, '') || '573169040090'}?text=Hola,%20deseo%20comunicarme%20con%20FEDETCO`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300"
              >
                <span>WhatsApp Sindical: {institutional.whatsapp || '+57 316 904 0090'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Columna 4: Redes & Panel Administrativo */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Redes Oficiales @fedetco
            </h4>
            <p className="text-xs text-slate-400">
              Canales oficiales de la Federación de Etnoeducadores de Colombia.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={institutional.redes?.x || "https://x.com/fedetco?s=11"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-black hover:bg-slate-800 text-white font-bold text-xs px-3 py-1.5 rounded-lg border border-slate-700 shadow transition-colors"
                title="X (Twitter)"
              >
                <XIcon className="w-3.5 h-3.5" />
                <span>X @fedetco</span>
              </a>

              <a
                href={institutional.redes?.instagram || "https://instagram.com/fedetco"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-pink-600 to-amber-500 text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow hover:opacity-90 transition-opacity"
                title="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>

              <a
                href={institutional.redes?.facebook || "https://facebook.com/fedetco"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow transition-colors"
                title="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
                <span>Facebook</span>
              </a>
            </div>

            <div className="pt-4 border-t border-slate-800">
              {currentUser ? (
                <button
                  onClick={onOpenAdmin}
                  className="w-full text-left text-xs bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold p-2.5 rounded-xl border border-slate-700 flex items-center justify-between"
                >
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Panel CMS Activo</span>
                  </span>
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">CMS</span>
                </button>
              ) : (
                <button
                  onClick={onOpenLogin}
                  className="w-full text-left text-xs bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold p-2.5 rounded-xl border border-slate-800 flex items-center justify-between"
                >
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Acceso Directiva (Cliente / Dev)</span>
                  </span>
                  <span className="text-[10px] text-slate-500">Ingresar</span>
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Barra Inferior de Derechos y Créditos del Desarrollador */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center md:text-left text-slate-400">
            © {new Date().getFullYear()} <strong className="text-slate-200">FEDETCO</strong> (Federación de Etnoeducadores de Colombia). Todos los derechos reservados.
          </p>

          {/* Sello Oficial del Desarrollador */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-slate-500 font-medium">Desarrollo Web:</span>
            <a
              href="https://wa.me/573126292030?text=Hola%20Janer%2C%20vi%20el%20sitio%20web%20oficial%20de%20FEDETCO%20y%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20web."
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-800/90 border border-cyan-500/40 hover:border-cyan-400 text-slate-200 transition-all duration-200 shadow-sm"
              title="Contactar al desarrollador Janer Martínez por WhatsApp (+57 312 629 2030)"
            >
              <Code2 className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-white group-hover:text-cyan-300 transition-colors">
                Janer Martínez
              </span>
              <span className="text-slate-600">|</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-400 group-hover:text-emerald-300 font-mono text-[11px] font-semibold">
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                <span>312 629 2030</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
