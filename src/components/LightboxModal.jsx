import React from 'react';
import { X, MapPin, Calendar, Tag } from 'lucide-react';

export const LightboxModal = ({ foto, onClose }) => {
  if (!foto) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Imagen en Grande */}
        <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={foto.url}
            alt={foto.titulo}
            className="w-full h-auto max-h-[70vh] object-contain"
          />
        </div>

        {/* Pie de Foto con Información */}
        <div className="p-6 bg-slate-950 text-white space-y-2">
          <div className="flex flex-wrap items-center gap-3 text-xs text-amber-400 font-semibold">
            <span className="bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded text-[10px] uppercase">
              {foto.categoria}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {foto.lugar}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {foto.fecha}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white">
            {foto.titulo}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {foto.descripcion}
          </p>
        </div>
      </div>
    </div>
  );
};
