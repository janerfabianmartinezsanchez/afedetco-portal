import React, { useState, useEffect } from 'react';
import { X, Upload, Image as ImageIcon, Sparkles, Check } from 'lucide-react';

export const BannerSlideModal = ({ isOpen, onClose, onSave, slideToEdit }) => {
  const [formData, setFormData] = useState({
    id: '',
    badge: 'NOTICIA PRINCIPAL',
    badgeColor: 'bg-cyan-600 text-white border border-cyan-400/40',
    titulo: '',
    subtitulo: '',
    imagen: '',
    pieFoto: '',
    cta: 'Ver Más Información',
    actionKey: 'noticias'
  });

  const sampleImages = [
    { label: "Marcha Bogotá", url: "/images/fedetco-marcha-bogota.jpg" },
    { label: "Líderes Intercultural", url: "/images/fedetco-lideres-evento.jpg" },
    { label: "Comité Ejecutivo", url: "/images/fedetco-comite-ejecutivo.jpg" },
    { label: "Auditorio Plenaria", url: "/images/fedetco-asamblea-auditorio.jpg" }
  ];

  useEffect(() => {
    if (slideToEdit) {
      setFormData({
        id: slideToEdit.id || '',
        badge: slideToEdit.badge || 'NOTICIA PRINCIPAL',
        badgeColor: slideToEdit.badgeColor || 'bg-cyan-600 text-white border border-cyan-400/40',
        titulo: slideToEdit.titulo || '',
        subtitulo: slideToEdit.subtitulo || '',
        imagen: slideToEdit.imagen || '',
        pieFoto: slideToEdit.pieFoto || '',
        cta: slideToEdit.cta || 'Ver Más Información',
        actionKey: slideToEdit.actionKey || 'noticias'
      });
    } else {
      setFormData({
        id: '',
        badge: 'PLIEGO NACIONAL 2026',
        badgeColor: 'bg-cyan-600 text-white border border-cyan-400/40',
        titulo: '',
        subtitulo: '',
        imagen: sampleImages[0].url,
        pieFoto: '',
        cta: 'Conocer Más',
        actionKey: 'noticias'
      });
    }
  }, [slideToEdit, isOpen]);

  const handleFileUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxDim = 1200;
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
        const compressed = canvas.toDataURL('image/jpeg', 0.80);
        setFormData(prev => ({ ...prev, imagen: compressed }));
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.titulo.trim() || !formData.subtitulo.trim()) {
      alert("Por favor ingresa el título y subtítulo de la diapositiva.");
      return;
    }
    onSave({
      ...formData,
      imagen: formData.imagen?.trim() || sampleImages[0].url
    });
    onClose();
  };

  const isUploadedFromDevice = formData.imagen && formData.imagen.startsWith('data:image/');

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl max-h-[92vh] flex flex-col shadow-2xl text-slate-100 animate-fadeIn">
        
        {/* Cabecera */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-lg text-white">
                {slideToEdit ? 'Editar Foto del Banner Principal' : 'Agregar Nueva Foto al Banner Principal'}
              </h3>
              <p className="text-xs text-slate-400">
                Esta foto se mostrará en el carrusel de bienvenida de la página de inicio.
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-5 space-y-4">
          
          {/* Título Principal */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">
              Título de la Portada *
            </label>
            <input
              type="text"
              required
              value={formData.titulo}
              onChange={e => setFormData({ ...formData, titulo: e.target.value })}
              placeholder="Ej: Gran Movilización por la Estabilidad del Magisterio"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          {/* Subtítulo / Descripción */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">
              Subtítulo / Mensaje Principal *
            </label>
            <textarea
              required
              rows={3}
              value={formData.subtitulo}
              onChange={e => setFormData({ ...formData, subtitulo: e.target.value })}
              placeholder="Breve explicación del mensaje o consigna sindical..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Etiqueta Superior */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Etiqueta Superior (Badge)
              </label>
              <input
                type="text"
                value={formData.badge}
                onChange={e => setFormData({ ...formData, badge: e.target.value })}
                placeholder="Ej: PLIEGO NACIONAL 2026"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            {/* Pie de Foto */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Pie de Foto (Debajo de la imagen)
              </label>
              <input
                type="text"
                value={formData.pieFoto}
                onChange={e => setFormData({ ...formData, pieFoto: e.target.value })}
                placeholder="Ej: Delegación de FEDETCO en sesión"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          {/* Sección de Selección y Subida de Imagen */}
          <div className="pt-2 border-t border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold text-slate-300">
                Foto del Banner *
              </label>
              <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold cursor-pointer transition-colors shadow">
                <Upload className="w-3.5 h-3.5" />
                <span>Subir desde mi Celular / PC</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Vista Previa de la Imagen */}
            {formData.imagen ? (
              <div className="relative rounded-xl overflow-hidden border-2 border-cyan-500/50 bg-slate-950 group max-h-48">
                <img
                  src={formData.imagen}
                  alt="Vista previa banner"
                  className="w-full h-44 object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <label className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold cursor-pointer">
                    Cambiar Foto
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, imagen: '' })}
                    className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold"
                  >
                    Quitar
                  </button>
                </div>
                {isUploadedFromDevice && (
                  <span className="absolute top-2 left-2 bg-emerald-500/90 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded shadow">
                    ✓ Foto cargada desde tu dispositivo
                  </span>
                )}
              </div>
            ) : (
              <div className="p-4 rounded-xl border border-dashed border-slate-700 bg-slate-950 text-center">
                <p className="text-xs text-slate-400 mb-2">
                  Elige una foto de archivo o sube una propia desde tu dispositivo:
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {sampleImages.map((s, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setFormData({ ...formData, imagen: s.url })}
                      className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Botón de Acción / Enlace del Botón */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 border-t border-slate-800">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Texto del Botón (CTA)
              </label>
              <input
                type="text"
                value={formData.cta}
                onChange={e => setFormData({ ...formData, cta: e.target.value })}
                placeholder="Ej: Conocer el Pliego de Peticiones"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                A dónde lleva el botón al hacer clic
              </label>
              <select
                value={formData.actionKey}
                onChange={e => setFormData({ ...formData, actionKey: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="noticias">Sección de Noticias</option>
                <option value="mision-vision">Sección ¿Quiénes Somos?</option>
                <option value="documentos">Sección de Afiliación & Documentos</option>
                <option value="galeria">Sección de Galería</option>
                <option value="foro">Sección Foro Docente</option>
              </select>
            </div>
          </div>

          {/* Botones de Acción */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-white hover:bg-slate-800"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold shadow-lg shadow-cyan-600/30 flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>{slideToEdit ? 'Guardar Cambios' : 'Publicar en el Banner'}</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
