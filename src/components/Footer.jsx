import React from 'react';
import { Shield, Phone, Mail, MapPin, Heart, Lock, ExternalLink } from 'lucide-react';

export const Footer = ({ institutional, onNavigate, onOpenLogin, currentUser, onOpenAdmin }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Sección Principal del Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Columna 1: Identidad & Personería */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center text-sm shadow">
                ☀️
              </div>
              <div>
                <h3 className="text-xl font-black text-white tracking-tight">AFEDETCO</h3>
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
                  Quiénes Somos (Misión y Visión)
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
                href={`https://wa.me/${institutional.whatsapp?.replace(/\D/g, '') || '573169040090'}?text=Hola,%20deseo%20comunicarme%20con%20AFEDETCO`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300"
              >
                <span>Línea Directa WhatsApp: {institutional.whatsapp || '+57 316 904 0090'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Columna 4: Redes & Panel Administrativo */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Gestión & Redes
            </h4>
            <p className="text-xs text-slate-400">
              Sigue el Instagram oficial de la federación para ver contenidos diarios y transmisiones.
            </p>

            <div className="pt-1">
              <a
                href="https://instagram.com/afedetco"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-amber-500 text-white font-bold text-xs px-4 py-2 rounded-xl shadow hover:opacity-90 transition-opacity"
              >
                <span>Instagram @afedetco</span>
                <ExternalLink className="w-3.5 h-3.5" />
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
                    <span>Panel de Control Activo</span>
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
            © {new Date().getFullYear()} AFEDETCO. Todos los derechos reservados. Amparado por los Convenios OIT 87 y 98 y la Constitución Política de Colombia.
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
