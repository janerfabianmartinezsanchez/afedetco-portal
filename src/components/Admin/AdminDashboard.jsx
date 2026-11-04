import React, { useState } from 'react';
import { 
  X, Newspaper, Image, MessageSquare, Settings, Flame, 
  Trash2, Edit, Plus, LogOut, CheckCircle, RefreshCw, 
  ExternalLink, ArrowLeft, Shield, Globe, Database, Save, Eye
} from 'lucide-react';
import { VERCEL_DEPLOY_GUIDE } from '../../services/firebaseConfig';
import { resetToDefaults, saveFirebaseSettings, getFirebaseSettings } from '../../services/storage';

export const AdminDashboard = ({ 
  isOpen, 
  onClose, 
  currentUser, 
  onLogout,
  noticias,
  onSaveNoticia,
  onDeleteNoticia,
  onOpenNoticiaForm,
  onOpenEditNoticia,
  fotos,
  onSaveFoto,
  onDeleteFoto,
  onOpenFotoForm,
  foros,
  institutional,
  onUpdateInstitutional,
  onPreviewNoticia
}) => {
  const [activeTab, setActiveTab] = useState('noticias');
  const [toastMessage, setToastMessage] = useState('');
  
  // Estado local para Misión & Visión
  const [instForm, setInstForm] = useState({
    mision: institutional.mision || '',
    vision: institutional.vision || '',
    telefono: institutional.telefono || '',
    email: institutional.email || '',
    whatsapp: institutional.whatsapp || ''
  });

  // Estado local para Firebase
  const [fbConfig, setFbConfig] = useState(getFirebaseSettings());

  if (!isOpen) return null;

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const handleSaveInstitutional = (e) => {
    e.preventDefault();
    onUpdateInstitutional({
      ...institutional,
      ...instForm
    });
    showToast('¡Misión, Visión y datos de contacto actualizados exitosamente!');
  };

  const handleSaveFirebase = (e) => {
    e.preventDefault();
    saveFirebaseSettings(fbConfig);
    showToast('¡Configuración de Firebase guardada!');
  };

  const handleResetData = () => {
    if (window.confirm('¿Deseas restaurar todos los datos iniciales de noticias, fotos y foros?')) {
      resetToDefaults();
      window.location.reload();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-900 text-slate-100 overflow-hidden animate-fadeIn">
      
      {/* Barra Superior del CMS */}
      <div className="bg-slate-950 border-b border-slate-800 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/images/fedetco-logo.png" 
            alt="FEDETCO" 
            className="w-10 h-10 rounded-full border border-amber-400 object-cover shadow"
          />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-black text-lg text-white">Panel CMS FEDETCO</h2>
              <span className="bg-amber-500/20 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-500/30">
                {currentUser?.rol}
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Conectado como: <strong className="text-slate-200">{currentUser?.nombre}</strong> ({currentUser?.email})
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all shadow"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Ver Sitio Público</span>
          </button>

          <button
            onClick={onLogout}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-red-950/80 hover:bg-red-900 text-red-200 text-xs font-bold border border-red-800/50 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Cerrar Sesión</span>
          </button>
        </div>
      </div>

      {/* Notificación Toast */}
      {toastMessage && (
        <div className="bg-emerald-600 text-white text-xs font-bold px-4 py-2.5 text-center flex items-center justify-center gap-2 shadow-md">
          <CheckCircle className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Contenido Principal con Sidebar de Pestañas */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        
        {/* Sidebar de Módulos */}
        <aside className="w-full md:w-64 bg-slate-950/60 border-r border-slate-800/80 p-4 space-y-1.5 flex-shrink-0">
          <div className="text-[11px] font-extrabold uppercase text-slate-500 px-3 py-1">
            Módulos del Sistema
          </div>

          <button
            onClick={() => setActiveTab('noticias')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'noticias'
                ? 'bg-blue-900 text-white shadow'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <span className="flex items-center gap-2.5">
              <Newspaper className="w-4 h-4 text-amber-400" />
              <span>Noticias y Boletines</span>
            </span>
            <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded-full text-slate-300">
              {noticias.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('galeria')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'galeria'
                ? 'bg-blue-900 text-white shadow'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <span className="flex items-center gap-2.5">
              <Image className="w-4 h-4 text-emerald-400" />
              <span>Galería Multimedia</span>
            </span>
            <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded-full text-slate-300">
              {fotos.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('foros')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'foros'
                ? 'bg-blue-900 text-white shadow'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <span className="flex items-center gap-2.5">
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span>Foro Magisterial</span>
            </span>
            <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded-full text-slate-300">
              {foros.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('institucional')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'institucional'
                ? 'bg-blue-900 text-white shadow'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <span className="flex items-center gap-2.5">
              <Settings className="w-4 h-4 text-purple-400" />
              <span>Misión, Visión & Sedes</span>
            </span>
          </button>

          <button
            onClick={() => setActiveTab('firebase')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'firebase'
                ? 'bg-blue-900 text-white shadow'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <span className="flex items-center gap-2.5">
              <Flame className="w-4 h-4 text-amber-500" />
              <span>Firebase & Vercel</span>
            </span>
            <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded">
              Cloud
            </span>
          </button>

          <div className="pt-6 border-t border-slate-800/80">
            <button
              onClick={handleResetData}
              className="w-full text-left text-[11px] text-slate-400 hover:text-amber-400 p-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Restaurar datos de muestra</span>
            </button>
          </div>
        </aside>

        {/* Zona de Trabajo Dinámica */}
        <main className="flex-1 p-4 sm:p-8 overflow-y-auto bg-slate-900">
          
          {/* TAB 1: NOTICIAS */}
          {activeTab === 'noticias' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white">Gestión de Noticias y Comunicados</h3>
                  <p className="text-xs text-slate-400">Crea, modifica o elimina comunicados oficiales del sindicato</p>
                </div>
                <button
                  onClick={onOpenNoticiaForm}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow transition-all self-start"
                >
                  <Plus className="w-4 h-4" />
                  <span>Publicar Nueva Noticia</span>
                </button>
              </div>

              <div className="space-y-3">
                {noticias.map((n) => (
                  <div
                    key={n.id}
                    className="bg-slate-950 p-4 rounded-2xl border border-slate-800 hover:border-slate-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-colors"
                  >
                    <div className="flex items-start space-x-3.5">
                      <img
                        src={n.imagen}
                        alt={n.titulo}
                        className="w-16 h-16 rounded-xl object-cover object-top flex-shrink-0 bg-slate-800"
                      />
                      <div>
                        <div className="flex items-center gap-2 text-[10px] font-bold">
                          <span className="bg-blue-900/60 text-blue-300 px-2 py-0.5 rounded">
                            {n.categoria}
                          </span>
                          {n.destacada && (
                            <span className="bg-red-950 text-red-400 px-2 py-0.5 rounded border border-red-800/40">
                              Destacada
                            </span>
                          )}
                          <span className="text-slate-500">{n.fecha}</span>
                        </div>
                        <h4 className="font-bold text-sm text-white mt-1 line-clamp-1">{n.titulo}</h4>
                        <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{n.resumen}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 self-end md:self-center flex-shrink-0">
                      <button
                        onClick={() => onPreviewNoticia(n)}
                        className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold flex items-center gap-1"
                        title="Ver cómo queda"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Ver</span>
                      </button>
                      <button
                        onClick={() => onOpenEditNoticia(n)}
                        className="p-2 bg-blue-950 hover:bg-blue-900 text-blue-300 rounded-lg text-xs font-semibold flex items-center gap-1 border border-blue-800/40"
                        title="Editar"
                      >
                        <Edit className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Editar</span>
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm(`¿Seguro que deseas eliminar la noticia: "${n.titulo}"?`)) {
                            onDeleteNoticia(n.id);
                            showToast('Noticia eliminada correctamente');
                          }
                        }}
                        className="p-2 bg-red-950/60 hover:bg-red-900 text-red-300 rounded-lg text-xs font-semibold flex items-center gap-1 border border-red-800/40"
                        title="Eliminar"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: GALERÍA */}
          {activeTab === 'galeria' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white">Galería Multimedia y Fotografías</h3>
                  <p className="text-xs text-slate-400">Sube fotos de asambleas, movilizaciones y encuentros</p>
                </div>
                <button
                  onClick={onOpenFotoForm}
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow transition-all self-start"
                >
                  <Plus className="w-4 h-4" />
                  <span>Subir Nueva Foto</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {fotos.map((f) => (
                  <div key={f.id} className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 group relative">
                    <img src={f.url} alt={f.titulo} className="w-full h-56 object-cover object-top" />
                    <div className="p-4 space-y-1">
                      <span className="text-[10px] font-bold text-amber-400 uppercase">{f.categoria}</span>
                      <h4 className="font-bold text-sm text-white line-clamp-1">{f.titulo}</h4>
                      <p className="text-xs text-slate-400">{f.lugar} • {f.fecha}</p>
                    </div>

                    <button
                      onClick={() => {
                        if (window.confirm(`¿Eliminar foto "${f.titulo}" de la galería?`)) {
                          onDeleteFoto(f.id);
                          showToast('Foto eliminada');
                        }
                      }}
                      className="absolute top-2 right-2 p-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow"
                      title="Eliminar foto"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: FOROS */}
          {activeTab === 'foros' && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-slate-800">
                <h3 className="text-xl font-bold text-white">Moderación del Foro Magisterial</h3>
                <p className="text-xs text-slate-400">Revisa los aportes de los docentes y mantén el diálogo respetuoso</p>
              </div>

              <div className="space-y-4">
                {foros.map((foro) => (
                  <div key={foro.id} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded">
                        {foro.categoria}
                      </span>
                      <span className="text-xs text-slate-400">{foro.fecha}</span>
                    </div>

                    <h4 className="font-bold text-base text-white">{foro.titulo}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{foro.contenido}</p>
                    <p className="text-xs text-slate-500">Autor: <strong className="text-slate-300">{foro.autor}</strong></p>

                    <div className="pt-2 border-t border-slate-800 text-xs text-slate-400">
                      Total aportes registrados: <strong className="text-white">{Array.isArray(foro.respuestas) ? foro.respuestas.length : (Array.isArray(foro.comentarios) ? foro.comentarios.length : (foro.comentariosCount || 0))}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: MISIÓN, VISIÓN & DATOS INSTITUCIONALES */}
          {activeTab === 'institucional' && (
            <div className="space-y-6 max-w-3xl">
              <div className="pb-4 border-b border-slate-800">
                <h3 className="text-xl font-bold text-white">Editar Misión, Visión y Contacto</h3>
                <p className="text-xs text-slate-400">Los cambios que hagas aquí se reflejan de inmediato en la página principal</p>
              </div>

              <form onSubmit={handleSaveInstitutional} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Misión de FEDETCO</label>
                  <textarea
                    rows={4}
                    value={instForm.mision}
                    onChange={(e) => setInstForm({ ...instForm, mision: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Visión al 2030</label>
                  <textarea
                    rows={4}
                    value={instForm.vision}
                    onChange={(e) => setInstForm({ ...instForm, vision: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Teléfono Principal</label>
                    <input
                      type="text"
                      value={instForm.telefono}
                      onChange={(e) => setInstForm({ ...instForm, telefono: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Correo Oficial</label>
                    <input
                      type="email"
                      value={instForm.email}
                      onChange={(e) => setInstForm({ ...instForm, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">WhatsApp de Atención</label>
                    <input
                      type="text"
                      value={instForm.whatsapp}
                      onChange={(e) => setInstForm({ ...instForm, whatsapp: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs px-5 py-2.5 rounded-xl shadow transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    <span>Guardar Misión, Visión y Contactos</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 5: FIREBASE & VERCEL */}
          {activeTab === 'firebase' && (
            <div className="space-y-6 max-w-3xl">
              <div className="pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Integración Firebase & Vercel</h3>
                    <p className="text-xs text-slate-400">Guía técnica para conectar base de datos en tiempo real y desplegar gratis</p>
                  </div>
                </div>
              </div>

              {/* Estado de Conexión */}
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Modo Local Activo (Zero-Lag Prototipo con LocalStorage)</span>
                  </span>
                  <span className="text-[11px] bg-emerald-950 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-800/40">
                    100% Funcional
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  El prototipo almacena los cambios en el navegador de manera persistente. Cuando desees vincular tu proyecto Cloud oficial de Firebase para sincronizar entre varios computadores y celulares, solo ingresa tus credenciales abajo:
                </p>
              </div>

              {/* Formulario de Llaves de Firebase */}
              <form onSubmit={handleSaveFirebase} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Credenciales de Firebase Project
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1">API Key</label>
                    <input
                      type="text"
                      placeholder="AIzaSy..."
                      value={fbConfig.apiKey || ''}
                      onChange={(e) => setFbConfig({ ...fbConfig, apiKey: e.target.value })}
                      className="w-full px-3 py-1.5 text-xs rounded-xl bg-slate-900 border border-slate-700 text-slate-200"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1">Project ID</label>
                    <input
                      type="text"
                      placeholder="fedetco-portal"
                      value={fbConfig.projectId || ''}
                      onChange={(e) => setFbConfig({ ...fbConfig, projectId: e.target.value })}
                      className="w-full px-3 py-1.5 text-xs rounded-xl bg-slate-900 border border-slate-700 text-slate-200"
                    />
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Guardar Credenciales Cloud</span>
                  </button>
                </div>
              </form>

              {/* Guía Despliegue en Vercel */}
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>Pasos para Publicar en Vercel (Enlace Oficial)</span>
                </h4>
                <div className="text-xs text-slate-300 space-y-2 leading-relaxed whitespace-pre-line font-mono bg-slate-900 p-4 rounded-xl border border-slate-800">
                  {VERCEL_DEPLOY_GUIDE}
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

    </div>
  );
};
