import React, { useState } from 'react';
import { FileText, Download, CheckCircle, FileCheck, HelpCircle, ExternalLink, ShieldCheck } from 'lucide-react';

export const Documentos = ({ documentos, institutional }) => {
  const [downloadSuccess, setDownloadSuccess] = useState('');

  const handleDownload = (doc) => {
    // Generar un archivo descargable de texto o simulado
    const blob = new Blob([
      `============================================================\n` +
      `FEDERACIÓN DE ETNOEDUCADORES DE COLOMBIA (FEDETCO)\n` +
      `NIT: ${institutional.nit} | ${institutional.personeria}\n` +
      `DOCUMENTO OFICIAL: ${doc.titulo}\n` +
      `CATEGORÍA: ${doc.categoria} | FECHA: ${doc.fecha}\n` +
      `============================================================\n\n` +
      `Este documento certifica la validez del archivo sindical ${doc.titulo} emitido por la Federación de Etnoeducadores de Colombia (FEDETCO).\n\n` +
      `Puntos Claves:\n` +
      `1. Documento amparado por los artículos 38 y 39 de la Constitución Política de Colombia (Derecho de Asociación Sindical).\n` +
      `2. Validez nacional ante Secretarías de Educación y Ministerio del Trabajo.\n` +
      `3. Para radicación oficial de afiliación, remita este formulario firmado a ${institutional.email || 'contacto@fedetco.org'} o a la línea WhatsApp ${institutional.whatsapp || '+57 316 904 0090'}.\n\n` +
      `FEDETCO - Educación, Cultura, Identidad y Territorio.\n`
    ], { type: 'text/plain;charset=utf-8' });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${doc.titulo.toLowerCase().replace(/[^a-z0-9]/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadSuccess(`¡Descarga iniciada: "${doc.titulo}"!`);
    setTimeout(() => setDownloadSuccess(''), 4000);
  };

  const pasosAfiliacion = [
    {
      num: "01",
      titulo: "Descargar Formato",
      desc: "Descarga el Formato Único de Afiliación Sindical y diligencia tus datos personales e institucionales."
    },
    {
      num: "02",
      titulo: "Anexar Documentos",
      desc: "Adjunta copia de tu cédula, último desprendible de pago de nómina y acta de posesión o resolución."
    },
    {
      num: "03",
      titulo: "Enviar por WhatsApp o Email",
      desc: `Envía los documentos a ${institutional.email || 'contacto@fedetco.org'} o directamente al WhatsApp de Afiliaciones.`
    },
    {
      num: "04",
      titulo: "Carnetización & Respaldo",
      desc: "Recibe tu certificado de afiliado activo y asesoría jurídica integral en menos de 24 horas."
    }
  ];

  return (
    <section id="documentos" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-black uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5 text-blue-700" />
            <span>Transparencia & Normatividad</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Documentos Oficiales, Circulares y Afiliación
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Accede a los estatutos, pliegos radicados, resoluciones jurídicas y el formulario oficial de vinculación al magisterio etnoeducador.
          </p>
        </div>

        {/* Notificación de Descarga */}
        {downloadSuccess && (
          <div className="mb-8 p-4 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 flex items-center gap-2 text-sm font-semibold max-w-2xl mx-auto animate-fadeIn">
            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span>{downloadSuccess}</span>
          </div>
        )}

        {/* Grid de Documentos Descargables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {documentos.map((doc) => (
            <div
              key={doc.id}
              className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start space-x-3.5">
                  <div className="w-12 h-12 rounded-xl bg-blue-900 text-amber-400 flex items-center justify-center flex-shrink-0 font-bold group-hover:scale-105 transition-transform">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">
                      {doc.categoria} • {doc.tipo}
                    </span>
                    <h3 className="font-extrabold text-base sm:text-lg text-slate-900 mt-1 leading-snug group-hover:text-blue-950 transition-colors">
                      {doc.titulo}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fecha: {doc.fecha} • Tamaño estimado: {doc.tamano}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verificado FEDETCO</span>
                </span>

                <button
                  onClick={() => handleDownload(doc)}
                  className="bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-sm transition-all flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Descargar Archivo</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Guía Paso a Paso para Afiliarse */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-blue-900">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Garantía de Respaldo Sindical
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              ¿Cómo afiliarte a FEDETCO en 4 sencillos pasos?
            </h3>
            <p className="text-sm text-slate-300 mt-2">
              Unidos somos más fuertes. Disfruta de asesoría jurídica gratuita, acompañamiento disciplinario y representación nacional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {pasosAfiliacion.map((p, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm relative">
                <span className="text-3xl font-black text-amber-400/50 absolute top-4 right-4">
                  {p.num}
                </span>
                <h4 className="font-extrabold text-base text-white mb-2 pr-8">{p.titulo}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <a
              href={`https://wa.me/${institutional.whatsapp?.replace(/\D/g, '') || '573169040090'}?text=Hola%20FEDETCO,%20quiero%20afiliarme%20al%20sindicato%20y%20tengo%20los%20documentos%20listos`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl shadow-lg transition-transform transform hover:-translate-y-0.5 text-sm"
            >
              <span>Enviar Documentos por WhatsApp Ahora</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
