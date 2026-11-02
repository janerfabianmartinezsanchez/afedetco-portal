import {
  INITIAL_INSTITUTIONAL,
  INITIAL_NOTICIAS,
  INITIAL_GALERIA,
  INITIAL_FOROS,
  INITIAL_DOCUMENTOS,
  INITIAL_USERS
} from '../data/initialData';

const KEYS = {
  INSTITUTIONAL: 'afedetco_institutional_v2',
  NOTICIAS: 'afedetco_noticias_v2',
  GALERIA: 'afedetco_galeria_v2',
  FOROS: 'afedetco_foros_v1',
  DOCUMENTOS: 'afedetco_documentos_v1',
  SESSION: 'afedetco_session_v1',
  FIREBASE_CONFIG: 'afedetco_firebase_config_v1'
};

// Inicializa el almacenamiento si no existe
export const initStorage = () => {
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
};

// Servicios Institucionales
export const getInstitutionalData = () => {
  try {
    const data = localStorage.getItem(KEYS.INSTITUTIONAL);
    return data ? JSON.parse(data) : INITIAL_INSTITUTIONAL;
  } catch {
    return INITIAL_INSTITUTIONAL;
  }
};

export const updateInstitutionalData = (updatedData) => {
  localStorage.setItem(KEYS.INSTITUTIONAL, JSON.stringify(updatedData));
  return updatedData;
};

// Servicios de Noticias
export const getNoticias = () => {
  try {
    const data = localStorage.getItem(KEYS.NOTICIAS);
    return data ? JSON.parse(data) : INITIAL_NOTICIAS;
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
      id: 'noticia-' + Date.now(),
      fecha: noticia.fecha || new Date().toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' }),
      leido: noticia.leido || '3 min de lectura'
    };
    updated = [newNoticia, ...noticias];
  }
  localStorage.setItem(KEYS.NOTICIAS, JSON.stringify(updated));
  return updated;
};

export const deleteNoticia = (id) => {
  const noticias = getNoticias().filter(n => n.id !== id);
  localStorage.setItem(KEYS.NOTICIAS, JSON.stringify(noticias));
  return noticias;
};

// Servicios de Galería
export const getFotos = () => {
  try {
    const data = localStorage.getItem(KEYS.GALERIA);
    return data ? JSON.parse(data) : INITIAL_GALERIA;
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
      id: 'foto-' + Date.now(),
      fecha: foto.fecha || new Date().toLocaleDateString('es-CO', { month: 'long', year: 'numeric' })
    };
    updated = [newFoto, ...fotos];
  }
  localStorage.setItem(KEYS.GALERIA, JSON.stringify(updated));
  return updated;
};

export const deleteFoto = (id) => {
  const fotos = getFotos().filter(f => f.id !== id);
  localStorage.setItem(KEYS.GALERIA, JSON.stringify(fotos));
  return fotos;
};

// Servicios de Foros
export const getForos = () => {
  try {
    const data = localStorage.getItem(KEYS.FOROS);
    return data ? JSON.parse(data) : INITIAL_FOROS;
  } catch {
    return INITIAL_FOROS;
  }
};

export const saveForo = (foro) => {
  const foros = getForos();
  const newForo = {
    ...foro,
    id: 'foro-' + Date.now(),
    fecha: 'Hoy',
    respuestas: 0,
    vistas: 1,
    comentarios: []
  };
  const updated = [newForo, ...foros];
  localStorage.setItem(KEYS.FOROS, JSON.stringify(updated));
  return updated;
};

export const addComentarioForo = (foroId, comentario) => {
  const foros = getForos();
  const updated = foros.map(f => {
    if (f.id === foroId) {
      const comentarios = f.comentarios || [];
      const newComentario = {
        id: 'c-' + Date.now(),
        autor: comentario.autor || 'Docente Afiliado',
        fecha: 'Hace un momento',
        texto: comentario.texto
      };
      return {
        ...f,
        respuestas: (f.respuestas || 0) + 1,
        comentarios: [...comentarios, newComentario]
      };
    }
    return f;
  });
  localStorage.setItem(KEYS.FOROS, JSON.stringify(updated));
  return updated;
};

// Servicios de Autenticación de Usuario (Admin & Developer)
export const loginUser = (email, password) => {
  const user = INITIAL_USERS.find(
    u => u.email.toLowerCase().trim() === email.toLowerCase().trim() && u.password === password
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
    localStorage.setItem(KEYS.SESSION, JSON.stringify(session));
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
  localStorage.removeItem(KEYS.SESSION);
};

// Servicios de Configuración de Firebase
export const getFirebaseSettings = () => {
  try {
    const config = localStorage.getItem(KEYS.FIREBASE_CONFIG);
    return config ? JSON.parse(config) : {
      enabled: false,
      apiKey: "",
      authDomain: "afedetco-portal.firebaseapp.com",
      projectId: "afedetco-portal",
      storageBucket: "afedetco-portal.appspot.com",
      messagingSenderId: "",
      appId: ""
    };
  } catch {
    return { enabled: false };
  }
};

export const saveFirebaseSettings = (config) => {
  localStorage.setItem(KEYS.FIREBASE_CONFIG, JSON.stringify(config));
  return config;
};

// Reiniciar a datos por defecto
export const resetToDefaults = () => {
  localStorage.setItem(KEYS.INSTITUTIONAL, JSON.stringify(INITIAL_INSTITUTIONAL));
  localStorage.setItem(KEYS.NOTICIAS, JSON.stringify(INITIAL_NOTICIAS));
  localStorage.setItem(KEYS.GALERIA, JSON.stringify(INITIAL_GALERIA));
  localStorage.setItem(KEYS.FOROS, JSON.stringify(INITIAL_FOROS));
  localStorage.setItem(KEYS.DOCUMENTOS, JSON.stringify(INITIAL_DOCUMENTOS));
};
