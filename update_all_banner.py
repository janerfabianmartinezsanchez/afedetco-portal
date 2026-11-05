import re

# 1. UPDATE Hero.jsx
hero_path = r'C:\Users\px\.gemini\antigravity\scratch\afedetco-portal\src\components\Hero.jsx'
with open(hero_path, 'r', encoding='utf-8') as f:
    hero = f.read()

hero = hero.replace(
    'export const Hero = ({ institutional, onNavigate, onSelectNoticia, noticias }) => {',
    'export const Hero = ({ institutional, onNavigate, onSelectNoticia, noticias, slides: propSlides }) => {'
)

# Replace const slides = [ ... ]; with defaultSlides and dynamic slides
old_slides_regex = r'const slides = \[\s*\{.*?\}\s*\];'
new_slides_code = '''const defaultSlides = [
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

  const slides = (propSlides && propSlides.length > 0) ? propSlides : defaultSlides;'''

hero = re.sub(r'const slides = \[\s*\{\s*badge:\s*"PLIEGO NACIONAL 2026".*?\}\s*\];', new_slides_code, hero, flags=re.DOTALL)

# Handle safe activeSlide and safe CTA click
hero = hero.replace('const activeSlide = slides[currentSlide];', 'const activeSlide = slides[currentSlide % slides.length] || slides[0];')
hero = hero.replace('onClick={activeSlide.action}', "onClick={() => { if (typeof activeSlide.action === 'function') activeSlide.action(); else onNavigate(activeSlide.actionKey || 'noticias'); }}")

with open(hero_path, 'w', encoding='utf-8') as f:
    f.write(hero)

print('Hero.jsx updated')

# 2. UPDATE App.jsx
app_path = r'C:\Users\px\.gemini\antigravity\scratch\afedetco-portal\src\App.jsx'
with open(app_path, 'r', encoding='utf-8') as f:
    app = f.read()

# Add getBannerSlides, saveBannerSlide, deleteBannerSlide to imports
app = app.replace(
    '  getInstitutionalData, \n  updateInstitutionalData,',
    '  getInstitutionalData, \n  updateInstitutionalData,\n  getBannerSlides,\n  saveBannerSlide,\n  deleteBannerSlide,'
).replace(
    '  getInstitutionalData, \r\n  updateInstitutionalData,',
    '  getInstitutionalData, \r\n  updateInstitutionalData,\r\n  getBannerSlides,\r\n  saveBannerSlide,\r\n  deleteBannerSlide,'
)

# Add bannerSlides state in App.jsx
banner_state = """  const [bannerSlides, setBannerSlides] = useState(getBannerSlides());

  const handleSaveBannerSlide = (slide) => {
    const updated = saveBannerSlide(slide);
    setBannerSlides(updated);
  };

  const handleDeleteBannerSlide = (id) => {
    const updated = deleteBannerSlide(id);
    setBannerSlides(updated);
  };
"""

app = app.replace(
    '  const [institutional, setInstitutional] = useState(getInstitutionalData());',
    '  const [institutional, setInstitutional] = useState(getInstitutionalData());\n' + banner_state
)

# Pass slides to <Hero />
app = app.replace(
    '          institutional={institutional}\n          onNavigate={handleNavigate}',
    '          institutional={institutional}\n          slides={bannerSlides}\n          onNavigate={handleNavigate}'
).replace(
    '          institutional={institutional}\r\n          onNavigate={handleNavigate}',
    '          institutional={institutional}\r\n          slides={bannerSlides}\r\n          onNavigate={handleNavigate}'
)

# Pass banner props to <AdminDashboard />
app = app.replace(
    '        institutional={institutional}\n        onUpdateInstitutional={handleUpdateInstitutional}',
    '        institutional={institutional}\n        onUpdateInstitutional={handleUpdateInstitutional}\n        bannerSlides={bannerSlides}\n        onSaveBannerSlide={handleSaveBannerSlide}\n        onDeleteBannerSlide={handleDeleteBannerSlide}'
).replace(
    '        institutional={institutional}\r\n        onUpdateInstitutional={handleUpdateInstitutional}',
    '        institutional={institutional}\r\n        onUpdateInstitutional={handleUpdateInstitutional}\r\n        bannerSlides={bannerSlides}\r\n        onSaveBannerSlide={handleSaveBannerSlide}\r\n        onDeleteBannerSlide={handleDeleteBannerSlide}'
)

with open(app_path, 'w', encoding='utf-8') as f:
    f.write(app)

print('App.jsx updated')

# 3. UPDATE AdminDashboard.jsx
admin_path = r'C:\Users\px\.gemini\antigravity\scratch\afedetco-portal\src\components\Admin\AdminDashboard.jsx'
with open(admin_path, 'r', encoding='utf-8') as f:
    admin = f.read()

# Add BannerSlideModal import
admin = admin.replace(
    "import { resetToDefaults, saveFirebaseSettings, getFirebaseSettings } from '../../services/storage';",
    "import { resetToDefaults, saveFirebaseSettings, getFirebaseSettings } from '../../services/storage';\nimport { BannerSlideModal } from './BannerSlideModal';"
)

# Add banner props to AdminDashboard params
admin = admin.replace(
    '  onUpdateInstitutional,\n  onPreviewNoticia\n}) => {',
    '  onUpdateInstitutional,\n  onPreviewNoticia,\n  bannerSlides,\n  onSaveBannerSlide,\n  onDeleteBannerSlide\n}) => {'
).replace(
    '  onUpdateInstitutional,\r\n  onPreviewNoticia\r\n}) => {',
    '  onUpdateInstitutional,\r\n  onPreviewNoticia,\r\n  bannerSlides,\r\n  onSaveBannerSlide,\r\n  onDeleteBannerSlide\r\n}) => {'
)

# Add local state for banner modal
admin = admin.replace(
    "  const [toastMessage, setToastMessage] = useState('');",
    "  const [toastMessage, setToastMessage] = useState('');\n  const [isBannerModalOpen, setIsBannerModalOpen] = useState(false);\n  const [bannerSlideToEdit, setBannerSlideToEdit] = useState(null);"
)

# Add Banner button in Sidebar between galeria and foros
banner_btn = """
          <button
            onClick={() => setActiveTab('banner')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'banner'
                ? 'bg-blue-900 text-white shadow'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <span className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Banner de Portada</span>
            </span>
            <span className="text-[10px] bg-cyan-950 text-cyan-300 border border-cyan-500/40 px-2 py-0.5 rounded-full font-bold">
              {bannerSlides ? bannerSlides.length : 0}
            </span>
          </button>
"""

admin = admin.replace(
    '          <button\n            onClick={() => setActiveTab(\'foros\')}',
    banner_btn + '\n          <button\n            onClick={() => setActiveTab(\'foros\')}'
).replace(
    '          <button\r\n            onClick={() => setActiveTab(\'foros\')}',
    banner_btn + '\r\n          <button\r\n            onClick={() => setActiveTab(\'foros\')}'
)

# Add Banner tab content in Main area
banner_tab_content = """
          {/* TAB BANNER: PORTADA Y CARRUSEL */}
          {activeTab === 'banner' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>Fotos del Banner Principal (Inicio)</span>
                    <span className="text-xs bg-cyan-900/60 text-cyan-300 border border-cyan-500/40 px-2.5 py-0.5 rounded-full font-bold">
                      Portada
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Aquí puedes eliminar fotos que ya no quieras y subir fotos nuevas directamente desde tu celular o computador.
                  </p>
                </div>
                <button
                  onClick={() => { setBannerSlideToEdit(null); setIsBannerModalOpen(true); }}
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-900/30 transition-all self-start"
                >
                  <Plus className="w-4 h-4" />
                  <span>Subir Nueva Foto al Banner</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bannerSlides && bannerSlides.map((slide, idx) => (
                  <div
                    key={slide.id || idx}
                    className="bg-slate-950 p-4 rounded-2xl border border-slate-800 hover:border-cyan-500/50 flex flex-col justify-between gap-4 transition-all group"
                  >
                    <div className="space-y-3">
                      <div className="relative h-44 rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
                        <img
                          src={slide.imagen}
                          alt={slide.titulo}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-2 left-2 bg-slate-950/90 text-cyan-300 text-[10px] font-black px-2.5 py-0.5 rounded border border-cyan-500/40 uppercase tracking-wide">
                          {slide.badge || `Foto ${idx + 1}`}
                        </span>
                        <span className="absolute top-2 right-2 bg-slate-950/90 text-amber-300 text-[10px] font-black px-2 py-0.5 rounded border border-amber-500/40">
                          Posición #{idx + 1}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-sm font-extrabold text-white leading-snug line-clamp-2">
                          {slide.titulo}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                          {slide.subtitulo}
                        </p>
                        {slide.pieFoto && (
                          <p className="text-[11px] text-slate-500 italic mt-1.5">
                            Pie de foto: {slide.pieFoto}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-900">
                      <span className="text-[11px] text-slate-500 font-semibold">
                        Botón: {slide.cta || 'Conocer Más'}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => { setBannerSlideToEdit(slide); setIsBannerModalOpen(true); }}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-950 text-blue-300 hover:bg-blue-900 text-xs font-bold transition-colors border border-blue-800/50"
                        >
                          <Edit className="w-3.5 h-3.5" />
                          <span>Editar</span>
                        </button>
                        <button
                          onClick={() => {
                            if (bannerSlides.length <= 1) {
                              alert('Debe quedar al menos una foto en el banner principal.');
                              return;
                            }
                            if (window.confirm('¿Deseas eliminar esta foto del Banner Principal?')) {
                              onDeleteBannerSlide(slide.id);
                              showToast('Foto eliminada del banner correctamente');
                            }
                          }}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-950/80 text-red-300 hover:bg-red-900 text-xs font-bold transition-colors border border-red-800/50"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Eliminar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
"""

admin = admin.replace(
    '          {/* TAB 1: NOTICIAS */}',
    banner_tab_content + '\n          {/* TAB 1: NOTICIAS */}'
)

# Render BannerSlideModal before closing div
modal_render = """
      <BannerSlideModal
        isOpen={isBannerModalOpen}
        onClose={() => setIsBannerModalOpen(false)}
        onSave={(data) => {
          onSaveBannerSlide(data);
          showToast(bannerSlideToEdit ? '¡Foto del banner actualizada!' : '¡Nueva foto publicada en el banner!');
        }}
        slideToEdit={bannerSlideToEdit}
      />
"""

admin = admin.replace(
    '    </div>\n  );\n};',
    modal_render + '\n    </div>\n  );\n};'
).replace(
    '    </div>\r\n  );\r\n};',
    modal_render + '\r\n    </div>\r\n  );\r\n};'
)

with open(admin_path, 'w', encoding='utf-8') as f:
    f.write(admin)

print('AdminDashboard.jsx updated')
