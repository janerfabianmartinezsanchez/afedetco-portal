import React from 'react';
import { Bell, ChevronRight } from 'lucide-react';

export const Ticker = ({ onSelectNoticia, noticias }) => {
  const destacada = noticias?.find(n => n.destacada) || noticias?.[0];

  if (!destacada) return null;

  return (
    <div className="bg-amber-500 text-slate-950 font-medium text-xs sm:text-sm py-2 px-4 shadow-sm border-b border-amber-600">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3 overflow-hidden">
          <span className="flex-shrink-0 inline-flex items-center gap-1 bg-slate-950 text-amber-400 font-extrabold px-2.5 py-0.5 rounded text-[11px] uppercase tracking-wider animate-pulse">
            <Bell className="w-3 h-3" />
            COMUNICADO URGENTE
          </span>
          <p className="truncate text-slate-950 font-bold hover:underline cursor-pointer" onClick={() => onSelectNoticia(destacada)}>
            {destacada.titulo}
          </p>
        </div>
        <button
          onClick={() => onSelectNoticia(destacada)}
          className="flex-shrink-0 hidden sm:inline-flex items-center gap-1 font-extrabold text-slate-950 hover:text-white transition-colors text-xs ml-4"
        >
          <span>Leer completo</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
