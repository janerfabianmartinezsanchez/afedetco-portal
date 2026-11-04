import React, { useState } from 'react';
import { Share2, Heart, MessageCircle, ExternalLink, Play, Layers, CheckCircle2, Shield, MessageSquare, Repeat } from 'lucide-react';
import { INITIAL_INSTAGRAM_POSTS } from '../data/initialData';

// Icono oficial de X (Twitter)
const XIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

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

export const RedesSociales = ({ institutional }) => {
  const [activeTab, setActiveTab] = useState('x');
  const [selectedIgPost, setSelectedIgPost] = useState(null);

  const xPosts = [
    {
      id: "x-1",
      fecha: "Hace 2 horas",
      texto: "🚨 #ATENCIÓN Radicamos formalmente ante el Ministerio de Educación el Pliego Especial de los Etnoeducadores. Exigimos estabilidad laboral en propiedad, garantías salariales y respeto al concurso étnico. ¡La educación propia se respeta! #FEDETCO #DignidadMagisterial",
      reposts: 142,
      likes: 389,
      imagen: "/images/afedetco-marcha-bogota.jpg"
    },
    {
      id: "x-2",
      fecha: "Ayer",
      texto: "📋 En sesión permanente el Comité Ejecutivo Nacional de FEDETCO haciendo seguimiento riguroso a las quejas por demoras en atención médica del FOMAG. Instamos al Gobierno a dar solución inmediata en las regiones rurales.",
      reposts: 88,
      likes: 215,
      imagen: "/images/afedetco-comite-ejecutivo.jpg"
    },
    {
      id: "x-3",
      fecha: "28 Oct",
      texto: "✊🏾 Desde los archipiélagos, costas, palenques y consejos comunitarios, las y los etnoeducadores de las comunidades negras, afrocolombianas, raizales y palenqueras seguimos en pie de lucha. La cultura y la memoria ancestral son el pilar pedagógico de nuestra nación. Síguenos en @fedetco",
      reposts: 64,
      likes: 178
    }
  ];

  return (
    <section id="redes" className="py-16 sm:py-24 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-black uppercase tracking-wider border border-amber-500/20">
            <Share2 className="w-3.5 h-3.5" />
            <span>Comunidad Digital & Redes Oficiales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Conéctate con FEDETCO en Redes Sociales
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Sigue nuestros comunicados oficiales en tiempo real, transmisiones de las marchas y actividades pedagógicas en todas nuestras cuentas oficiales:
          </p>

          {/* Selector de Red Social */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('x')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'x'
                  ? 'bg-black text-white shadow-lg ring-2 ring-white/30'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <XIcon className="w-4 h-4" />
              <span>X (Twitter) @fedetco</span>
            </button>

            <button
              onClick={() => setActiveTab('instagram')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'instagram'
                  ? 'bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram (@fedetco)</span>
            </button>

            <button
              onClick={() => setActiveTab('facebook')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'facebook'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <FacebookIcon className="w-4 h-4" />
              <span>Facebook Oficial</span>
            </button>
          </div>
        </div>

        {/* Pestaña: X (Twitter) Oficial @fedetco */}
        {activeTab === 'x' && (
          <div className="max-w-3xl mx-auto space-y-4 animate-fadeIn">
            {/* Header del Perfil de X */}
            <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <img 
                  src="/images/fedetco-logo.png" 
                  alt="FEDETCO en X" 
                  className="w-16 h-16 rounded-full border-2 border-slate-700 object-cover shadow"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-extrabold text-lg text-white">Federacion de Etnoeducadores de Colombia</h3>
                    <CheckCircle2 className="w-4 h-4 text-sky-400 fill-current" />
                  </div>
                  <p className="text-slate-400 text-xs font-semibold">@fedetco</p>
                  <p className="text-slate-300 text-xs mt-1 leading-relaxed max-w-lg">
                    La Federación de Etnoeducadores de Colombia - FEDETCO, es una organización que agrupa a etnoeducadores en el país con el objetivo de promover y defender sus derechos.
                  </p>
                </div>
              </div>

              <a
                href={institutional.redes?.x || "https://x.com/fedetco?s=11"}
                target="_blank"
                rel="noreferrer"
                className="flex-shrink-0 bg-white hover:bg-slate-200 text-slate-950 font-black text-xs px-5 py-2.5 rounded-full shadow flex items-center gap-1.5 transition-all"
              >
                <span>Seguir en</span>
                <XIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Publicaciones simuladas en tiempo real de X */}
            <div className="space-y-3">
              {xPosts.map((post) => (
                <div key={post.id} className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800/80 hover:border-slate-700 transition-colors">
                  <div className="flex items-start space-x-3">
                    <img 
                      src="/images/fedetco-logo.png" 
                      alt="FEDETCO" 
                      className="w-10 h-10 rounded-full border border-slate-700 object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-white">FEDETCO</span>
                        <span className="text-slate-400 text-xs">@fedetco</span>
                        <span className="text-slate-500 text-xs">·</span>
                        <span className="text-slate-400 text-xs">{post.fecha}</span>
                      </div>
                      <p className="text-slate-200 text-xs sm:text-sm mt-1.5 leading-relaxed">
                        {post.texto}
                      </p>

                      {post.imagen && (
                        <div className="mt-3 rounded-xl overflow-hidden border border-slate-800 max-h-72">
                          <img src={post.imagen} alt="X post media" className="w-full h-full object-cover object-top" />
                        </div>
                      )}

                      <div className="flex items-center gap-6 mt-3 text-slate-400 text-xs">
                        <span className="flex items-center gap-1.5 hover:text-sky-400 cursor-pointer">
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>18</span>
                        </span>
                        <span className="flex items-center gap-1.5 hover:text-emerald-400 cursor-pointer">
                          <Repeat className="w-3.5 h-3.5" />
                          <span>{post.reposts}</span>
                        </span>
                        <span className="flex items-center gap-1.5 hover:text-pink-400 cursor-pointer">
                          <Heart className="w-3.5 h-3.5" />
                          <span>{post.likes}</span>
                        </span>
                        <a 
                          href={institutional.redes?.x || "https://x.com/fedetco?s=11"}
                          target="_blank"
                          rel="noreferrer"
                          className="ml-auto flex items-center gap-1 text-slate-400 hover:text-white"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Ver en X</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pestaña: Instagram Oficial (@fedetco) */}
        {activeTab === 'instagram' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Perfil Instagram Card Oficial */}
            <div className="bg-slate-950 rounded-3xl p-6 sm:p-8 border border-slate-800 max-w-3xl mx-auto shadow-xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-800">
                <div className="flex items-start sm:items-center space-x-4">
                  <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-yellow-400 via-rose-500 to-purple-600 flex-shrink-0">
                    <img
                      src="/images/fedetco-logo.png"
                      alt="Logo FEDETCO"
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-slate-950 object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-extrabold text-lg sm:text-xl text-white">@fedetco</h3>
                      <CheckCircle2 className="w-5 h-5 text-sky-400 fill-current" />
                    </div>
                    <p className="text-xs text-slate-400 font-bold mt-0.5">Federación de Etnoeducadores de Colombia</p>
                    <p className="text-xs text-slate-300 font-semibold mt-1">
                      Educación · Cultura · Identidad · Territorio
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Unidos por los derechos de los etnoeducadores. Por una educación con identidad y memoria.
                    </p>
                    <a
                      href="https://www.instagram.com/fedetco/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-cyan-400 hover:text-cyan-300 font-bold inline-flex items-center gap-1 mt-1"
                    >
                      <span>🔗 fedetco.com.co</span>
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
                  <div className="flex items-center justify-around w-full sm:w-auto gap-4 text-center px-4 py-2 bg-slate-900 rounded-2xl border border-slate-800">
                    <div>
                      <span className="block font-black text-white text-base">16</span>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider">publicaciones</span>
                    </div>
                    <div>
                      <span className="block font-black text-white text-base">117</span>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider">seguidores</span>
                    </div>
                    <div>
                      <span className="block font-black text-white text-base">0</span>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider">seguidos</span>
                    </div>
                  </div>

                  <a
                    href="https://www.instagram.com/fedetco/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-center bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 hover:opacity-95 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl shadow flex items-center justify-center gap-2 transition-opacity"
                  >
                    <span>Abrir Perfil @fedetco</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Mención verificada de Luz Minia Carabalí */}
              <div className="pt-4 flex items-center gap-2 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Seguido por <strong>Luz Minia Carabalí</strong> (Presidente FEDETCO) y la comunidad sindical.</span>
              </div>
            </div>

            {/* Grid de Fotos de Instagram */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {INITIAL_INSTAGRAM_POSTS.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedIgPost(post)}
                  className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-800 cursor-pointer shadow border border-slate-800 hover:border-amber-400 transition-all"
                >
                  <img
                    src={post.imagen}
                    alt={post.caption}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-xs font-bold">
                    <span className="flex items-center gap-1 text-white">
                      <Heart className="w-4 h-4 fill-current text-rose-500" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1 text-white">
                      <MessageCircle className="w-4 h-4 fill-current text-amber-400" />
                      {post.comments}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pestaña: Facebook Oficial */}
        {activeTab === 'facebook' && (
          <div className="max-w-2xl mx-auto bg-slate-950 rounded-3xl p-8 border border-slate-800 text-center space-y-4 animate-fadeIn shadow-xl">
            <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-lg">
              <FacebookIcon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white">
              Página Oficial de FEDETCO en Facebook
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Únete a nuestra página de Facebook para seguir nuestras transmisiones en vivo, foros pedagógicos y comunicados oficiales en video.
            </p>
            <div className="pt-2">
              <a
                href={institutional.redes?.facebook || "https://facebook.com/fedetco"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs px-6 py-3 rounded-xl shadow-lg transition-all"
              >
                <span>Visitar Página de Facebook</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
