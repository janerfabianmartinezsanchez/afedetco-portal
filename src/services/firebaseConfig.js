/**
 * Configuración de Producción para Firebase (Vercel & Cloud)
 * 
 * Para activar Firebase real:
 * 1. Crea un proyecto en https://console.firebase.google.com con el nombre "afedetco-portal"
 * 2. Habilita:
 *    - Authentication (Email/Password)
 *    - Cloud Firestore (Modo de producción o prueba)
 *    - Cloud Storage (Para subir imágenes de noticias y galería)
 * 3. Copia tus credenciales en el archivo .env.local o directamente en el Panel de Administración de este sitio.
 */

export const firebaseConfigTemplate = {
  apiKey: import.meta.env?.VITE_FIREBASE_API_KEY || "AIzaSy_TU_API_KEY_AQUI",
  authDomain: import.meta.env?.VITE_FIREBASE_AUTH_DOMAIN || "afedetco-portal.firebaseapp.com",
  projectId: import.meta.env?.VITE_FIREBASE_PROJECT_ID || "afedetco-portal",
  storageBucket: import.meta.env?.VITE_FIREBASE_STORAGE_BUCKET || "afedetco-portal.appspot.com",
  messagingSenderId: import.meta.env?.VITE_FIREBASE_MESSAGING_SENDER_ID || "1234567890",
  appId: import.meta.env?.VITE_FIREBASE_APP_ID || "1:1234567890:web:abcdef123456"
};

export const VERCEL_DEPLOY_GUIDE = `
# Instrucciones de Despliegue en Vercel

1. Sube este repositorio a tu cuenta de GitHub (ej. github.com/tu-usuario/afedetco-portal).
2. Entra a [https://vercel.com](https://vercel.com) e inicia sesión.
3. Haz clic en **"Add New Project"** y selecciona tu repositorio.
4. En **Framework Preset**, Vercel detectará automáticamente **Vite**.
5. (Opcional) Si ya tienes tu proyecto de Firebase, agrega las variables de entorno en Vercel:
   - VITE_FIREBASE_API_KEY
   - VITE_FIREBASE_AUTH_DOMAIN
   - VITE_FIREBASE_PROJECT_ID
   - VITE_FIREBASE_STORAGE_BUCKET
   - VITE_FIREBASE_MESSAGING_SENDER_ID
   - VITE_FIREBASE_APP_ID
6. Haz clic en **Deploy**. ¡En 40 segundos tendrás tu enlace oficial https://afedetco.vercel.app listo y con certificado SSL gratuito!
`;
