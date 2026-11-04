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
        setFormData(prev => ({ ...prev, url: compressed }));
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

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
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Foto para la Galería (Desde tu celular o predefinida)
            </label>
            
            {/* Botón para subir directamente foto del celular */}
            <div className="mb-2">
              <label className="cursor-pointer inline-flex items-center gap-2 bg-cyan-900 hover:bg-cyan-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow w-full justify-center">
                <span>📁 Elegir foto de la galería de mi celular</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Vista previa de la foto seleccionada */}
            {formData.url && (
              <div className="relative mb-2 rounded-xl overflow-hidden border border-slate-300 h-28 bg-slate-100">
                <img src={formData.url} alt="Vista previa" className="w-full h-full object-cover object-top" />
                <span className="absolute bottom-1 right-2 bg-slate-900/80 text-white text-[9px] px-1.5 py-0.5 rounded font-bold">
                  Foto lista ✓
                </span>
              </div>
            )}

            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[10px] font-bold text-slate-500">O toca una foto ya disponible:</span>
              {samplePhotos.map((s, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setFormData({ ...formData, url: s.url })}
                  className={`text-[10px] px-2.5 py-1 rounded-lg font-bold border transition-all ${
                    formData.url === s.url 
                      ? 'bg-cyan-700 text-white border-cyan-800' 
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                  }`}
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
