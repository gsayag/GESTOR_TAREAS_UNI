export function homeView() {
  return `
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

          <p>
            Estas son tus actividades más cercanas.
          </p>
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
  `
}