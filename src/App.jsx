import React, { useState, useEffect } from 'react';
import { 
  initStorage, 
  getInstitutionalData, 
  updateInstitutionalData,
  getNoticias, 
  saveNoticia, 
  deleteNoticia,
  getFotos, 
  saveFoto, 
  deleteFoto,
  getForos, 
  saveForo, 
  addComentarioForo,
  getCurrentSession, 
  logoutUser 
} from './services/storage';

import { INITIAL_DOCUMENTOS } from './data/initialData';

// Componentes del Portal
import { Navbar } from './components/Navbar';
import { Ticker } from './components/Ticker';
import { Hero } from './components/Hero';
import { MisionVision } from './components/MisionVision';
import { Noticias } from './components/Noticias';
import { Galeria } from './components/Galeria';
import { Foro } from './components/Foro';
import { Documentos } from './components/Documentos';
import { RedesSociales } from './components/RedesSociales';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { ArticleModal } from './components/ArticleModal';
import { LightboxModal } from './components/LightboxModal';

// Componentes del Panel de Administración CMS
import { AdminLoginModal } from './components/Admin/AdminLoginModal';
import { AdminDashboard } from './components/Admin/AdminDashboard';
import { NoticiaFormModal } from './components/Admin/NoticiaFormModal';
import { FotoFormModal } from './components/Admin/FotoFormModal';

export function App() {
  // Inicialización de Almacenamiento Local
  useEffect(() => {
    initStorage();
  }, []);

  // Estados de Datos
  const [institutional, setInstitutional] = useState(getInstitutionalData());
  const [noticias, setNoticias] = useState(getNoticias());
  const [fotos, setFotos] = useState(getFotos());
  const [foros, setForos] = useState(getForos());
  const [documentos] = useState(INITIAL_DOCUMENTOS);
  const [currentUser, setCurrentUser] = useState(getCurrentSession());

  // Estados de Modales y Navegación
  const [activeSection, setActiveSection] = useState('hero');
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [adminDashboardOpen, setAdminDashboardOpen] = useState(false);
  const [noticiaModalOpen, setNoticiaModalOpen] = useState(false);
  const [fotoModalOpen, setFotoModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [editingArticle, setEditingArticle] = useState(null);

  // Navegación con scroll suave
  const handleNavigate = (targetId) => {
    setActiveSection(targetId);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Manejadores de Autenticación
  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    setAdminDashboardOpen(true);
  };

  const handleLogout = () => {
    logoutUser();
    setCurrentUser(null);
    setAdminDashboardOpen(false);
  };

  // Manejadores de Noticias
  const handleSaveNoticia = (noticiaData) => {
    const updated = saveNoticia(noticiaData);
    setNoticias(updated);
    setEditingArticle(null);
  };

  const handleDeleteNoticia = (id) => {
    const updated = deleteNoticia(id);
    setNoticias(updated);
  };

  const handleOpenEditNoticia = (noticia) => {
    setEditingArticle(noticia);
    setNoticiaModalOpen(true);
  };

  // Manejadores de Galería
  const handleSaveFoto = (fotoData) => {
    const updated = saveFoto(fotoData);
    setFotos(updated);
  };

  const handleDeleteFoto = (id) => {
    const updated = deleteFoto(id);
    setFotos(updated);
  };

  // Manejadores de Foros
  const handleAddComentario = (foroId, comentario) => {
    const updated = addComentarioForo(foroId, comentario);
    setForos(updated);
  };

  const handleCreateForo = (nuevoForo) => {
    const updated = saveForo(nuevoForo);
    setForos(updated);
  };

  // Manejador Institucional
  const handleUpdateInstitutional = (updatedData) => {
    const saved = updateInstitutionalData(updatedData);
    setInstitutional(saved);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-amber-500 selection:text-white">
      
      {/* 1. Barra de Navegación Principal */}
      <Navbar
        institutional={institutional}
        currentUser={currentUser}
        onOpenLogin={() => setLoginModalOpen(true)}
        onOpenAdmin={() => setAdminDashboardOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* 2. Ticker de Comunicados Urgentes */}
      <Ticker
        noticias={noticias}
        onSelectNoticia={(art) => setSelectedArticle(art)}
      />

      <main className="flex-1">
        {/* 3. Hero interactivo con carrusel y accesos directos */}
        <Hero
          institutional={institutional}
          onNavigate={handleNavigate}
          onSelectNoticia={(art) => setSelectedArticle(art)}
          noticias={noticias}
        />

        {/* 4. Misión y Visión con principios */}
        <MisionVision
          institutional={institutional}
        />

        {/* 5. Noticias y Comunicados de Prensa */}
        <Noticias
          noticias={noticias}
          onSelectNoticia={(art) => setSelectedArticle(art)}
          onNewNoticia={() => {
            setEditingArticle(null);
            setNoticiaModalOpen(true);
          }}
          currentUser={currentUser}
        />

        {/* 6. Galería Multimedia */}
        <Galeria
          fotos={fotos}
          onSelectFoto={(foto) => setSelectedPhoto(foto)}
          onNewFoto={() => setFotoModalOpen(true)}
          currentUser={currentUser}
        />

        {/* 7. Foro Magisterial de Opinión */}
        <Foro
          foros={foros}
          onAddComentario={handleAddComentario}
          onCreateForo={handleCreateForo}
        />

        {/* 8. Circulares, Documentos Oficiales & Afiliación */}
        <Documentos
          documentos={documentos}
          institutional={institutional}
        />

        {/* 9. Redes Sociales (Instagram @afedetco exacto a la imagen del cliente, Facebook, YouTube) */}
        <RedesSociales
          institutional={institutional}
        />
      </main>

      {/* 10. Pie de Página */}
      <Footer
        institutional={institutional}
        onNavigate={handleNavigate}
        onOpenLogin={() => setLoginModalOpen(true)}
        currentUser={currentUser}
        onOpenAdmin={() => setAdminDashboardOpen(true)}
      />

      {/* 11. Botón Flotante de WhatsApp */}
      <WhatsAppWidget
        institutional={institutional}
      />

      {/* 12. Modales del Usuario */}
      {selectedArticle && (
        <ArticleModal
          noticia={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}

      {selectedPhoto && (
        <LightboxModal
          foto={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}

      {/* 13. Modales Administrativos (CMS) */}
      <AdminLoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      <AdminDashboard
        isOpen={adminDashboardOpen}
        onClose={() => setAdminDashboardOpen(false)}
        currentUser={currentUser}
        onLogout={handleLogout}
        noticias={noticias}
        onSaveNoticia={handleSaveNoticia}
        onDeleteNoticia={handleDeleteNoticia}
        onOpenNoticiaForm={() => {
          setEditingArticle(null);
          setNoticiaModalOpen(true);
        }}
        onOpenEditNoticia={handleOpenEditNoticia}
        fotos={fotos}
        onSaveFoto={handleSaveFoto}
        onDeleteFoto={handleDeleteFoto}
        onOpenFotoForm={() => setFotoModalOpen(true)}
        foros={foros}
        institutional={institutional}
        onUpdateInstitutional={handleUpdateInstitutional}
        onPreviewNoticia={(art) => setSelectedArticle(art)}
      />

      <NoticiaFormModal
        isOpen={noticiaModalOpen}
        onClose={() => {
          setNoticiaModalOpen(false);
          setEditingArticle(null);
        }}
        onSave={handleSaveNoticia}
        editingNoticia={editingArticle}
      />

      <FotoFormModal
        isOpen={fotoModalOpen}
        onClose={() => setFotoModalOpen(false)}
        onSave={handleSaveFoto}
      />

    </div>
  );
}

export default App;
