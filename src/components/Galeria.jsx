import React, { useState } from 'react';
import { Image, MapPin, Calendar, Maximize2, PlusCircle, Sparkles } from 'lucide-react';

export const Galeria = ({ fotos, onSelectFoto, onNewFoto, currentUser }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const categories = ['Todas', 'Movilizaciones', 'Formación', 'Encuentros', 'Institucional', 'Territorio'];

  const filteredFotos = fotos.filter((f) => 
    selectedCategory === 'Todas' || f.categoria === selectedCategory
  );

  return (
    <section id="galeria" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black uppercase tracking-wider mb-2">
              <Image className="w-3.5 h-3.5 text-emerald-700" />
              <span>Memoria Fotográfica & Registro de Luchas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Galería Multimedia AFEDETCO
            </h2>
            <p className="text-base text-slate-600 mt-1 max-w-2xl">
              Imágenes de asambleas, movilizaciones pacíficas, talleres comunitarios y la labor pedagógica diaria en los territorios.
            </p>
          </div>

          {currentUser && (
            <button
              onClick={onNewFoto}
              className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md transition-all self-start md:self-auto"
            >
              <PlusCircle className="w-4 h-4 text-emerald-200" />
              <span>Subir Foto a la Galería</span>
            </button>
          )}
        </div>

        {/* Filtros de Categoría */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-150 ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-amber-400 shadow'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Galería */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFotos.map((foto) => (
            <div
              key={foto.id}
              onClick={() => onSelectFoto(foto)}
              className="group relative h-96 sm:h-[440px] rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 bg-slate-900 border border-slate-200 hover:border-amber-400"
            >
              <img
                src={foto.url}
                alt={foto.titulo}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                loading="lazy"
              />
              
              {/* Overlay con gradiente solo en la base para no tapar los rostros arriba */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 via-50% to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Botón de Zoom en la esquina */}
              <div className="absolute top-3 right-3 p-2 rounded-full bg-black/50 backdrop-blur text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-amber-400" />
              </div>

              {/* Tag de Categoría */}
              <div className="absolute top-3 left-3">
                <span className="bg-amber-500/90 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded shadow uppercase tracking-wider">
                  {foto.categoria}
                </span>
              </div>

              {/* Textos y Detalles */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-white transform transition-transform duration-300">
                <div className="flex items-center gap-3 text-[11px] text-amber-300 font-semibold mb-1.5">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    {foto.lugar}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-amber-400" />
                    {foto.fecha}
                  </span>
                </div>

                <h3 className="font-extrabold text-base sm:text-lg text-white leading-tight line-clamp-2">
                  {foto.titulo}
                </h3>

                <p className="text-xs text-slate-300 mt-1 line-clamp-2 opacity-90 group-hover:opacity-100">
                  {foto.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
