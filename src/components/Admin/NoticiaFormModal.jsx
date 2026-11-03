import React, { useState, useEffect } from 'react';
import { X, Image, Plus, Check, Sparkles } from 'lucide-react';

export const NoticiaFormModal = ({ isOpen, onClose, onSave, editingNoticia }) => {
  const [formData, setFormData] = useState({
    titulo: '',
    categoria: 'Sindical',
    resumen: '',
    contenido: '',
    imagen: '',
    autor: 'Equipo de Comunicaciones FEDETCO',
    destacada: false
  });

  const sampleImages = [
    { label: "Asamblea", url: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80" },
    { label: "Docentes Aula", url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80" },
    { label: "Lideresas", url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80" },
    { label: "Salud Docente", url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80" },
    { label: "Pedagogía", url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80" }
  ];

  useEffect(() => {
    if (editingNoticia) {
      setFormData(editingNoticia);
    } else {
      setFormData({
        titulo: '',
        categoria: 'Sindical',
        resumen: '',
        contenido: '',
        imagen: sampleImages[0].url,
        autor: 'Comité de Prensa FEDETCO',
        destacada: false
      });
    }
  }, [editingNoticia, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 my-auto">
        
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <h3 className="font-extrabold text-xl text-slate-900">
              {editingNoticia ? 'Editar Noticia / Comunicado' : 'Publicar Nueva Noticia'}
            </h3>
            <p className="text-xs text-slate-500">
              Redacta y publica en el portal público de FEDETCO
            </p>
          </div>
          <button onClick={onClose} className="p-1 rounded-full text-slate-400 hover:text-slate-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Título de la Noticia *</label>
            <input
              type="text"
              required
              placeholder="Ej. Resultados de la mesa de concertación salarial 2026"
              value={formData.titulo}
              onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Categoría</label>
              <select
                value={formData.categoria}
                onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white"
              >
                <option value="Sindical">Sindical</option>
                <option value="Estatutos y Leyes">Estatutos y Leyes</option>
                <option value="Género y Cultura">Género y Cultura</option>
                <option value="Salud Docente">Salud Docente</option>
                <option value="Pedagogía">Pedagogía</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Autor / Responsable</label>
              <input
                type="text"
                placeholder="Ej. Secretaría de Prensa FEDETCO"
                value={formData.autor}
                onChange={(e) => setFormData({ ...formData, autor: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Resumen Corto (Bajada) *</label>
            <textarea
              required
              rows={2}
              placeholder="Una síntesis de 2 líneas para la portada..."
              value={formData.resumen}
              onChange={(e) => setFormData({ ...formData, resumen: e.target.value })}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Contenido Completo del Boletín *</label>
            <textarea
              required
              rows={6}
              placeholder="Escribe todo el comunicado, acuerdos, plazos y orientaciones para los maestros..."
              value={formData.contenido}
              onChange={(e) => setFormData({ ...formData, contenido: e.target.value })}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none font-sans"
            />
          </div>

          {/* URL de Imagen con muestras rápidas */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">URL de la Imagen de Portada</label>
            <input
              type="url"
              required
              placeholder="https://..."
              value={formData.imagen}
              onChange={(e) => setFormData({ ...formData, imagen: e.target.value })}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none mb-2"
            />
            
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[10px] font-bold text-slate-400">O usa una foto de archivo:</span>
              {sampleImages.map((s, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setFormData({ ...formData, imagen: s.url })}
                  className="text-[10px] bg-slate-100 hover:bg-slate-200 text-slate-700 px-2 py-0.5 rounded-md font-medium"
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="destacada"
              checked={formData.destacada}
              onChange={(e) => setFormData({ ...formData, destacada: e.target.checked })}
              className="rounded text-amber-500 focus:ring-amber-400 w-4 h-4"
            />
            <label htmlFor="destacada" className="text-xs font-bold text-slate-700 cursor-pointer">
              Marcar como Noticia Destacada (Aparecerá en el Ticker y en la cabecera)
            </label>
          </div>

          <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-bold bg-blue-900 hover:bg-blue-950 text-white rounded-xl shadow-md transition-colors"
            >
              {editingNoticia ? 'Guardar Cambios' : 'Publicar Noticia'}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
