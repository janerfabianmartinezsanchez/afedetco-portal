import {
  INITIAL_INSTITUTIONAL,
  INITIAL_NOTICIAS,
  INITIAL_GALERIA,
  INITIAL_FOROS,
  INITIAL_DOCUMENTOS,
  INITIAL_USERS
} from '../data/initialData';

const KEYS = {
  INSTITUTIONAL: 'fedetco_institutional_v6',
  NOTICIAS: 'fedetco_noticias_v6',
  GALERIA: 'fedetco_galeria_v6',
  FOROS: 'fedetco_foros_v6',
  DOCUMENTOS: 'fedetco_documentos_v6',
  SESSION: 'fedetco_session_v6',
  FIREBASE_CONFIG: 'fedetco_firebase_config_v6'
};

// Inicializa el almacenamiento con datos de FEDETCO
export const initStorage = () => {
  try {
    if (!localStorage.getItem(KEYS.INSTITUTIONAL)) {
      localStorage.setItem(KEYS.INSTITUTIONAL, JSON.stringify(INITIAL_INSTITUTIONAL));
    }
    if (!localStorage.getItem(KEYS.NOTICIAS)) {
      localStorage.setItem(KEYS.NOTICIAS, JSON.stringify(INITIAL_NOTICIAS));
    }
    if (!localStorage.getItem(KEYS.GALERIA)) {
      localStorage.setItem(KEYS.GALERIA, JSON.stringify(INITIAL_GALERIA));
    }
    if (!localStorage.getItem(KEYS.FOROS)) {
      localStorage.setItem(KEYS.FOROS, JSON.stringify(INITIAL_FOROS));
    }
    if (!localStorage.getItem(KEYS.DOCUMENTOS)) {
      localStorage.setItem(KEYS.DOCUMENTOS, JSON.stringify(INITIAL_DOCUMENTOS));
    }
  } catch (e) {
    console.error("Storage init error:", e);
  }
};

// Servicios Institucionales con fusión defensiva 100% segura
export const getInstitutionalData = () => {
  try {
    const data = localStorage.getItem(KEYS.INSTITUTIONAL);
    if (!data) return INITIAL_INSTITUTIONAL;
    const parsed = JSON.parse(data);
    if (!parsed || typeof parsed !== 'object' || !parsed.nombre) {
      return INITIAL_INSTITUTIONAL;
    }
    return {
      ...INITIAL_INSTITUTIONAL,
      ...parsed,
      redes: { ...INITIAL_INSTITUTIONAL.redes, ...(parsed.redes || {}) },
      comiteEjecutivo: (Array.isArray(parsed.comiteEjecutivo) && parsed.comiteEjecutivo.length > 0)
        ? parsed.comiteEjecutivo 
        : INITIAL_INSTITUTIONAL.comiteEjecutivo,
      objetivosEstatutarios: (Array.isArray(parsed.objetivosEstatutarios) && parsed.objetivosEstatutarios.length > 0)
        ? parsed.objetivosEstatutarios 
        : INITIAL_INSTITUTIONAL.objetivosEstatutarios,
      principios: (Array.isArray(parsed.principios) && parsed.principios.length > 0)
        ? parsed.principios 
        : INITIAL_INSTITUTIONAL.principios,
      estadisticas: (Array.isArray(parsed.estadisticas) && parsed.estadisticas.length > 0)
        ? parsed.estadisticas 
        : INITIAL_INSTITUTIONAL.estadisticas
    };
  } catch {
    return INITIAL_INSTITUTIONAL;
  }
};

export const updateInstitutionalData = (updatedData) => {
  try {
    localStorage.setItem(KEYS.INSTITUTIONAL, JSON.stringify(updatedData));
  } catch (e) {
    console.error(e);
  }
  return updatedData;
};

// Servicios de Noticias
export const getNoticias = () => {
  try {
    const data = localStorage.getItem(KEYS.NOTICIAS);
    if (!data) return INITIAL_NOTICIAS;
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_NOTICIAS;
  } catch {
    return INITIAL_NOTICIAS;
  }
};

export const saveNoticia = (noticia) => {
  const noticias = getNoticias();
  let updated;
  if (noticia.id) {
    updated = noticias.map(n => n.id === noticia.id ? { ...n, ...noticia } : n);
  } else {
    const newNoticia = {
      ...noticia,
      id: `noticia-${Date.now()}`,
      fecha: new Date().toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' }),
      leido: '3 min de lectura'
    };
    updated = [newNoticia, ...noticias];
  }
  try {
    localStorage.setItem(KEYS.NOTICIAS, JSON.stringify(updated));
  } catch (e) {
    console.error(e);
  }
  return updated;
};

export const deleteNoticia = (id) => {
  const noticias = getNoticias();
  const updated = noticias.filter(n => n.id !== id);
  try {
    localStorage.setItem(KEYS.NOTICIAS, JSON.stringify(updated));
  } catch (e) {
    console.error(e);
  }
  return updated;
};

// Servicios de Galería Multimedia
export const getFotos = () => {
  try {
    const data = localStorage.getItem(KEYS.GALERIA);
    if (!data) return INITIAL_GALERIA;
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_GALERIA;
  } catch {
    return INITIAL_GALERIA;
  }
};

export const saveFoto = (foto) => {
  const fotos = getFotos();
  let updated;
  if (foto.id) {
    updated = fotos.map(f => f.id === foto.id ? { ...f, ...foto } : f);
  } else {
    const newFoto = {
      ...foto,
      id: `foto-${Date.now()}`,
      fecha: new Date().toLocaleDateString('es-CO', { month: 'long', year: 'numeric' })
    };
    updated = [newFoto, ...fotos];
  }
  try {
    localStorage.setItem(KEYS.GALERIA, JSON.stringify(updated));
  } catch (e) {
    console.error(e);
  }
  return updated;
};

export const deleteFoto = (id) => {
  const fotos = getFotos();
  const updated = fotos.filter(f => f.id !== id);
  try {
    localStorage.setItem(KEYS.GALERIA, JSON.stringify(updated));
  } catch (e) {
    console.error(e);
  }
  return updated;
};

// Servicios de Foros Magisteriales
export const getForos = () => {
  try {
    const data = localStorage.getItem(KEYS.FOROS);
    if (!data) return INITIAL_FOROS;
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_FOROS;
  } catch {
    return INITIAL_FOROS;
  }
};

export const createTemaForo = (nuevoTema) => {
  const foros = getForos();
  const tema = {
    ...nuevoTema,
    id: `foro-${Date.now()}`,
    fecha: 'Hoy',
    comentariosCount: 0,
    respuestas: []
  };
  const updated = [tema, ...foros];
  try {
    localStorage.setItem(KEYS.FOROS, JSON.stringify(updated));
  } catch (e) {
    console.error(e);
  }
  return updated;
};

export const saveForo = createTemaForo;

export const addComentarioForo = (foroId, comentario) => {
  const foros = getForos();
  const updated = foros.map(f => {
    if (f.id === foroId) {
      const comentarios = f.respuestas || [];
      const newComentario = {
        id: `comentario-${Date.now()}`,
        autor: comentario.autor || 'Docente Anónimo',
        rol: comentario.rol || 'Docente Afiliado FEDETCO',
        fecha: 'Hace un momento',
        texto: comentario.texto
      };
      return {
        ...f,
        comentariosCount: (f.comentariosCount || 0) + 1,
        respuestas: [...comentarios, newComentario]
      };
    }
    return f;
  });
  try {
    localStorage.setItem(KEYS.FOROS, JSON.stringify(updated));
  } catch (e) {
    console.error(e);
  }
  return updated;
};

// Servicios de Autenticación de Usuario (Admin & Developer)
export const loginUser = (email, password) => {
  const cleanEmail = email.toLowerCase().trim();
  const user = INITIAL_USERS.find(
    u => (u.email.toLowerCase().trim() === cleanEmail || u.emailAlternativo?.toLowerCase().trim() === cleanEmail) && u.password === password
  );
  if (user) {
    const session = {
      id: user.id,
      nombre: user.nombre,
      email: user.email,
      rol: user.rol,
      avatar: user.avatar,
      permisos: user.permisos,
      loginAt: new Date().toISOString()
    };
    try {
      localStorage.setItem(KEYS.SESSION, JSON.stringify(session));
    } catch (e) {
      console.error(e);
    }
    return { success: true, user: session };
  }
  return { success: false, message: 'Credenciales inválidas. Por favor verifique el correo y la contraseña.' };
};

export const getCurrentSession = () => {
  try {
    const session = localStorage.getItem(KEYS.SESSION);
    return session ? JSON.parse(session) : null;
  } catch {
    return null;
  }
};

export const logoutUser = () => {
  try {
    localStorage.removeItem(KEYS.SESSION);
  } catch (e) {
    console.error(e);
  }
};

// Servicios de Configuración de Firebase
export const getFirebaseSettings = () => {
  try {
    const config = localStorage.getItem(KEYS.FIREBASE_CONFIG);
    return config ? JSON.parse(config) : {
      enabled: false,
      apiKey: "",
      authDomain: "fedetco-portal.firebaseapp.com",
      projectId: "fedetco-portal",
      storageBucket: "fedetco-portal.appspot.com",
      messagingSenderId: "",
      appId: ""
    };
  } catch {
    return { enabled: false };
  }
};

export const saveFirebaseSettings = (config) => {
  try {
    localStorage.setItem(KEYS.FIREBASE_CONFIG, JSON.stringify(config));
  } catch (e) {
    console.error(e);
  }
  return config;
};

// Reiniciar a datos por defecto
export const resetToDefaults = () => {
  try {
    localStorage.setItem(KEYS.INSTITUTIONAL, JSON.stringify(INITIAL_INSTITUTIONAL));
    localStorage.setItem(KEYS.NOTICIAS, JSON.stringify(INITIAL_NOTICIAS));
    localStorage.setItem(KEYS.GALERIA, JSON.stringify(INITIAL_GALERIA));
    localStorage.setItem(KEYS.FOROS, JSON.stringify(INITIAL_FOROS));
    localStorage.setItem(KEYS.DOCUMENTOS, JSON.stringify(INITIAL_DOCUMENTOS));
  } catch (e) {
    console.error(e);
  }
};
