import React from 'react';
import { Shield, Phone, Mail, MapPin, Heart, Lock, ExternalLink } from 'lucide-react';

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

        {/* Barra Inferior de Derechos y Créditos */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} FEDETCO (Federación de Etnoeducadores de Colombia). Todos los derechos reservados. Amparado por los Convenios OIT 87 y 98 y la Constitución Política de Colombia.
          </p>
          <p className="flex items-center gap-1 text-[11px] text-slate-400">
            <span>Diseñado con pasión por la educación pública</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current inline" />
            <span>• Prototipo Vercel + Firebase</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
