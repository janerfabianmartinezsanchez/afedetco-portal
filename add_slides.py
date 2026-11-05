import os

file_path = r'C:\Users\px\.gemini\antigravity\scratch\afedetco-portal\src\data\initialData.js'
with open(file_path, 'r', encoding='utf-8') as f:
    c = f.read()

slides_code = """

export const INITIAL_SLIDES = [
  {
    id: "slide-1",
    badge: "PLIEGO NACIONAL 2026",
    badgeColor: "bg-cyan-600 text-white border border-cyan-400/40",
    titulo: "Por la Dignidad y Estabilidad de los Etnoeducadores en Colombia",
    subtitulo: "Radicamos el pliego de peticiones ante el Ministerio de Educación exigiendo concurso especial, nombramiento en propiedad y homologación salarial.",
    imagen: "/images/fedetco-marcha-bogota.jpg",
    pieFoto: "Delegación FEDETCO marchando en Bogotá por la dignidad y derechos del magisterio etnoeducador",
    cta: "Conocer el Pliego de Peticiones",
    actionKey: "noticias"
  },
  {
    id: "slide-2",
    badge: "MEMORIA RAIZAL, NEGRA Y PALENQUERA",
    badgeColor: "bg-teal-600 text-white border border-teal-400/40",
    titulo: "Cultura, Identidad y Territorio: Saberes que Transforman la Escuela",
    subtitulo: "Reconocemos y defendemos el valor de la etnoeducación de las comunidades negras, afrocolombianas, raizales y palenqueras en los archipiélagos, costas, ríos, palenques y territorios ancestrales de toda la nación.",
    imagen: "/images/fedetco-lideres-evento.jpg",
    pieFoto: "Liderazgo magisterial de las comunidades negras, raizales y palenqueras de Colombia",
    cta: "Explorar Nuestra Misión y Visión",
    actionKey: "mision-vision"
  },
  {
    id: "slide-3",
    badge: "UNIDAD SINDICAL",
    badgeColor: "bg-sky-600 text-white border border-sky-400/40",
    titulo: "¡Súmate a FEDETCO! Tu Voz y Tus Derechos Tienen Respaldo Legal",
    subtitulo: "Organización magisterial en 27 departamentos con asesoría jurídica, defensa salarial, veeduría FOMAG y representación nacional permanente.",
    imagen: "/images/fedetco-comite-ejecutivo.jpg",
    pieFoto: "Comité Ejecutivo Nacional de FEDETCO en sesión permanente",
    cta: "Afiliarme Ahora Mismo",
    actionKey: "documentos"
  }
];
"""

if 'INITIAL_SLIDES' not in c:
    c = c.rstrip() + slides_code
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(c)
    print('INITIAL_SLIDES added successfully')
else:
    print('Already exists')
