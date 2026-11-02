# AFEDETCO | Portal Web Oficial & CMS Administrativo
### Federación de Etnoeducadores de Colombia
**"Educación • Cultura • Identidad • Territorio"**

---

## 🌟 Descripción General del Proyecto

Este proyecto es un prototipo interactivo de alta fidelidad desarrollado a nivel **Full-Stack UI/UX** para la organización sindical de profesores y etnoeducadores **AFEDETCO** (Federación de Etnoeducadores de Colombia), inspirado en el modelo de comunicación de **FECODE** y basado exactamente en la identidad gráfica del perfil de Instagram oficial (`@afedetco`).

El sitio web está diseñado para resolver la pérdida de la web anterior del cliente, dotándolo de autonomía total para gestionar contenidos, fotos, comunicados y debates sin depender de intermediarios ni arriesgarse a caídas de servicio.

---

## 🚀 Cómo Ejecutar y Probar el Proyecto

El servidor de desarrollo ya se encuentra ejecutándose activamente en:
👉 **[http://localhost:3000](http://localhost:3000)**

Para ejecutarlo manualmente en cualquier momento:
```bash
cd "C:\Users\px\.gemini\antigravity\scratch\afedetco-portal"
npm run dev
```

Para generar la compilación de producción para **Vercel**:
```bash
npm run build
```

---

## 🔑 Credenciales del Panel de Administración (CMS)

El sistema cuenta con un panel privado accesible desde el botón **"Acceso Admin"** en la barra superior o en el pie de página, con **dos perfiles independientes** creados específicamente:

| Perfil | Correo Electrónico | Contraseña Demo | Rol y Permisos |
| :--- | :--- | :--- | :--- |
| **👤 Cliente (Directivo Sindical)** | `admin@afedetco.org` | `123` | Publicar/editar noticias, subir fotos a la galería, moderar foros y editar Misión/Visión. |
| **💻 Desarrollador (Tú - Webmaster)** | `developer@afedetco.org` | `123` | Control total, configuración de Firebase, copias de respaldo y guías de despliegue. |

*(En el modal de inicio de sesión incluimos botones de **"Acceso Rápido con 1 Clic"** para que le muestres el panel a tu cliente en segundos sin teclear contraseñas).*

---

## 💎 Módulos y Funcionalidades Incluidas

1. **Barra Superior Institucional:** Datos de personería jurídica (MinTrabajo), teléfonos, emails oficiales y redes.
2. **Ticker de Última Hora:** Cinta de noticias urgentes con avisos oficiales en tiempo real.
3. **Hero Principal Dinámico:** Carrusel de alta resolución con llamados a la acción ("Afiliarme", "Pliegos de Peticiones", "Estatuto").
4. **4 Tarjetas de Servicio Inmediato:** Afiliación, Pliegos y Estatutos, Foro y Voz Docente, y Veeduría de Salud FOMAG.
5. **Quiénes Somos (Misión & Visión 2030):**
   - Misión enfocada en la etnoeducación, dignificación salarial y combate a la precarización.
   - Visión prospectiva al 2030.
   - 4 Pilares Ideológicos: Identidad y Memoria, Defensa Sindical, Territorio y Paz, Unidad e Interculturalidad.
   - Cifras de impacto nacional (14.800+ afiliados, 27 departamentos).
   - Directorio del Comité Ejecutivo Nacional.
6. **Centro de Noticias y Comunicados:**
   - Filtros por categorías (Sindical, Estatutos, Género/Cultura, Salud, Pedagogía).
   - Buscador en tiempo real por palabras clave.
   - Lector modal de boletines completos con botón de compartir e imprimir.
7. **Galería Multimedia de Luchas y Asambleas:**
   - Filtros por territorio, movilizaciones, formación y encuentros.
   - Visor Lightbox a pantalla completa con pie de foto y localización geográfica.
8. **Foro Magisterial de Opinión:**
   - Hilos de debate comunitario.
   - Los maestros pueden comentar y proponer nuevos temas directamente.
9. **Circulares & Centro de Descarga de Documentos:**
   - Descarga interactiva de estatutos, circulares y formulario oficial de afiliación.
   - Guía infográfica paso a paso: ¿Cómo afiliarte a AFEDETCO en 4 pasos?
10. **Comunidad Digital & Redes Sociales:**
    - Réplica fidedigna del feed de **Instagram (@afedetco)** con fotos, likes, carruseles y biografía idéntica a la enviada por el cliente.
    - Integración de Facebook y canal de YouTube.
11. **Botón Flotante de WhatsApp:**
    - Widget emergente en la esquina inferior con mensajes predefinidos y conexión instantánea al número del sindicato (+57 312 849 5521).
12. **Panel CMS Administrativo:**
    - CRUD completo de Noticias (Crear, Editar, Destacar, Eliminar).
    - CRUD de Galería de fotos con imágenes predefinidas o URLs propias.
    - Moderación de hilos del foro.
    - Editor en vivo de Misión, Visión y datos de contacto.
    - Pestaña de Firebase & Vercel con guía de despliegue.

---

## ☁️ Despliegue en Vercel & Firebase

1. **Subir a GitHub:**
   Sube la carpeta `afedetco-portal` a un repositorio en tu GitHub.
2. **Conectar en Vercel:**
   - Ve a [vercel.com](https://vercel.com), presiona **"Add New Project"** e importa el repositorio.
   - Selecciona **Vite** como framework preset (lo detecta en automático).
   - Presiona **"Deploy"** y tendrás tu enlace en 40 segundos con SSL gratuito (ej. `https://afedetco.vercel.app`).
3. **Firebase Cloud (Opcional):**
   - El prototipo ya funciona de manera 100% persistente y sin caídas usando `localStorage`.
   - Cuando desees activar Firebase en vivo, sólo debes ingresar tus credenciales en el archivo `src/services/firebaseConfig.js` o en la pestaña **"Firebase & Vercel"** dentro del panel administrativo.
