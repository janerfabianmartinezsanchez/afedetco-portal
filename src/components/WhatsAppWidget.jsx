import React, { useState } from 'react';
import { MessageCircle, X, Send, ShieldCheck, ExternalLink } from 'lucide-react';

export const WhatsAppWidget = ({ institutional }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickMessages = [
    "Hola, deseo afiliarme a FEDETCO y necesito orientación.",
    "Reporte urgente sobre servicio de salud FOMAG en mi región.",
    "Consulta jurídica sobre concurso y estabilidad docente."
  ];

  const handleSend = (text) => {
    const message = text || customMsg || "Hola, me comunico desde la página oficial de FEDETCO para solicitar información y asesoría sindical.";
    const encoded = encodeURIComponent(message);
    const phone = institutional?.whatsapp?.replace(/\D/g, '') || "573169040090";
    const url = `https://wa.me/${phone}?text=${encoded}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tarjeta de Chat Desplegable */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn">
          {/* Cabecera Verde WhatsApp */}
          <div className="bg-emerald-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src="/images/fedetco-logo.png" 
                  alt="FEDETCO" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-emerald-600 animate-pulse"></span>
              </div>
              <div>
                <h4 className="font-extrabold text-sm leading-tight">FEDETCO Oficial</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span>En línea • Asesoría Magisterial</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-emerald-700/50"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cuerpo del Chat */}
          <div className="p-4 bg-slate-50 space-y-3 max-h-80 overflow-y-auto">
            {/* Mensaje de bienvenida del sindicato */}
            <div className="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-2xs border border-slate-200 text-xs text-slate-800 space-y-1">
              <p className="font-bold text-emerald-800 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Canal Oficial de Atención</span>
              </p>
              <p>
                ¡Saludos colega docente! Bienvenido a la línea directa de FEDETCO. ¿En qué podemos apoyarte hoy?
              </p>
              <span className="text-[10px] text-slate-400 block text-right">Ahora</span>
            </div>

            {/* Opciones Rápidas */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider block">
                Selecciona una consulta rápida:
              </span>
              {quickMessages.map((msg, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(msg)}
                  className="w-full text-left text-xs bg-emerald-50 hover:bg-emerald-100 text-emerald-950 font-semibold p-2.5 rounded-xl border border-emerald-200 transition-colors flex items-center justify-between"
                >
                  <span>{msg}</span>
                  <ExternalLink className="w-3 h-3 text-emerald-600 flex-shrink-0 ml-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Input para Escribir Mensaje Personalizado */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              placeholder="Escribe tu mensaje aquí..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 text-xs px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              onClick={() => handleSend()}
              className="bg-emerald-600 hover:bg-emerald-700 text-white p-2.5 rounded-xl transition-colors shadow-sm"
              title="Enviar a WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Botón Flotante Redondo */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center border-2 border-white"
        aria-label="Abrir WhatsApp Sindical"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full border-2 border-white animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full border-2 border-white"></span>
        <MessageCircle className="w-7 h-7" />
        
        {/* Tooltip */}
        {!isOpen && (
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
            ¿Dudas o Afiliación? ¡Escríbenos al WhatsApp!
          </span>
        )}
      </button>
    </div>
  );
};
