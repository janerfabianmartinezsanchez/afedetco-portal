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
    { label: "Asamblea", url: "/images/afedetco-asamblea-auditorio.jpg" },
    { label: "Marcha", url: "/images/afedetco-marcha-bogota.jpg" },
    { label: "Líderes", url: "/images/afedetco-lideres-evento.jpg" },
    { label: "Comité", url: "/images/afedetco-comite-ejecutivo.jpg" }
  ];

  const handleFileUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxDim = 900;
        let width = img.width;
        let height = img.height;
        if (width > height) {
          if (width > maxDim) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          }
        } else {
          if (height > maxDim) {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        const compressed = canvas.toDataURL('image/jpeg', 0.75);
        setFormData(prev => ({ ...prev, imagen: compressed }));
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

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
    const todayStr = new Date().toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' });
    const finalData = {
      ...formData,
      fecha: todayStr,
      resumen: formData.resumen?.trim() || (formData.contenido?.slice(0, 140) + '...'),
      imagen: formData.imagen?.trim() || sampleImages[0].url
    };
    onSave(finalData);
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
            <label className="block text-xs font-bold text-slate-700 mb-1">Resumen Corto (Bajada - Opcional)</label>
            <textarea
              rows={2}
              placeholder="Una síntesis de 2 líneas para la portada (o déjalo en blanco)..."
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

          {/* Imagen de la Noticia */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Imagen de Portada
            </label>

            {/* Si ya hay foto seleccionada, mostrarla y ocultar los otros botones para evitar confusiones */}
            {formData.imagen ? (
              <div className="relative mb-3 rounded-2xl overflow-hidden border-2 border-emerald-500 shadow-md h-36 bg-slate-900 group">
                <img src={formData.imagen} alt="Vista previa" className="w-full h-full object-cover object-top" />
                <div className="absolute top-2 left-2 bg-emerald-600 text-white text-[10px] font-black px-2 py-0.5 rounded shadow flex items-center gap-1">
                  ✓ Foto lista para publicar
                </div>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, imagen: '' }))}
                  className="absolute top-2 right-2 bg-red-600/90 hover:bg-red-700 text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow"
                >
                  ✕ Quitar / Cambiar foto
                </button>
              </div>
            ) : (
              <div className="space-y-2 mb-3">
                {/* Botón para subir directamente foto del celular */}
                <label className="cursor-pointer inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold px-4 py-3 rounded-xl shadow w-full justify-center transition-transform transform active:scale-95">
                  <span>📷 Elegir foto de la galería de mi celular</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>

                <div>
                  <span className="block text-[11px] text-slate-500 mb-1 text-center font-medium">
                    — o si no tienes foto, elige una del archivo de FEDETCO: —
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                    {sampleImages.map((s, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setFormData({ ...formData, imagen: s.url })}
                        className="text-[11px] py-1.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-bold border border-slate-200 text-center"
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
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
