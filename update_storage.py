import os

file_path = r'C:\Users\px\.gemini\antigravity\scratch\afedetco-portal\src\services\storage.js'
with open(file_path, 'r', encoding='utf-8') as f:
    c = f.read()

# 1. Update imports
c = c.replace(
    '  INITIAL_USERS\n} from \'../data/initialData\';',
    '  INITIAL_USERS,\n  INITIAL_SLIDES\n} from \'../data/initialData\';'
).replace(
    '  INITIAL_USERS\r\n} from \'../data/initialData\';',
    '  INITIAL_USERS,\r\n  INITIAL_SLIDES\r\n} from \'../data/initialData\';'
)

# 2. Add BANNER to KEYS
c = c.replace(
    '  FIREBASE_CONFIG: \'fedetco_firebase_config_v7\'\n};',
    '  FIREBASE_CONFIG: \'fedetco_firebase_config_v7\',\n  BANNER: \'fedetco_banner_v8\'\n};'
).replace(
    '  FIREBASE_CONFIG: \'fedetco_firebase_config_v7\'\r\n};',
    '  FIREBASE_CONFIG: \'fedetco_firebase_config_v7\',\r\n  BANNER: \'fedetco_banner_v8\'\r\n};'
)

# 3. Add to initStorage
init_check = 'if (!localStorage.getItem(KEYS.BANNER)) {\n      localStorage.setItem(KEYS.BANNER, JSON.stringify(INITIAL_SLIDES));\n    }'
if 'KEYS.BANNER' not in c:
    c = c.replace(
        'localStorage.setItem(KEYS.DOCUMENTOS, JSON.stringify(INITIAL_DOCUMENTOS));\n    }',
        'localStorage.setItem(KEYS.DOCUMENTOS, JSON.stringify(INITIAL_DOCUMENTOS));\n    }\n    if (!localStorage.getItem(KEYS.BANNER)) {\n      localStorage.setItem(KEYS.BANNER, JSON.stringify(INITIAL_SLIDES));\n    }'
    ).replace(
        'localStorage.setItem(KEYS.DOCUMENTOS, JSON.stringify(INITIAL_DOCUMENTOS));\r\n    }',
        'localStorage.setItem(KEYS.DOCUMENTOS, JSON.stringify(INITIAL_DOCUMENTOS));\r\n    }\r\n    if (!localStorage.getItem(KEYS.BANNER)) {\r\n      localStorage.setItem(KEYS.BANNER, JSON.stringify(INITIAL_SLIDES));\r\n    }'
    )

# 4. Add helper functions at the end
banner_helpers = """

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
"""

if 'getBannerSlides' not in c:
    c = c.rstrip() + banner_helpers

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(c)

print('storage.js updated with banner functions!')
