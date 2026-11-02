import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, Send, User, Clock, ChevronDown, ChevronUp, PlusCircle, AlertCircle, CheckCircle } from 'lucide-react';

export const Foro = ({ foros, onAddComentario, onCreateForo }) => {
  const [expandedForoId, setExpandedForoId] = useState(foros[0]?.id || null);
  const [nuevoComentarioText, setNuevoComentarioText] = useState({});
  const [autorNombre, setAutorNombre] = useState({});
  const [showNuevoForoModal, setShowNuevoForoModal] = useState(false);
  const [nuevoTema, setNuevoTema] = useState({
    titulo: '',
    autor: '',
    categoria: 'Concursos y Carrera',
    contenido: ''
  });
  const [successToast, setSuccessToast] = useState('');

  const toggleExpand = (id) => {
    setExpandedForoId(expandedForoId === id ? null : id);
  };

  const handleEnviarComentario = (foroId) => {
    const texto = nuevoComentarioText[foroId]?.trim();
    const autor = autorNombre[foroId]?.trim() || 'Docente Afiliado';

    if (!texto) return;

    onAddComentario(foroId, { autor, texto });
    setNuevoComentarioText({ ...nuevoComentarioText, [foroId]: '' });
    setSuccessToast('¡Comentario publicado exitosamente en el foro sindical!');
    setTimeout(() => setSuccessToast(''), 4000);
  };

  const handleSubmitNuevoTema = (e) => {
    e.preventDefault();
    if (!nuevoTema.titulo || !nuevoTema.contenido) return;

    onCreateForo({
      ...nuevoTema,
      autor: nuevoTema.autor || 'Docente de Base'
    });

    setNuevoTema({
      titulo: '',
      autor: '',
      categoria: 'Concursos y Carrera',
      contenido: ''
    });
    setShowNuevoForoModal(false);
    setSuccessToast('¡Tu propuesta de debate ha sido abierta con éxito!');
    setTimeout(() => setSuccessToast(''), 4000);
  };

  return (
    <section id="foro" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider mb-2">
              <MessageSquare className="w-3.5 h-3.5 text-amber-700" />
              <span>Diálogo & Democracia Sindical</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Foro Magisterial de Opinión y Propuestas
            </h2>
            <p className="text-base text-slate-600 mt-1 max-w-2xl">
              Un espacio abierto y fraterno para la deliberación pedagógica, denuncias laborales y construcción colectiva de las bases de AFEDETCO.
            </p>
          </div>

          <button
            onClick={() => setShowNuevoForoModal(true)}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md transition-all self-start md:self-auto"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Crear Nuevo Tema de Debate</span>
          </button>
        </div>

        {/* Notificación Toast */}
        {successToast && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 flex items-center gap-2 text-sm font-semibold animate-fadeIn">
            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span>{successToast}</span>
          </div>
        )}

        {/* Lista de Debates en el Foro */}
        <div className="space-y-4">
          {foros.map((foro) => {
            const isExpanded = expandedForoId === foro.id;
            return (
              <div
                key={foro.id}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-200 hover:border-slate-300"
              >
                {/* Cabecera del Hilo */}
                <div 
                  onClick={() => toggleExpand(foro.id)}
                  className="p-6 cursor-pointer hover:bg-slate-50/70 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                      <span className="bg-blue-100 text-blue-900 px-2.5 py-0.5 rounded-md font-bold uppercase tracking-wider text-[10px]">
                        {foro.categoria}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500 flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        {foro.autor}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {foro.fecha}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                      {foro.titulo}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2">
                      {foro.contenido}
                    </p>
                  </div>

                  <div className="flex items-center space-x-3 self-end md:self-center flex-shrink-0">
                    <div className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
                      <span>{foro.respuestas || (foro.comentarios?.length || 0)} aportes</span>
                    </div>
                    <div className="text-slate-400 hover:text-slate-700">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {/* Zona Expandida: Comentarios y Formulario de Respuesta */}
                {isExpanded && (
                  <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-6">
                    {/* Contenido completo del post inicial */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200">
                      <p className="text-xs font-bold text-slate-400 mb-1">PLANTEAMIENTO CENTRAL:</p>
                      <p className="text-sm text-slate-800 leading-relaxed font-medium">
                        {foro.contenido}
                      </p>
                    </div>

                    {/* Lista de Comentarios Anteriores */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                        Aportes del Magisterio ({foro.comentarios?.length || 0})
                      </h4>

                      {(!foro.comentarios || foro.comentarios.length === 0) ? (
                        <p className="text-xs text-slate-500 italic">Sé el primero en dejar un aporte en este debate.</p>
                      ) : (
                        foro.comentarios.map((c) => (
                          <div key={c.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-1">
                            <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500">
                              <span className="font-bold text-blue-950 flex items-center gap-1">
                                <User className="w-3.5 h-3.5 text-amber-600" />
                                {c.autor}
                              </span>
                              <span className="text-slate-400">{c.fecha}</span>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                              {c.texto}
                            </p>
                          </div>
                        ))
                      )}
                    </div>

                    {/* Formulario para Dejar Nuevo Aporte */}
                    <div className="bg-white p-5 rounded-2xl border border-amber-300 shadow-sm space-y-3">
                      <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <Send className="w-3.5 h-3.5 text-amber-600" />
                        <span>Añadir tu voz o propuesta a este tema</span>
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <input
                          type="text"
                          placeholder="Tu Nombre y Región (ej. Prof. Carmen - Buenaventura)"
                          value={autorNombre[foro.id] || ''}
                          onChange={(e) => setAutorNombre({ ...autorNombre, [foro.id]: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>

                      <div className="relative">
                        <textarea
                          rows={3}
                          placeholder="Escribe tu reflexión, propuesta o denuncia para este hilo sindical..."
                          value={nuevoComentarioText[foro.id] || ''}
                          onChange={(e) => setNuevoComentarioText({ ...nuevoComentarioText, [foro.id]: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                        />
                      </div>

                      <div className="flex justify-end">
                        <button
                          onClick={() => handleEnviarComentario(foro.id)}
                          className="bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
                        >
                          <Send className="w-3.5 h-3.5 text-amber-400" />
                          <span>Publicar Comentario</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal para Crear Nuevo Tema */}
      {showNuevoForoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-lg text-slate-900">Proponer Tema al Foro</h3>
              </div>
              <button 
                onClick={() => setShowNuevoForoModal(false)}
                className="text-slate-400 hover:text-slate-600 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmitNuevoTema} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Título del Debate *</label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Análisis de la circular 015 sobre primas departamentales"
                  value={nuevoTema.titulo}
                  onChange={(e) => setNuevoTema({ ...nuevoTema, titulo: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Categoría</label>
                  <select
                    value={nuevoTema.categoria}
                    onChange={(e) => setNuevoTema({ ...nuevoTema, categoria: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white"
                  >
                    <option value="Concursos y Carrera">Concursos y Carrera</option>
                    <option value="Debate Político">Debate Político</option>
                    <option value="Salud y Seguridad Social">Salud y Seguridad Social</option>
                    <option value="Pedagogía Ancestral">Pedagogía Ancestral</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Tu Nombre y Territorio</label>
                  <input
                    type="text"
                    placeholder="Ej. Lic. Nelson Moreno (Vaupés)"
                    value={nuevoTema.autor}
                    onChange={(e) => setNuevoTema({ ...nuevoTema, autor: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Pregunta o Planteamiento Central *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe el contexto, la problemática y la pregunta disparadora para los docentes..."
                  value={nuevoTema.contenido}
                  onChange={(e) => setNuevoTema({ ...nuevoTema, contenido: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowNuevoForoModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl shadow-md transition-colors"
                >
                  Publicar Hilo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
