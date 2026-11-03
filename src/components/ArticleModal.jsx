import React from 'react';
import { X, Calendar, Clock, User, Share2, Printer, Bookmark, Tag } from 'lucide-react';

export const ArticleModal = ({ noticia, onClose }) => {
  if (!noticia) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: noticia.titulo,
        text: noticia.resumen,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('¡Enlace de la noticia copiado al portapapeles!');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 my-auto">
        
        {/* Cabecera con Botón de Cerrar */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-blue-100 text-blue-900 text-[11px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
              {noticia.categoria}
            </span>
            <span className="text-xs text-slate-400">• Boletín Oficial FEDETCO</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleShare}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
              title="Compartir"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={handlePrint}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors hidden sm:block"
              title="Imprimir boletín"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Portada */}
        <div className="relative h-72 sm:h-96 w-full bg-slate-900">
          <img
            src={noticia.imagen}
            alt={noticia.titulo}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Cuerpo del Artículo */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Metadatos */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 pb-2 border-b border-slate-100">
            <span className="flex items-center gap-1.5 text-blue-950 font-bold">
              <User className="w-4 h-4 text-amber-600" />
              {noticia.autor}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-600" />
              {noticia.fecha}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              {noticia.leido}
            </span>
          </div>

          {/* Título Principal */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
            {noticia.titulo}
          </h1>

          {/* Resumen / Bajada en destacado */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
            <p className="text-sm sm:text-base font-semibold text-amber-950 leading-relaxed italic">
              "{noticia.resumen}"
            </p>
          </div>

          {/* Contenido completo con formato amigable */}
          <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line font-normal">
            {noticia.contenido}
          </div>

          {/* Sello de Autenticidad Sindical */}
          <div className="mt-8 pt-6 border-t border-slate-200 bg-slate-50 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <div>
              <p className="font-extrabold text-slate-900">FEDERACIÓN DE ETNOEDUCADORES DE COLOMBIA (FEDETCO)</p>
              <p className="text-slate-500">Comité Ejecutivo Nacional • Secretaría de Prensa y Comunicaciones</p>
            </div>
            <button
              onClick={onClose}
              className="bg-blue-900 hover:bg-blue-950 text-white font-bold px-4 py-2 rounded-xl transition-colors"
            >
              Cerrar Noticia
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
