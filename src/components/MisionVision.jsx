import React, { useState } from 'react';
import { 
  Target, Compass, Shield, Award, Users, BookOpen, 
  MapPin, CheckCircle, Sparkles, Scale, HeartHandshake, ChevronDown, ChevronUp, FileText 
} from 'lucide-react';

export const MisionVision = ({ institutional }) => {
  const [showAllObjetivos, setShowAllObjetivos] = useState(false);

  const comiteOficial = institutional.comiteEjecutivo || [
    { 
      nombre: "Luz Minia Carabalí Montaño", 
      cargo: "Presidente", 
      tipo: "Presidencia Nacional",
      foto: "/images/fedetco-lideres-evento.jpg"
    },
    { 
      nombre: "José Absalón Moreno Vélez", 
      cargo: "Vicepresidente", 
      tipo: "Vicepresidencia Nacional",
      foto: "/images/fedetco-asamblea-auditorio.jpg"
    },
    { 
      nombre: "Carlos Arturo Cassiani Cásseres", 
      cargo: "Secretario General", 
      tipo: "Secretaría General",
      foto: "/images/fedetco-marcha-bogota.jpg"
    },
    { 
      nombre: "Jeiler Bejarano Córdoba", 
      cargo: "Fiscal", 
      tipo: "Fiscalía Nacional & Veeduría",
      foto: "/images/fedetco-comite-ejecutivo.jpg",
      destacado: true
    },
    { 
      nombre: "Ricardino Quiñones Carabalí", 
      cargo: "Tesorero", 
      tipo: "Tesorería & Finanzas",
      foto: "/images/fedetco-comite-ejecutivo.jpg"
    }
  ];

  const objetivos = institutional.objetivosEstatutarios || [];
  const displayedObjetivos = showAllObjetivos ? objetivos : objetivos.slice(0, 4);

  return (
    <section id="mision-vision" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-cyan-50/20 to-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de Sección (Colores Raizales Caribeños) */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-black uppercase tracking-wider border border-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
            <span>Estatutos & Identidad Raizal, Afrocolombiana y Palenquera</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Quiénes Somos: Por una Educación Propia, Digna y con Currículo Diferenciado
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {institutional.nombre || "FEDETCO"} es la organización sindical y pedagógica que agrupa, articula y defiende los derechos de educandos y educadores de las comunidades negras, afrocolombianas, raizales y palenqueras en toda Colombia.
          </p>
        </div>

        {/* Tarjetas Misión & Visión */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Tarjeta Misión (Azul Océano Profundo con Acentos Turquesa) */}
          <div className="relative bg-gradient-to-br from-slate-950 via-cyan-950 to-blue-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl overflow-hidden border border-cyan-900/60 flex flex-col justify-between">
            <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500 text-slate-950 flex items-center justify-center font-black shadow-lg">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-cyan-300 tracking-widest uppercase">Estatutos Oficiales</span>
                  <h3 className="text-2xl font-black text-white">Misión Institucional</h3>
                </div>
              </div>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                "{institutional.mision}"
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-2 text-xs font-semibold text-cyan-300">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Aprobado por los Estatutos de la Federación de Etnoeducadores de Colombia</span>
            </div>
          </div>

          {/* Tarjeta Visión (Turquesa y Mar Caribe de los Siete Colores) */}
          <div className="relative bg-gradient-to-br from-teal-700 via-cyan-700 to-sky-700 text-white rounded-3xl p-8 sm:p-10 shadow-xl overflow-hidden border border-teal-500 flex flex-col justify-between">
            <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-white/10 blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-950 text-cyan-300 flex items-center justify-center font-black shadow-lg">
                  <Compass className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-cyan-100 tracking-widest uppercase">Horizonte Estratégico</span>
                  <h3 className="text-2xl font-black text-white">Visión al 2030</h3>
                </div>
              </div>

              <p className="text-white text-base sm:text-lg leading-relaxed font-normal drop-shadow-sm">
                "{institutional.vision}"
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-cyan-500/60 flex items-center gap-2 text-xs font-semibold text-cyan-100">
              <CheckCircle className="w-4 h-4 text-white" />
              <span>Dignidad, reconocimiento y equidad para educandos y educadores</span>
            </div>
          </div>

        </div>

        {/* 4 Pilares Ideológicos y Sindicales */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Pilares Ideológicos y de Acción Social
            </h3>
            <p className="text-sm text-slate-500">Fundamentos innegociables de nuestra labor organizativa</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {institutional.principios?.map((p, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-cyan-400 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-4 font-bold text-sm">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {p.titulo}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Objetivos y Fines Estatutarios (Artículo 3º de los Estatutos) */}
        {objetivos.length > 0 && (
          <div className="mb-16 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">
                  Marco Jurídico Estatutario
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                  Objetivos y Fines de la Federación (Artículo 3º)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Compromisos estatutarios para el mejoramiento democrático, laboral y cultural del magisterio
                </p>
              </div>

              <button
                onClick={() => setShowAllObjetivos(!showAllObjetivos)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-50 hover:bg-cyan-100 text-cyan-900 text-xs font-bold transition-colors self-start sm:self-center border border-cyan-200"
              >
                <span>{showAllObjetivos ? "Ver menos objetivos" : `Ver todos (${objetivos.length})`}</span>
                {showAllObjetivos ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {displayedObjetivos.map((obj, index) => (
                <div key={index} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start space-x-3 text-xs sm:text-sm leading-relaxed text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-cyan-900 text-cyan-300 font-extrabold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                    {index + 1}
                  </div>
                  <p>{obj}</p>
                </div>
              ))}
            </div>

            {/* Parágrafo de Base Fundamental Raizal, Afrocolombiana y Palenquera */}
            <div className="mt-8 p-5 rounded-2xl bg-cyan-50/80 border border-cyan-200 text-xs sm:text-sm text-slate-800 leading-relaxed">
              <strong className="text-cyan-950 font-extrabold block mb-1">
                Base Fundamental de Acción Social (FEDETCO):
              </strong>
              "FEDETCO adopta como base fundamental de su acción social el principio de la defensa de los intereses de los trabajadores de las comunidades negras, afrocolombianas, raizales y palenqueras, públicos y privados, dentro del más amplio respeto de las concepciones políticas, religiosas, culturales, raizales, sindicales, filosóficas, de credo, sexo y raza. Buscamos contribuir a la construcción de un modelo de sociedad verdaderamente participativa, basada en la solidaridad, la autonomía, la paz y el respeto irrestricto de los derechos humanos y los convenios de la OIT."
            </div>
          </div>
        )}

        {/* Comité Ejecutivo Nacional Oficial (Cámara de Comercio) */}
        <div className="bg-slate-100 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-cyan-800 tracking-wider uppercase">Registro Institucional & Representación Magisterial</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Comité Ejecutivo Nacional de {institutional.nombre || "FEDETCO"}
              </h3>
              <p className="text-sm text-slate-600">Representatividad legítima inscrita en el registro sindical oficial</p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-800 shadow-sm">
              <Users className="w-4 h-4 text-cyan-600" />
              <span>Período Estatutario Vigente</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {comiteOficial.map((lider, i) => (
              <div 
                key={i} 
                className={`bg-white rounded-2xl p-5 shadow-sm border transition-all flex items-start space-x-4 group ${
                  lider.destacado 
                    ? 'border-cyan-400 ring-2 ring-cyan-400/20 bg-gradient-to-br from-cyan-50/40 via-white to-white' 
                    : 'border-slate-200 hover:border-cyan-600'
                }`}
              >
                <div className="relative flex-shrink-0">
                  <img
                    src={lider.foto || "/images/fedetco-comite-ejecutivo.jpg"}
                    alt={lider.nombre}
                    className="w-14 h-14 rounded-full object-cover object-top border-2 border-cyan-500 shadow-md group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-slate-950 text-cyan-300 text-[10px] font-black flex items-center justify-center border border-white">
                    0{i + 1}
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="bg-cyan-100 text-cyan-950 text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wide">
                      {lider.cargo}
                    </span>
                    {lider.destacado && (
                      <span className="bg-cyan-500 text-slate-950 text-[9px] font-black px-1.5 py-0.5 rounded uppercase">
                        Fiscal
                      </span>
                    )}
                  </div>

                  <h5 className="font-extrabold text-sm text-slate-900 group-hover:text-cyan-900 transition-colors mt-1 leading-snug">
                    {lider.nombre}
                  </h5>

                  <p className="text-[11px] font-medium text-slate-500 mt-1 flex items-center gap-1">
                    <Shield className="w-3 h-3 text-cyan-600 flex-shrink-0" />
                    <span className="truncate">{lider.tipo}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
