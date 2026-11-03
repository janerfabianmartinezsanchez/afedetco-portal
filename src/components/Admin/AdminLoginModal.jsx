import React, { useState } from 'react';
import { Lock, Mail, Eye, EyeOff, User, ShieldCheck, Sparkles, X, AlertCircle } from 'lucide-react';
import { loginUser } from '../../services/storage';

export const AdminLoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    const res = loginUser(email, password);
    if (res.success) {
      onLoginSuccess(res.user);
      onClose();
    } else {
      setErrorMsg(res.message);
    }
  };

  const handleQuickLogin = (quickEmail, quickPassword) => {
    setEmail(quickEmail);
    setPassword(quickPassword);
    const res = loginUser(quickEmail, quickPassword);
    if (res.success) {
      onLoginSuccess(res.user);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
        
        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Encabezado con Logo Oficial FEDETCO */}
        <div className="text-center space-y-2 mb-6">
          <img 
            src="/images/fedetco-logo.png" 
            alt="FEDETCO" 
            className="w-16 h-16 rounded-full border-2 border-amber-400 object-cover mx-auto shadow-md"
          />
          <h3 className="text-2xl font-black text-slate-900">
            Panel CMS FEDETCO
          </h3>
          <p className="text-xs text-slate-500">
            Acceso administrativo para la gestión de noticias, fotos, foros y comunicados de la Federación de Etnoeducadores de Colombia.
          </p>
        </div>

        {/* Mensaje de Error */}
        {errorMsg && (
          <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Correo Electrónico
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="admin@fedetco.org"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Contraseña
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-10 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-950 text-white font-extrabold text-xs py-3 rounded-xl shadow-md transition-all mt-2"
          >
            Iniciar Sesión en el Panel
          </button>
        </form>

        {/* Acceso Rápido para Demostración al Cliente */}
        <div className="mt-6 pt-5 border-t border-slate-200">
          <span className="block text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-2.5 text-center">
            ⚡ Acceso Rápido para Pruebas (1 Clic)
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleQuickLogin('admin@fedetco.org', '123')}
              className="p-2.5 rounded-xl border border-amber-200 bg-amber-50 hover:bg-amber-100 text-left transition-colors group"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span className="text-xs font-bold text-amber-950 truncate">Jeiler Bejarano (Fiscal)</span>
              </div>
              <p className="text-[10px] text-amber-700 mt-0.5 truncate">admin@fedetco.org</p>
              <p className="text-[10px] text-slate-500">Clave: 123</p>
            </button>

            <button
              type="button"
              onClick={() => handleQuickLogin('developer@fedetco.org', '123')}
              className="p-2.5 rounded-xl border border-blue-200 bg-blue-50 hover:bg-blue-100 text-left transition-colors group"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span className="text-xs font-bold text-blue-950 truncate">Desarrollador (Tú)</span>
              </div>
              <p className="text-[10px] text-blue-700 mt-0.5 truncate">developer@fedetco.org</p>
              <p className="text-[10px] text-slate-500">Clave: 123</p>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
