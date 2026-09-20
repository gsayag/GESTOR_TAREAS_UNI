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


      <!-- CONTENIDO -->
      <main id="main-content" class="main-content">

        <section class="welcome-section">

          <div>
            <p class="welcome-label">20 de septiembre</p>

            <h2>
              Buenos días 👋
            </h2>

            <p>
              Organiza tus actividades y aprovecha mejor tu día.
            </p>
          </div>

          <button class="primary-button">
            + Nueva tarea
          </button>

        </section>


        <!-- RESUMEN -->
        <section class="summary-grid">

          <article class="summary-card">
            <div class="summary-icon pending">
              ✓
            </div>

            <div>
              <span>Pendientes</span>
              <strong>5</strong>
            </div>
          </article>


          <article class="summary-card">
            <div class="summary-icon completed">
              ✓
            </div>

            <div>
              <span>Completadas</span>
              <strong>3</strong>
            </div>
          </article>


          <article class="summary-card">
            <div class="summary-icon today">
              ▣
            </div>

            <div>
              <span>Para hoy</span>
              <strong>2</strong>
            </div>
          </article>

        </section>


        <!-- PRÓXIMAS TAREAS -->
        <section class="tasks-section">

          <div class="section-header">

            <div>
              <h3>Próximas tareas</h3>
              <p>Estas son tus actividades más cercanas.</p>
            </div>

            <button class="text-button">
              Ver todas
            </button>

          </div>


          <div class="task-list">

            <article class="task-card">

              <div class="task-main">

                <div class="task-check"></div>

                <div class="task-info">

                  <div class="task-meta">
                    <span class="category-badge">
                      Desarrollo Web
                    </span>

                    <span class="priority high">
                      Alta
                    </span>
                  </div>

                  <h4>
                    Terminar proyecto web
                  </h4>

                  <p>
                    Completar la interfaz responsive de la aplicación.
                  </p>

                  <span class="task-date">
                    📅 22 de septiembre
                  </span>

                </div>

              </div>

            </article>


            <article class="task-card">

              <div class="task-main">

                <div class="task-check"></div>

                <div class="task-info">

                  <div class="task-meta">

                    <span class="category-badge">
                      Matemática
                    </span>

                    <span class="priority medium">
                      Media
                    </span>

                  </div>

                  <h4>
                    Resolver ejercicios
                  </h4>

                  <p>
                    Desarrollar los ejercicios pendientes de la semana.
                  </p>

                  <span class="task-date">
                    📅 24 de septiembre
                  </span>

                </div>

              </div>

            </article>


            <article class="task-card">

              <div class="task-main">

                <div class="task-check"></div>

                <div class="task-info">

                  <div class="task-meta">

                    <span class="category-badge">
                      Universidad
                    </span>

                    <span class="priority low">
                      Baja
                    </span>

                  </div>

                  <h4>
                    Revisar material del curso
                  </h4>

                  <p>
                    Repasar las diapositivas antes de la siguiente clase.
                  </p>

                  <span class="task-date">
                    📅 26 de septiembre
                  </span>

                </div>

              </div>

            </article>

          </div>

        </section>

      </main>

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