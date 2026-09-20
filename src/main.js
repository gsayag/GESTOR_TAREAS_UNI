import './styles/main.css'
import './styles/components.css'
import './styles/responsive.css'
import { initRouter } from './js/router.js'

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="app-layout">

    <!-- SIDEBAR PARA COMPUTADORA -->
    <aside class="sidebar">

      <div class="sidebar-logo">
        <div class="logo-box">O+</div>

        <div>
          <h1>Organiza+</h1>
          <span>Mi espacio</span>
        </div>
      </div>

      <nav class="sidebar-nav">

        <button class="nav-item active" data-page="home">
          <span class="nav-icon">⌂</span>
          <span>Inicio</span>
        </button>

        <button class="nav-item" data-page="tasks">
          <span class="nav-icon">✓</span>
          <span>Tareas</span>
        </button>

        <button class="nav-item" data-page="agenda">
          <span class="nav-icon">▣</span>
          <span>Agenda</span>
        </button>

        <button class="nav-item" data-page="categories">
          <span class="nav-icon">▦</span>
          <span>Categorías</span>
        </button>

        <button class="nav-item" data-page="stats">
          <span class="nav-icon">▥</span>
          <span>Progreso</span>
        </button>

        <button class="nav-item" data-page="settings">
          <span class="nav-icon">⚙</span>
          <span>Ajustes</span>
        </button>

      </nav>

      <div class="sidebar-footer">
        <p>Organiza mejor.</p>
        <span>Estudia tranquilo.</span>
      </div>

    </aside>


    <!-- ÁREA PRINCIPAL -->
    <div class="main-container">

      <!-- HEADER -->
      <header class="header">

        <div>
          <p class="header-subtitle">Mi organizador</p>
          <h2 id="page-title">Inicio</h2>
        </div>

        <div class="header-actions">

          <button class="notification-button">
            🔔
          </button>

          <div class="user-avatar">
            U
          </div>

        </div>

      </header>


      <!-- CONTENIDO DINÁMICO -->
      <main id="main-content" class="main-content"></main>

    </div>


    <!-- NAVEGACIÓN PARA CELULAR -->
    <nav class="mobile-nav">

      <button class="mobile-nav-item active" data-page="home">
        <span>⌂</span>
        <small>Inicio</small>
      </button>

      <button class="mobile-nav-item" data-page="tasks">
        <span>✓</span>
        <small>Tareas</small>
      </button>

      <button class="mobile-nav-item" data-page="agenda">
        <span>▣</span>
        <small>Agenda</small>
      </button>

      <button class="mobile-nav-item" data-page="stats">
        <span>▥</span>
        <small>Progreso</small>
      </button>

      <button class="mobile-nav-item" data-page="settings">
        <span>⚙</span>
        <small>Ajustes</small>
      </button>

    </nav>

  </div>
`

initRouter()