import {
  INITIAL_INSTITUTIONAL,
  INITIAL_NOTICIAS,
  INITIAL_GALERIA,
  INITIAL_FOROS,
  INITIAL_DOCUMENTOS,
  INITIAL_USERS,
  INITIAL_SLIDES
} from '../data/initialData';

const KEYS = {
  INSTITUTIONAL: 'fedetco_institutional_v8',
  NOTICIAS: 'fedetco_noticias_v7',
  GALERIA: 'fedetco_galeria_v7',
  FOROS: 'fedetco_foros_v7',
  DOCUMENTOS: 'fedetco_documentos_v7',
  SESSION: 'fedetco_session_v7',
  FIREBASE_CONFIG: 'fedetco_firebase_config_v7',
  BANNER: 'fedetco_banner_v8'
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
    if (!localStorage.getItem(KEYS.BANNER)) {
      localStorage.setItem(KEYS.BANNER, JSON.stringify(INITIAL_SLIDES));
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

// Servicios de Noticias con recuperación automática de versiones anteriores
export const getNoticias = () => {
  try {
    const data = localStorage.getItem(KEYS.NOTICIAS);
    let current = [];
    if (data) {
      try {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed) && parsed.length > 0) {
          current = parsed;
        }
      } catch (e) {
        console.error(e);
      }
    }

    // Rescatar noticias creadas por el usuario en versiones anteriores (v6, v5, etc.)
    const previousKeys = [
      'fedetco_noticias_v6',
      'fedetco_noticias_v5',
      'fedetco_noticias_v4',
      'fedetco_noticias_v3',
      'fedetco_noticias_v2',
      'fedetco_noticias_v1',
      'fedetco_noticias'
    ];

    let recovered = [];
    for (const pKey of previousKeys) {
      try {
        const pData = localStorage.getItem(pKey);
        if (pData) {
          const pList = JSON.parse(pData);
          if (Array.isArray(pList)) {
            const initialIds = INITIAL_NOTICIAS.map(n => n.id);
            const userPosts = pList.filter(n => n && n.id && !initialIds.includes(n.id));
            if (userPosts.length > 0) {
              recovered = [...recovered, ...userPosts];
            }
          }
        }
      } catch {
        // ignore
      }
    }

    if (current.length === 0) {
      current = INITIAL_NOTICIAS;
    }

    if (recovered.length > 0) {
      const currentIds = new Set(current.map(n => n.id));
      const newItems = recovered.filter(n => !currentIds.has(n.id));
      if (newItems.length > 0) {
        current = [...newItems, ...current];
        try {
          localStorage.setItem(KEYS.NOTICIAS, JSON.stringify(current));
        } catch (e) {
          console.error(e);
        }
      }
    }

    return current;
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
  const cleanEmail = (email || '').toLowerCase().trim();
  const cleanPass = (password || '').trim();
  const user = INITIAL_USERS.find(
    u => (u.email.toLowerCase().trim() === cleanEmail || u.emailAlternativo?.toLowerCase().trim() === cleanEmail) && 
         (u.password === cleanPass || u.passwords?.includes(cleanPass))
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

// Servicios de Banner Principal (Portada / Carrusel Hero)
export const getBannerSlides = () => {
  try {
    const data = localStorage.getItem(KEYS.BANNER);
    if (!data) return INITIAL_SLIDES;
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_SLIDES;
  } catch {
    return INITIAL_SLIDES;
  }
};

export const saveBannerSlide = (slide) => {
  try {
    const current = getBannerSlides();
    let updated;
    if (slide.id && current.some(s => s.id === slide.id)) {
      updated = current.map(s => s.id === slide.id ? { ...s, ...slide } : s);
    } else {
      updated = [{ ...slide, id: `slide-${Date.now()}` }, ...current];
    }
    localStorage.setItem(KEYS.BANNER, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error(e);
    return getBannerSlides();
  }
};

export const deleteBannerSlide = (id) => {
  try {
    const current = getBannerSlides();
    const updated = current.filter(s => s.id !== id);
    localStorage.setItem(KEYS.BANNER, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error(e);
    return getBannerSlides();
  }
};
