import React, { useState } from 'react';
import { Share2, Heart, MessageCircle, ExternalLink, Play, Layers, CheckCircle2 } from 'lucide-react';
import { INITIAL_INSTAGRAM_POSTS } from '../data/initialData';

// Iconos SVG para redes sociales
const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
  </svg>
);

const YoutubeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
  </svg>
);

export const RedesSociales = ({ institutional }) => {
  const [activeTab, setActiveTab] = useState('instagram');
  const [selectedIgPost, setSelectedIgPost] = useState(null);

  return (
    <section id="redes" className="py-16 sm:py-24 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-black uppercase tracking-wider border border-amber-500/20">
            <Share2 className="w-3.5 h-3.5" />
            <span>Comunidad Digital & Redes Oficiales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Conéctate con AFEDETCO en Redes Sociales
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Sigue nuestros pronunciamientos, transmisiones en vivo de las marchas y contenidos pedagógicos en todas las plataformas.
          </p>

          {/* Selector de Red Social */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('instagram')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'instagram'
                  ? 'bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram (@afedetco)</span>
            </button>

            <button
              onClick={() => setActiveTab('facebook')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'facebook'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <FacebookIcon className="w-4 h-4" />
              <span>Facebook Oficial</span>
            </button>

            <button
              onClick={() => setActiveTab('youtube')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'youtube'
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <YoutubeIcon className="w-4 h-4" />
              <span>YouTube / FECODE TV</span>
            </button>
          </div>
        </div>

        {/* Pestaña Instagram: Réplica Fidedigna del Perfil y Feed de @afedetco */}
        {activeTab === 'instagram' && (
          <div className="max-w-4xl mx-auto bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl p-6 sm:p-8">
            
            {/* Header del Perfil de Instagram idéntico a la imagen compartida por el usuario */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-800">
              {/* Foto de Perfil con Anillo de Historia Activa */}
              <div className="relative p-1 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex-shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-slate-900 border-2 border-slate-950 flex items-center justify-center overflow-hidden">
                  <svg viewBox="0 0 100 100" className="w-16 h-16 text-amber-400 fill-current">
                    <circle cx="50" cy="50" r="20" fill="#f59e0b" />
                    <path d="M50 5 L55 20 L45 20 Z" fill="#eab308" />
                    <path d="M50 95 L55 80 L45 80 Z" fill="#eab308" />
                    <path d="M5 50 L20 55 L20 45 Z" fill="#10b981" />
                    <path d="M95 50 L80 55 L80 45 Z" fill="#ef4444" />
                  </svg>
                </div>
              </div>

              {/* Información del Perfil */}
              <div className="flex-1 text-center sm:text-left space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <h3 className="text-xl font-bold text-white tracking-tight">afedetco</h3>
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  </div>
                  
                  <div className="flex items-center justify-center gap-2">
                    <a
                      href="https://instagram.com/afedetco"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-lg transition-colors flex items-center gap-1"
                    >
                      <span>Seguir</span>
                    </a>
                    <a
                      href={`https://wa.me/573128495521`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
                    >
                      Mensaje
                    </a>
                  </div>
                </div>

                {/* Métricas */}
                <div className="flex justify-center sm:justify-start gap-6 text-xs sm:text-sm pt-1">
                  <span><strong className="text-white font-black">16</strong> publicaciones</span>
                  <span><strong className="text-white font-black">117</strong> seguidores</span>
                  <span><strong className="text-white font-black">0</strong> seguidos</span>
                </div>

                {/* Bio (Exacta a la captura del usuario) */}
                <div className="text-xs sm:text-sm text-slate-300 pt-1 space-y-0.5">
                  <p className="font-bold text-white">Federación de Etnoeducadores de Colombia</p>
                  <p className="text-amber-400 font-semibold">Educación - Cultura - Identidad - Territorio</p>
                  <p>Unidos por los derechos de los etnoeducadores. Por una educación con identidad y memoria.</p>
                  <a 
                    href="https://instagram.com/afedetco" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-1 text-blue-400 hover:underline pt-0.5"
                  >
                    <span>fedetco.com.co y 3 más</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Grid de Posts de Instagram simulado */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 mt-6">
              {INITIAL_INSTAGRAM_POSTS.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedIgPost(post)}
                  className="group relative aspect-square bg-slate-900 rounded-xl overflow-hidden cursor-pointer border border-slate-800 hover:border-amber-400 transition-all"
                >
                  <img
                    src={post.imagen}
                    alt={post.caption}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />

                  {/* Icono de Tipo en la esquina */}
                  <div className="absolute top-2 right-2 p-1 rounded-md bg-black/60 text-white text-xs">
                    {post.tipo === 'video' && <Play className="w-3.5 h-3.5 fill-current" />}
                    {post.tipo === 'carrusel' && <Layers className="w-3.5 h-3.5" />}
                  </div>

                  {/* Overlay con Likes y Comentarios en Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white font-bold text-xs sm:text-sm">
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4 fill-current text-rose-500" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4 fill-current" />
                      {post.comments}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-6 pt-4 border-t border-slate-800">
              <a
                href="https://instagram.com/afedetco"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>Ver todas las publicaciones en Instagram @afedetco</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        )}

        {/* Pestaña Facebook */}
        {activeTab === 'facebook' && (
          <div className="max-w-3xl mx-auto bg-slate-950 rounded-3xl border border-slate-800 p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto">
              <Facebook className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Comunidad de Facebook AFEDETCO</h3>
            <p className="text-sm text-slate-400 max-w-lg mx-auto">
              Únete a nuestras transmisiones en vivo de asambleas zonales, circulares informativas y debates sindicales transmitidos en directo.
            </p>
            <div className="pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
              >
                <span>Ir a la FanPage Oficial</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {/* Pestaña YouTube */}
        {activeTab === 'youtube' && (
          <div className="max-w-3xl mx-auto bg-slate-950 rounded-3xl border border-slate-800 p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-red-600 text-white flex items-center justify-center mx-auto">
              <Youtube className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Canal Audiovisual AFEDETCO TV</h3>
            <p className="text-sm text-slate-400 max-w-lg mx-auto">
              Documentales sobre saberes pedagógicos ancestrales, memoria de las luchas del magisterio y reportajes territoriales.
            </p>
            <div className="pt-2">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
              >
                <span>Suscribirse al Canal</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

      </div>

      {/* Modal para ver post de Instagram detallado */}
      {selectedIgPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-950 border border-slate-800 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-xs">
                  ☀️
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">afedetco</span>
                  <span className="text-[10px] text-slate-400">Publicación en Instagram</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedIgPost(null)}
                className="text-slate-400 hover:text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <div className="relative aspect-square w-full bg-black">
              <img
                src={selectedIgPost.imagen}
                alt="Detalle post"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="p-5 space-y-3">
              <div className="flex items-center gap-4 text-xs font-bold text-slate-300">
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4 text-rose-500 fill-current" />
                  {selectedIgPost.likes} me gusta
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  {selectedIgPost.comments} comentarios
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                <strong className="text-amber-400 font-bold mr-1">afedetco:</strong>
                {selectedIgPost.caption}
              </p>

              <div className="pt-2">
                <a
                  href="https://instagram.com/afedetco"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-amber-500 text-white font-bold text-xs py-2.5 rounded-xl shadow"
                >
                  <span>Abrir en la App de Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
