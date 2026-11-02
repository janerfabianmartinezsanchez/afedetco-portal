// Datos iniciales institucionales para AFEDETCO
// Federación de Etnoeducadores de Colombia
// Principios: Educación - Cultura - Identidad - Territorio

export const INITIAL_INSTITUTIONAL = {
  nombre: "AFEDETCO",
  subtitulo: "Federación de Etnoeducadores de Colombia",
  lema: "Educación • Cultura • Identidad • Territorio",
  descripcionCorta: "Unidos por los derechos laborales, prestacionales y pedagógicos de los etnoeducadores. Por una educación pública digna, con pertinencia étnica y memoria.",
  nit: "901.482.391-7",
  personeria: "Resolución MinTrabajo No. 0418 de 2018",
  afiliacionNacional: "Organización Sindical de Primer Grado con articulación pedagógica nacional FECODE",
  sedePrincipal: "Calle 34 # 19 - 28, Teusaquillo, Bogotá D.C. / Sede Regional Chocó - Quibdó",
  telefono: "+57 (601) 345-8920",
  whatsapp: "+57 316 904 0090",
  email: "contacto@afedetco.org",
  emailPrensa: "prensa@afedetco.org",
  mision: "Defender, dignificar y salvaguardar los derechos laborales, prestacionales, pedagógicos y culturales de los etnoeducadores de Colombia (afrocolombianos, negros, raizales, palenqueros e indígenas). Promovemos una política educativa pública de calidad, con pertinencia territorial, enfoque diferencial e interculturalidad, combatiendo la precarización laboral del magisterio en los territorios históricamente marginados.",
  vision: "Para el año 2030, AFEDETCO será la organización sindical y pedagógica líder e imprescindible en Colombia y referente en Latinoamérica en la defensa de la etnoeducación y la soberanía cultural comunitaria, habiendo logrado la consolidación del Estatuto Docente Etnoeducador con plenas garantías salariales, estabilidad en propiedad y autonomía pedagógica en los planes de etnodesarrollo.",
  principios: [
    {
      titulo: "Identidad y Memoria",
      desc: "Reconocer los saberes ancestrales y la historia de resistencia de nuestros pueblos como eje central de la enseñanza.",
      icono: "Sparkles"
    },
    {
      titulo: "Defensa Sindical",
      desc: "Lucha incansable por salarios justos, concurso especial con enfoque étnico, salud digna (FOMAG) y estabilidad laboral.",
      icono: "Shield"
    },
    {
      titulo: "Territorio y Paz",
      desc: "Las escuelas y colegios de nuestras comunidades son territorios sagrados de paz y vida digna.",
      icono: "MapPin"
    },
    {
      titulo: "Unidad e Interculturalidad",
      desc: "Articulación fraternal con FECODE, las centrales obreras y las organizaciones de base comunitaria.",
      icono: "Users"
    }
  ],
  estadisticas: [
    { label: "Etnoeducadores Afiliados", valor: "14,800+" },
    { label: "Departamentos con Seccionales", valor: "27" },
    { label: "Años de Trayectoria y Lucha", valor: "16" },
    { label: "Convenios y Mesas de Negociación", valor: "42" }
  ]
};

export const INITIAL_NOTICIAS = [
  {
    id: "noticia-1",
    titulo: "AFEDETCO radica pliego especial de peticiones ante el Ministerio de Educación Nacional",
    categoria: "Sindical",
    fecha: "28 de Octubre, 2026",
    resumen: "Se exige la homologación salarial inmediata, nombramiento en propiedad de más de 8.000 etnoeducadores y garantías de seguridad en zonas rurales.",
    contenido: `En una histórica jornada de articulación nacional, la delegación oficial de la Federación de Etnoeducadores de Colombia (AFEDETCO), acompañada por representantes de las comunidades del Pacífico, la Costa Caribe y la Amazonía, radicó formalmente el Pliego Nacional de Exigencias ante el despacho del Ministerio de Educación y el Ministerio del Trabajo.

Puntos claves del pliego radicado:
1. Concurso especial docente con enfoque etnoeducativo y respeto al derecho de consulta previa.
2. Inclusión inmediata de los etnoeducadores nombrados por contrato en planta definitiva y régimen prestacional del Decreto 2277 y 1278 según corresponda.
3. Auditoría exhaustiva y veeduría sindical al nuevo modelo de salud del FOMAG en las regiones periféricas.
4. Presupuesto directo para la infraestructura de las escuelas comunitarias y bilingües.

"No permitiremos más dilaciones. El maestro que enseña en la selva, en el río y en el palenque merece la misma dignidad y salario que cualquier docente de las grandes capitales", afirmó la directiva sindical al salir de la sede ministerial.`,
    imagen: "/images/afedetco-marcha-bogota.jpg",
    autor: "Equipo de Comunicaciones AFEDETCO",
    leido: "5 min de lectura",
    destacada: true
  },
  {
    id: "noticia-2",
    titulo: "Balance del Comité Ejecutivo: Avances en la Mesa de Concertación sobre el Estatuto Docente Etnoeducador",
    categoria: "Estatutos y Leyes",
    fecha: "25 de Octubre, 2026",
    resumen: "Conoce el documento técnico consensuado sobre la homologación de títulos ancestrales y el reconocimiento pedagógico comunitario.",
    contenido: `Tras 18 sesiones ininterrumpidas de la Subcomisión Pedagógica de AFEDETCO con los delegados técnicos del Gobierno Nacional, se dio a conocer el balance preliminar del articulado que busca consagrar la Carrera Especial Etnoeducadora.

Entre los logros principales destaca la validación de la experiencia y formación propia comunitaria como criterio de ascenso en el escalafón docente, saldando una deuda histórica de más de 30 años con los sabedores y maestros rurales.

Se convoca a todas las subdirectivas departamentales a asamblea informativa virtual y presencial este próximo viernes para socializar las actas.`,
    imagen: "/images/afedetco-comite-ejecutivo.jpg",
    autor: "Secretaría General AFEDETCO",
    leido: "4 min de lectura",
    destacada: true
  },
  {
    id: "noticia-3",
    titulo: "Encuentro Nacional de Mujeres Etnoeducadoras: Liderazgo, Sabiduría y Transformación",
    categoria: "Género y Cultura",
    fecha: "20 de Octubre, 2026",
    resumen: "Más de 400 maestras líderes de Colombia se dieron cita en Cali para debatir sobre el rol de la mujer en la transmisión del patrimonio inmaterial.",
    contenido: `El lema del encuentro 'Mujeres transformadoras de territorio' resonó con fuerza durante tres días de ponencias, círculos de la palabra y talleres de etno-pedagogía.

Las conclusiones del encuentro fueron recopiladas en la 'Declaración de Cali', que exige al Estado colombiano protección integral frente a las amenazas que enfrentan las lideresas docentes en zonas de conflicto y mayor acceso a maestrías y becas con enfoque étnico.`,
    imagen: "/images/afedetco-lideres-evento.jpg",
    autor: "Comisión de Género AFEDETCO",
    leido: "3 min de lectura",
    destacada: false
  },
  {
    id: "noticia-4",
    titulo: "Circular 012: Veeduría al servicio de salud del FOMAG y entrega de medicamentos en regiones",
    categoria: "Salud Docente",
    fecha: "15 de Octubre, 2026",
    resumen: "Habilitamos el canal de atención urgente de AFEDETCO para reportar fallas en citas con especialistas y suministro de medicinas.",
    contenido: `Ante las reiteradas quejas en las seccionales de Chocó, Nariño, Guajira, Bolívar y Córdoba por demoras en la asignación de citas especializadas y dispensación de fórmulas, AFEDETCO instala una mesa de veeduría permanente.

Invitamos a todo maestro o beneficiario a diligenciar el formulario de reporte de inconsistencias en nuestro portal o a través de la línea de WhatsApp sindical para llevar los casos con nombre propio a la Fiduprevisora.`,
    imagen: "/images/afedetco-asamblea-auditorio.jpg",
    autor: "Comité de Salud y Seguridad Social",
    leido: "3 min de lectura",
    destacada: false
  },
  {
    id: "noticia-5",
    titulo: "Convocatoria: III Concurso Nacional de Experiencias Pedagógicas Significativas",
    categoria: "Pedagogía",
    fecha: "10 de Octubre, 2026",
    resumen: "Premio a los mejores proyectos de rescate lingüístico, matemáticas comunitarias y medicina tradicional en el aula.",
    contenido: `La Secretaría Pedagógica de AFEDETCO invita a todas las instituciones etnoeducativas del país a postular sus proyectos didácticos. Habrá incentivos económicos, dotación de material bibliográfico y publicación en la Revista Científica de Etnoeducación.`,
    imagen: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    autor: "Secretaría de Asuntos Pedagógicos",
    leido: "4 min de lectura",
    destacada: false
  }
];

export const INITIAL_GALERIA = [
  {
    id: "foto-real-1",
    titulo: "Gran Marcha Magisterial en Bogotá: AFEDETCO y FECODE en las Calles",
    lugar: "Bogotá D.C. - Carrera 7a",
    fecha: "Octubre 2026",
    categoria: "Movilizaciones",
    url: "/images/afedetco-marcha-bogota.jpg",
    descripcion: "Directivos y delegados de AFEDETCO marchando firmes junto al magisterio nacional por la dignificación del etnoeducador."
  },
  {
    id: "foto-real-2",
    titulo: "Comité Ejecutivo Nacional en Encuentro de Liderazgo Sindical",
    lugar: "Centro de Convenciones, Bogotá",
    fecha: "Septiembre 2026",
    categoria: "Institucional",
    url: "/images/afedetco-comite-ejecutivo.jpg",
    descripcion: "Líderes de AFEDETCO en sesión de trabajo y articulación gremial por el pliego nacional de peticiones."
  },
  {
    id: "foto-real-3",
    titulo: "Delegación Nacional de Etnoeducadores en Asamblea Intercultural",
    lugar: "Sede Sindical Nacional",
    fecha: "Octubre 2026",
    categoria: "Encuentros",
    url: "/images/afedetco-lideres-evento.jpg",
    descripcion: "Maestros representantes de los pueblos afrocolombianos e indígenas consolidando propuestas pedagógicas propias."
  },
  {
    id: "foto-real-4",
    titulo: "Plenaria y Audiencia de AFEDETCO en el Auditorio Central",
    lugar: "Auditorio Nacional de Negociación",
    fecha: "Agosto 2026",
    categoria: "Formación",
    url: "/images/afedetco-asamblea-auditorio.jpg",
    descripcion: "Comisión negociadora de AFEDETCO presente en la audiencia de concertación sobre garantías laborales."
  },
  {
    id: "foto-1",
    titulo: "Taller de Lingüística y Lenguas Maternas",
    lugar: "Quibdó, Chocó",
    fecha: "Septiembre 2026",
    categoria: "Formación",
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80",
    descripcion: "Capacitación a docentes en la preservación de lenguas nativas y dialectos ancestrales."
  },
  {
    id: "foto-2",
    titulo: "Escuela de Formación Sindical Juvenil",
    lugar: "Cartagena de Indias, Bolívar",
    fecha: "Agosto 2026",
    categoria: "Territorio",
    url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80",
    descripcion: "El relevo generacional de los líderes que defenderán la educación pública."
  }
];

export const INITIAL_FOROS = [
  {
    id: "foro-1",
    titulo: "¿Cómo avanza la implementación del Concurso Docente Etnoeducativo en tu departamento?",
    autor: "Prof. Wilmer Mosquera (Chocó)",
    fecha: "Hace 2 días",
    categoria: "Concursos y Carrera",
    respuestas: 18,
    vistas: 340,
    contenido: "Colegas, abro este hilo para que cada seccional comente si la Secretaría de Educación local ya socializó la circular de vacantes o si siguen existiendo trabas con los nombramientos temporales. En el Atrato aún faltan 40 docentes por legalizar.",
    comentarios: [
      { id: "c-1", autor: "Lic. Sandra Palacios", fecha: "Ayer a las 3:15 pm", texto: "Totalmente de acuerdo Wilmer. En Tumaco estamos en alerta porque la secretaría pretende contratar por tercerización OPS cuando la norma es clara sobre el nombramiento provisional preferencial." },
      { id: "c-2", autor: "Mg. Camilo Cuenú", fecha: "Hoy a las 9:00 am", texto: "El sindicato AFEDETCO ya tiene radicado el derecho de petición. Debemos enviar las actas de cada colegio para consolidar la prueba." }
    ]
  },
  {
    id: "foro-2",
    titulo: "Evaluación y aportes a la propuesta del nuevo Estatuto Docente Unificado",
    autor: "Dra. Carmen Rosa Mina (Cauca)",
    fecha: "Hace 5 días",
    categoria: "Debate Político",
    respuestas: 24,
    vistas: 512,
    contenido: "¿Consideran que los títulos propios y la experiencia comunitaria están suficientemente blindados en el borrador entregado al Ministerio? Dejen sus reflexiones pedagógicas aquí.",
    comentarios: [
      { id: "c-3", autor: "Prof. Héctor Rentería", fecha: "Hace 3 días", texto: "Debemos insistir en la homologación salarial directa al nivel 3 del 1278 para quienes tienen posgrados e investigaciones etnográficas publicadas." }
    ]
  },
  {
    id: "foro-3",
    titulo: "Situación de Salud FOMAG: Clínicas y Entrega de Medicamentos",
    autor: "Delegado Sindical Antioquia",
    fecha: "Hace 1 semana",
    categoria: "Salud y Seguridad Social",
    respuestas: 31,
    vistas: 670,
    contenido: "Espacio para compilar inconsistencias de la red prestadora en municipios lejanos. Reporta nombre de IPS, municipio y fecha del incumplimiento para anexarlo a la veeduría nacional.",
    comentarios: [
      { id: "c-4", autor: "Lic. María Elena Viveros", fecha: "Hace 4 días", texto: "En Urabá las citas de odontología especializada están a más de 3 meses. Urge intervención de la Supersalud." }
    ]
  }
];

export const INITIAL_DOCUMENTOS = [
  {
    id: "doc-1",
    titulo: "Pliego Nacional de Peticiones AFEDETCO - Mineducación 2026",
    tipo: "PDF Oficial",
    tamano: "3.4 MB",
    fecha: "Octubre 2026",
    categoria: "Pliegos y Negociación",
    urlDescarga: "#descargar-pliego"
  },
  {
    id: "doc-2",
    titulo: "Estatutos Sindicales Vigentes AFEDETCO",
    tipo: "Documento Legal",
    tamano: "1.8 MB",
    fecha: "Aprobados 2024",
    categoria: "Institucional",
    urlDescarga: "#descargar-estatutos"
  },
  {
    id: "doc-3",
    titulo: "Formato Único de Afiliación Sindical y Libranza de Aportes",
    tipo: "Formulario Editable",
    tamano: "450 KB",
    fecha: "Actualizado 2026",
    categoria: "Afiliaciones",
    urlDescarga: "#descargar-formulario"
  },
  {
    id: "doc-4",
    titulo: "Circular No. 008: Orientaciones sobre Traslados y Seguridad Territorial",
    tipo: "Circular Directiva",
    tamano: "1.2 MB",
    fecha: "Septiembre 2026",
    categoria: "Circulares",
    urlDescarga: "#descargar-circular"
  }
];

export const INITIAL_INSTAGRAM_POSTS = [
  {
    id: "ig-1",
    likes: 284,
    comments: 39,
    caption: "¡EN LAS CALLES POR LA DIGNIDAD DOCENTE! Delegación de AFEDETCO marchando hombro a hombro con el magisterio nacional en Bogotá. #EducacionConMemoria #AFEDETCO #FECODE",
    imagen: "/images/afedetco-marcha-bogota.jpg",
    tipo: "carrusel"
  },
  {
    id: "ig-2",
    likes: 315,
    comments: 48,
    caption: "Comité Ejecutivo Nacional de AFEDETCO. Liderazgo, unidad y compromiso inquebrantable por la estabilidad laboral de los etnoeducadores en Colombia.",
    imagen: "/images/afedetco-comite-ejecutivo.jpg",
    tipo: "foto"
  },
  {
    id: "ig-3",
    likes: 247,
    comments: 32,
    caption: "Encuentro Nacional Intercultural de Etnoeducadores. Nuestra memoria, raíces y saberes comunitarios son la base de la transformación educativa.",
    imagen: "/images/afedetco-lideres-evento.jpg",
    tipo: "foto"
  },
  {
    id: "ig-4",
    likes: 219,
    comments: 26,
    caption: "Sesión plenaria y audiencia técnica en el auditorio central. Construyendo la propuesta del Estatuto Docente Etnoeducador.",
    imagen: "/images/afedetco-asamblea-auditorio.jpg",
    tipo: "video"
  },
  {
    id: "ig-5",
    likes: 185,
    comments: 23,
    caption: "Encuentro formativo de etnodesarrollo y currículos propios. Transformando la educación desde la raíz comunitaria.",
    imagen: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
    tipo: "carrusel"
  },
  {
    id: "ig-6",
    likes: 298,
    comments: 41,
    caption: "Asamblea Nacional de Delegados Sindicales. La voz del maestro rural se escucha con firmeza en cada rincón del país.",
    imagen: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=600&q=80",
    tipo: "foto"
  }
];

export const INITIAL_USERS = [
  {
    id: "user-cliente",
    nombre: "Prof. Jeiler (Líder Directivo AFEDETCO)",
    email: "admin@afedetco.org",
    password: "123", // Simplificado para que el cliente acceda fácilmente en demo
    rol: "Administrador Institucional",
    avatar: "/images/afedetco-comite-ejecutivo.jpg",
    permisos: ["noticias", "galeria", "comunicados", "foros"]
  },
  {
    id: "user-dev",
    nombre: "Webmaster / Desarrollador",
    email: "developer@afedetco.org",
    password: "123", // Simplificado para pruebas
    rol: "Super Administrador (Full Stack)",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    permisos: ["todas", "firebase", "configuracion", "respaldo"]
  }
];
