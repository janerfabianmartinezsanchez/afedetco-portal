import {
  INITIAL_INSTITUTIONAL,
  INITIAL_NOTICIAS,
  INITIAL_GALERIA,
  INITIAL_FOROS,
  INITIAL_DOCUMENTOS,
  INITIAL_USERS
} from '../data/initialData';

const KEYS = {
  INSTITUTIONAL: 'fedetco_institutional_v3',
  NOTICIAS: 'fedetco_noticias_v3',
  GALERIA: 'fedetco_galeria_v3',
  FOROS: 'fedetco_foros_v3',
  DOCUMENTOS: 'fedetco_documentos_v3',
  SESSION: 'fedetco_session_v3',
  FIREBASE_CONFIG: 'fedetco_firebase_config_v3'
};

// Inicializa el almacenamiento con datos de FEDETCO
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
      id: `noticia-${Date.now()}`,
      fecha: new Date().toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' }),
      leido: '3 min de lectura'
    };
    updated = [newNoticia, ...noticias];
  }
  localStorage.setItem(KEYS.NOTICIAS, JSON.stringify(updated));
  return updated;
};

export const deleteNoticia = (id) => {
  const noticias = getNoticias();
  const updated = noticias.filter(n => n.id !== id);
  localStorage.setItem(KEYS.NOTICIAS, JSON.stringify(updated));
  return updated;
};

// Servicios de Galería Multimedia
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
      id: `foto-${Date.now()}`,
      fecha: new Date().toLocaleDateString('es-CO', { month: 'long', year: 'numeric' })
    };
    updated = [newFoto, ...fotos];
  }
  localStorage.setItem(KEYS.GALERIA, JSON.stringify(updated));
  return updated;
};

export const deleteFoto = (id) => {
  const fotos = getFotos();
  const updated = fotos.filter(f => f.id !== id);
  localStorage.setItem(KEYS.GALERIA, JSON.stringify(updated));
  return updated;
};

// Servicios de Foros Magisteriales
export const getForos = () => {
  try {
    const data = localStorage.getItem(KEYS.FOROS);
    return data ? JSON.parse(data) : INITIAL_FOROS;
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
  localStorage.setItem(KEYS.FOROS, JSON.stringify(updated));
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
  localStorage.setItem(KEYS.FOROS, JSON.stringify(updated));
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
