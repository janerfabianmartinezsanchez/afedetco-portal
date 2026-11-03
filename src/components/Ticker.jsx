import React from 'react';
import { Bell, ChevronRight } from 'lucide-react';

export const Ticker = ({ onSelectNoticia, noticias }) => {
  const destacada = noticias?.find(n => n.destacada) || noticias?.[0];

  if (!destacada) return null;

  return (
    <div className="bg-gradient-to-r from-cyan-700 via-teal-600 to-sky-800 text-white font-medium text-xs sm:text-sm py-2 px-4 shadow-sm border-b border-cyan-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3 overflow-hidden">
          <span className="flex-shrink-0 inline-flex items-center gap-1 bg-slate-950 text-cyan-300 font-extrabold px-2.5 py-0.5 rounded text-[11px] uppercase tracking-wider animate-pulse border border-cyan-500/30">
            <Bell className="w-3 h-3 text-cyan-400" />
            COMUNICADO URGENTE
          </span>
          <p className="truncate text-white font-bold hover:underline cursor-pointer" onClick={() => onSelectNoticia(destacada)}>
            {destacada.titulo}
          </p>
        </div>
        <button
          onClick={() => onSelectNoticia(destacada)}
          className="flex-shrink-0 hidden sm:inline-flex items-center gap-1 font-extrabold text-cyan-100 hover:text-white transition-colors text-xs ml-4"
        >
          <span>Leer completo</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
