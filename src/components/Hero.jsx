import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, ChevronRight, ArrowRight, FileText, 
  Users, HeartPulse, Scale, Sparkles, BookOpen, MapPin, CheckCircle2, Shield 
} from 'lucide-react';

export const Hero = ({ institutional, onNavigate, onSelectNoticia, noticias, slides: propSlides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const defaultSlides = [
    {
      id: "slide-1",
      badge: "PLIEGO NACIONAL 2026",
      badgeColor: "bg-cyan-600 text-white border border-cyan-400/40",
      titulo: "Por la Dignidad y Estabilidad de los Etnoeducadores en Colombia",
      subtitulo: "Radicamos el pliego de peticiones ante el Ministerio de Educación exigiendo concurso especial, nombramiento en propiedad y homologación salarial.",
      imagen: "/images/fedetco-marcha-bogota.jpg",
      pieFoto: "Delegación FEDETCO marchando en Bogotá por la dignidad y derechos del magisterio etnoeducador",
      cta: "Conocer el Pliego de Peticiones",
      actionKey: "noticias"
    },
    {
      id: "slide-2",
      badge: "MEMORIA RAIZAL, NEGRA Y PALENQUERA",
      badgeColor: "bg-teal-600 text-white border border-teal-400/40",
      titulo: "Cultura, Identidad y Territorio: Saberes que Transforman la Escuela",
      subtitulo: "Reconocemos y defendemos el valor de la etnoeducación de las comunidades negras, afrocolombianas, raizales y palenqueras en los archipiélagos, costas, ríos, palenques y territorios ancestrales de toda la nación.",
      imagen: "/images/fedetco-lideres-evento.jpg",
      pieFoto: "Liderazgo magisterial de las comunidades negras, raizales y palenqueras de Colombia",
      cta: "Explorar Nuestra Misión y Visión",
      actionKey: "mision-vision"
    },
    {
      id: "slide-3",
      badge: "UNIDAD SINDICAL",
      badgeColor: "bg-sky-600 text-white border border-sky-400/40",
      titulo: "¡Súmate a FEDETCO! Tu Voz y Tus Derechos Tienen Respaldo Legal",
      subtitulo: "Organización magisterial en 27 departamentos con asesoría jurídica, defensa salarial, veeduría FOMAG y representación nacional permanente.",
      imagen: "/images/fedetco-comite-ejecutivo.jpg",
      pieFoto: "Comité Ejecutivo Nacional de FEDETCO en sesión permanente",
      cta: "Afiliarme Ahora Mismo",
      actionKey: "documentos"
    }
  ];

  const slides = (propSlides && propSlides.length > 0) ? propSlides : defaultSlides;

  // Auto avance del carrusel cada 8 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const activeSlide = slides[currentSlide % slides.length] || slides[0];

  return (
    <section id="hero" className="relative bg-slate-950 text-white overflow-hidden">
      {/* Fondo Ambiental Dinámico Estilo Mar Caribe de los Siete Colores (Raizal UI) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src={activeSlide.imagen}
          alt="Fondo"
          className="w-full h-full object-cover object-top opacity-15 blur-3xl scale-125 transition-all duration-1000"
        />
        
        {/* Orbes de Gradiente en Movimiento (Tonos Caribeños: Turquesa, Aguamarina, Azul Océano) */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-cyan-500/30 to-teal-400/15 blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 right-10 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-sky-600/30 to-blue-800/20 blur-3xl animate-float-reverse" />
        <div className="absolute -bottom-10 left-1/3 w-80 h-80 rounded-full bg-gradient-to-t from-teal-500/25 to-cyan-500/15 blur-3xl animate-pulse-glow" />

        {/* Patrón de Malla Geométrica Sutil en Cian */}
        <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.09]" />

        {/* Partículas Flotantes Transparentes en Tonos Turquesa y Océano */}
        <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-cyan-400/50 animate-particle-1" />
        <div className="absolute top-1/2 left-1/3 w-3 h-3 rounded-full bg-teal-300/40 animate-particle-2" />
        <div className="absolute top-2/3 right-1/4 w-2.5 h-2.5 rounded-full bg-sky-400/45 animate-particle-3" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-cyan-300/60 animate-particle-1" />
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 rounded-full bg-teal-400/40 animate-particle-2" />

        {/* Capa de contraste institucional */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950" />
      </div>

      {/* Contenedor Principal del Hero en 2 Columnas */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-28 lg:pt-16 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Columna Izquierda: Textos y Acciones */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className={`inline-block text-xs font-black px-3.5 py-1 rounded-lg tracking-wider uppercase shadow-md ${activeSlide.badgeColor}`}>
                {activeSlide.badge}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-cyan-950/70 text-cyan-300 text-xs font-bold px-3 py-1 rounded-lg border border-cyan-500/30 backdrop-blur-sm">
                <img src="/images/fedetco-logo.png" alt="FEDETCO" className="w-4 h-4 rounded-full object-cover" />
                <span>FEDETCO Colombia</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.15] text-white drop-shadow-md">
              {activeSlide.titulo}
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow">
              {activeSlide.subtitulo}
            </p>

            {/* Botones de Acción (Estilo Raizal Turquesa & Océano) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => { if (typeof activeSlide.action === 'function') activeSlide.action(); else onNavigate(activeSlide.actionKey || 'noticias'); }}
                className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 hover:from-cyan-300 hover:to-teal-300 text-slate-950 font-black px-6 py-3.5 rounded-xl shadow-xl shadow-cyan-500/20 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2 group text-sm"
              >
                <span>{activeSlide.cta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('documentos')}
                className="bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 hover:border-cyan-400 font-bold px-5 py-3.5 rounded-xl backdrop-blur-sm transition-all flex items-center gap-2 text-sm shadow"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Descargar Estatutos</span>
              </button>
            </div>

            {/* Controles del Carrusel */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 border-t border-slate-800/80">
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevSlide}
                  aria-label="Slide anterior"
                  className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 hover:border-cyan-400 transition-colors shadow"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Siguiente slide"
                  className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 hover:border-cyan-400 transition-colors shadow"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex space-x-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Ir al slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Columna Derecha: Tarjeta Fotográfica con Resplandor Turquesa */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 to-teal-400 opacity-40 group-hover:opacity-75 blur-xl transition duration-500" />
              
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border-2 border-cyan-400/90 shadow-2xl h-[460px] sm:h-[520px]">
                <img
                  key={activeSlide.imagen}
                  src={activeSlide.imagen}
                  alt={activeSlide.titulo}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 animate-fadeIn"
                />

                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

                <div className="absolute bottom-4 inset-x-4 p-3 rounded-2xl bg-slate-950/85 backdrop-blur border border-white/10 text-xs">
                  <div className="flex items-center gap-1.5 text-cyan-400 font-extrabold uppercase tracking-wider text-[10px] mb-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Registro Oficial FEDETCO</span>
                  </div>
                  <p className="text-slate-200 font-semibold leading-tight">
                    {activeSlide.pieFoto}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* 4 Tarjetas de Acceso Directo (Acentos Raizales Caribeños) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 sm:-mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div 
            onClick={() => onNavigate('documentos')}
            className="bg-white rounded-2xl p-5 shadow-xl border-t-4 border-cyan-500 cursor-pointer transform hover:-translate-y-1 transition-all duration-200 text-slate-900 group"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="font-extrabold text-base text-slate-900 group-hover:text-cyan-900 transition-colors">
              Afiliación Sindical
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Descarga el formato único y radícalo en línea con nosotros.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-cyan-700 mt-3">
              <span>Iniciar afiliación</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <div 
            onClick={() => onNavigate('noticias')}
            className="bg-white rounded-2xl p-5 shadow-xl border-t-4 border-teal-500 cursor-pointer transform hover:-translate-y-1 transition-all duration-200 text-slate-900 group"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Scale className="w-6 h-6" />
            </div>
            <h2 className="font-extrabold text-base text-slate-900 group-hover:text-teal-900 transition-colors">
              Pliegos & Estatuto
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Seguimiento a mesas de negociación salarial y concursos.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 mt-3">
              <span>Consultar pliego</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <div 
            onClick={() => onNavigate('foro')}
            className="bg-white rounded-2xl p-5 shadow-xl border-t-4 border-blue-600 cursor-pointer transform hover:-translate-y-1 transition-all duration-200 text-slate-900 group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="font-extrabold text-base text-slate-900 group-hover:text-blue-900 transition-colors">
              Foro Magisterial
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Diálogo abierto entre docentes etnoeducadores del país.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 mt-3">
              <span>Entrar al foro</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <div 
            onClick={() => onNavigate('redes')}
            className="bg-white rounded-2xl p-5 shadow-xl border-t-4 border-sky-500 cursor-pointer transform hover:-translate-y-1 transition-all duration-200 text-slate-900 group"
          >
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="font-extrabold text-base text-slate-900 group-hover:text-sky-900 transition-colors">
              Redes @fedetco
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Síguenos en X, Instagram y Facebook oficial.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 mt-3">
              <span>Ver redes oficiales</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
