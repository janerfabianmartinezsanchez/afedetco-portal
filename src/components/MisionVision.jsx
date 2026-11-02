import React, { useState } from 'react';
import { Target, Compass, Shield, Award, Users, BookOpen, MapPin, CheckCircle, Sparkles } from 'lucide-react';

export const MisionVision = ({ institutional }) => {
  const [activeTab, setActiveTab] = useState('mision');

  const comiteEjecutivo = [
    { 
      nombre: "Prof. Jeiler", 
      cargo: "Líder Ejecutivo Nacional & Vocero Sindical", 
      region: "Comité Directivo Nacional AFEDETCO",
      foto: "/images/afedetco-comite-ejecutivo.jpg"
    },
    { 
      nombre: "Secretaría General Sindical", 
      cargo: "Secretaria General & Coordinación Nacional", 
      region: "Valle del Cauca",
      foto: "/images/afedetco-lideres-evento.jpg"
    },
    { 
      nombre: "Secretaría de Asuntos Laborales", 
      cargo: "Secretario de Asuntos Laborales y Pliegos Jurídicos", 
      region: "Nariño / Cauca",
      foto: "/images/afedetco-asamblea-auditorio.jpg"
    },
    { 
      nombre: "Secretaría Pedagógica & Intercultural", 
      cargo: "Secretaría de Saberes Propios y Etnoeducación", 
      region: "Caribe / Bolívar",
      foto: "/images/afedetco-marcha-bogota.jpg"
    },
    { 
      nombre: "Secretaría de Organización y Movilización", 
      cargo: "Delegación y DD.HH. ante FECODE", 
      region: "Bogotá D.C. / Seccionales",
      foto: "/images/afedetco-comite-ejecutivo.jpg"
    }
  ];

  return (
    <section id="mision-vision" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de Sección */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider border border-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Nuestra Identidad & Propósito</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Quiénes Somos: Por una Educación con Raíz, Dignidad y Justicia
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            AFEDETCO representa la fuerza histórica de las maestras y maestros que forjan conocimiento en los territorios étnicos y rurales de Colombia.
          </p>
        </div>

        {/* Tarjetas Misión & Visión */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Tarjeta Misión */}
          <div className="relative bg-gradient-to-br from-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl overflow-hidden border border-blue-900/50">
            {/* Decoración de fondo */}
            <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-amber-500/10 blur-2xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black shadow-lg">
                <Target className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">Propósito Fundacional</span>
                <h3 className="text-2xl font-black text-white">Misión Institucional</h3>
              </div>
            </div>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
              "{institutional.mision}"
            </p>

            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-2 text-xs font-semibold text-amber-400">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Aprobado por la Asamblea Nacional Constitutiva de Delegados Sindicales</span>
            </div>
          </div>

          {/* Tarjeta Visión */}
          <div className="relative bg-gradient-to-br from-amber-600 to-amber-700 text-white rounded-3xl p-8 sm:p-10 shadow-xl overflow-hidden border border-amber-500">
            {/* Decoración de fondo */}
            <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-white/10 blur-2xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-slate-950 text-amber-400 flex items-center justify-center font-black shadow-lg">
                <Compass className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-200 tracking-widest uppercase">Horizonte Estratégico</span>
                <h3 className="text-2xl font-black text-white">Visión al 2030</h3>
              </div>
            </div>

            <p className="text-white text-base sm:text-lg leading-relaxed font-normal drop-shadow-sm">
              "{institutional.vision}"
            </p>

            <div className="mt-8 pt-6 border-t border-amber-500/60 flex items-center gap-2 text-xs font-semibold text-amber-100">
              <CheckCircle className="w-4 h-4 text-white" />
              <span>Rumbo a la consagración constitucional de la Carrera Docente Étnica</span>
            </div>
          </div>

        </div>

        {/* 4 Principios Fundamentales */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Pilares Ideológicos y Sindicales
            </h3>
            <p className="text-sm text-slate-500">Los cuatro pilares innegociables de nuestra organización</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {institutional.principios?.map((p, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-amber-400 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4 font-bold text-sm">
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

        {/* Comité Ejecutivo Nacional */}
        <div className="bg-slate-100 rounded-3xl p-8 sm:p-10 border border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-blue-900 tracking-wider uppercase">Liderazgo Colectivo</span>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Comité Ejecutivo Nacional de AFEDETCO
              </h3>
              <p className="text-sm text-slate-600">Representatividad legítima elegida democráticamente por los docentes</p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-bold text-slate-700">
              <Users className="w-4 h-4 text-amber-600" />
              <span>Período Estatutario 2024 - 2028</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {comiteEjecutivo.map((lider, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 hover:border-amber-400 transition-all flex items-start space-x-3.5 group">
                {lider.foto ? (
                  <img
                    src={lider.foto}
                    alt={lider.nombre}
                    className="w-13 h-13 rounded-full object-cover object-top border-2 border-amber-500 shadow-md flex-shrink-0 group-hover:scale-105 transition-transform"
                    style={{ width: '52px', height: '52px' }}
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-blue-900 text-amber-300 font-black flex items-center justify-center flex-shrink-0 text-sm border-2 border-amber-400 shadow-sm">
                    {lider.nombre[0]}
                  </div>
                )}
                <div>
                  <h5 className="font-extrabold text-sm text-slate-900 group-hover:text-blue-900 transition-colors">{lider.nombre}</h5>
                  <p className="text-xs font-bold text-amber-700">{lider.cargo}</p>
                  <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1 font-medium">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{lider.region}</span>
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
