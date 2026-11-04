import React, { useState } from 'react';
import { X, Image, Plus } from 'lucide-react';

export const FotoFormModal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    titulo: '',
    lugar: '',
    categoria: 'Movilizaciones',
    descripcion: '',
    url: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1000&q=80'
  });

  const samplePhotos = [
    { label: "Marcha Bogotá", url: "/images/afedetco-marcha-bogota.jpg" },
    { label: "Comité Ejecutivo", url: "/images/afedetco-comite-ejecutivo.jpg" },
    { label: "Líderes Intercultural", url: "/images/afedetco-lideres-evento.jpg" },
    { label: "Auditorio Plenaria", url: "/images/afedetco-asamblea-auditorio.jpg" }
  ];

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      url: formData.url?.trim() || samplePhotos[0].url
    };
    onSave(finalData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
        
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <h3 className="font-extrabold text-xl text-slate-900">
              Subir Foto a la Galería
            </h3>
            <p className="text-xs text-slate-500">
              Añade memoria gráfica de las actividades de FEDETCO
            </p>
          </div>
          <button onClick={onClose} className="p-1 rounded-full text-slate-400 hover:text-slate-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Título de la Fotografía *</label>
            <input
              type="text"
              required
              placeholder="Ej. Encuentro Pedagógico Subdirectiva Chocó"
              value={formData.titulo}
              onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Lugar / Territorio</label>
              <input
                type="text"
                placeholder="Ej. Quibdó, Chocó"
                value={formData.lugar}
                onChange={(e) => setFormData({ ...formData, lugar: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Categoría</label>
              <select
                value={formData.categoria}
                onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white"
              >
                <option value="Movilizaciones">Movilizaciones</option>
                <option value="Formación">Formación</option>
                <option value="Encuentros">Encuentros</option>
                <option value="Institucional">Institucional</option>
                <option value="Territorio">Territorio</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Descripción / Pie de Foto</label>
            <textarea
              rows={2}
              placeholder="Breve reseña del evento o de los líderes participantes..."
              value={formData.descripcion}
              onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Imagen (URL o toca una foto predefinida)</label>
            <input
              type="text"
              placeholder="https://... o toca un botón abajo"
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none mb-2"
            />
            
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[10px] font-bold text-slate-400">Predefinidas:</span>
              {samplePhotos.map((s, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setFormData({ ...formData, url: s.url })}
                  className="text-[10px] bg-slate-100 hover:bg-slate-200 text-slate-700 px-2 py-0.5 rounded-md font-medium"
                >
                  {s.label}
                </button>
              ))}
            </div>
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
              className="px-5 py-2 text-xs font-bold bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl shadow-md transition-colors"
            >
              Subir a la Galería
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
