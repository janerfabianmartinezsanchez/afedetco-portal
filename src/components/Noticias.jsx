import React, { useState } from 'react';
import { Newspaper, Calendar, Clock, User, ChevronRight, Search, PlusCircle, Bookmark } from 'lucide-react';

export const Noticias = ({ noticias, onSelectNoticia, onNewNoticia, currentUser }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Todas', 'Sindical', 'Estatutos y Leyes', 'Género y Cultura', 'Salud Docente', 'Pedagogía'];

  const filteredNoticias = noticias.filter((noticia) => {
    const matchCat = selectedCategory === 'Todas' || noticia.categoria === selectedCategory;
    const matchSearch = 
      noticia.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      noticia.resumen.toLowerCase().includes(searchQuery.toLowerCase()) ||
      noticia.contenido.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section id="noticias" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-black uppercase tracking-wider mb-2">
              <Newspaper className="w-3.5 h-3.5 text-blue-700" />
              <span>Actualidad Sindical & Pedagógica</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Noticias, Boletines y Comunicados
            </h2>
            <p className="text-base text-slate-600 mt-1 max-w-2xl">
              Infórmate de primera mano sobre las asambleas, circulares de nómina, derechos adquiridos y novedades de AFEDETCO.
            </p>
          </div>

          {currentUser && (
            <button
              onClick={onNewNoticia}
              className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md transition-all self-start md:self-auto"
            >
              <PlusCircle className="w-4 h-4 text-amber-400" />
              <span>Redactar Nueva Noticia</span>
            </button>
          )}
        </div>

        {/* Barra de Filtros y Búsqueda */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-white p-3 rounded-2xl shadow-sm border border-slate-200">
          {/* Categorías */}
          <div className="flex items-center space-x-1 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-blue-900 text-amber-400 shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Buscador */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar noticia o tema..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg text-xs border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50"
            />
          </div>
        </div>

        {/* Grid de Noticias */}
        {filteredNoticias.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
            <Newspaper className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-700">No se encontraron noticias</h3>
            <p className="text-sm text-slate-500 mt-1">Prueba con otra palabra clave o selecciona la categoría "Todas".</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNoticias.map((noticia) => (
              <article
                key={noticia.id}
                onClick={() => onSelectNoticia(noticia)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col cursor-pointer group transform hover:-translate-y-1"
              >
                {/* Imagen de Portada con Badge */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={noticia.imagen}
                    alt={noticia.titulo}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-slate-900/90 backdrop-blur text-amber-400 text-[11px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider shadow">
                      {noticia.categoria}
                    </span>
                  </div>
                  {noticia.destacada && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-red-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">
                        Destacada
                      </span>
                    </div>
                  )}
                </div>

                {/* Contenido de la Noticia */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-amber-600" />
                        {noticia.fecha}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {noticia.leido}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-2 leading-snug">
                      {noticia.titulo}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {noticia.resumen}
                    </p>
                  </div>

                  {/* Footer de Tarjeta */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 truncate max-w-[170px] flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      {noticia.autor}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 group-hover:text-amber-700">
                      <span>Leer</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
