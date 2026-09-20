import {
  getTaskStats
} from '../stats.js'

import {
  getCategories
} from '../categories.js'


function createCategoryProgress(category) {
  return `
    <div class="stats-category-row">

      <div class="stats-category-header">

        <div>

          <span
            class="stats-category-icon ${category.className}"
          >
            ${category.icon}
          </span>

          <div>

            <strong>
              ${category.name}
            </strong>

            <span>
              ${category.completed}
              de
              ${category.total}
              tareas
            </span>

          </div>

        </div>


        <strong>
          ${category.progress}%
        </strong>

      </div>


      <div class="progress-bar">

        <div
          class="progress-value"
          style="width: ${category.progress}%"
        ></div>

      </div>

    </div>
  `
}


export function statsView() {
  const stats =
    getTaskStats()

  const categories =
    getCategories()

  const categoriesHTML =
    categories
      .map(createCategoryProgress)
      .join('')


  return `
    <section class="stats-page">

      <div class="page-heading">

        <div>

          <p class="page-eyebrow">
            Rendimiento
          </p>

          <h2>
            Mi progreso
          </h2>

          <p class="page-description">
            Revisa el avance de tus actividades
            y tu rendimiento general.
          </p>

        </div>

      </div>


      <section class="stats-summary">

        <article class="stats-summary-card">

          <div class="stats-summary-icon completed">
            ✓
          </div>

          <div>

            <span>
              Completadas
            </span>

            <strong>
              ${stats.completed}
            </strong>

            <p>
              de ${stats.total} tareas
            </p>

          </div>

        </article>


        <article class="stats-summary-card">

          <div class="stats-summary-icon pending">
            !
          </div>

          <div>

            <span>
              Pendientes
            </span>

            <strong>
              ${stats.pending}
            </strong>

            <p>
              actividades por terminar
            </p>

          </div>

        </article>


        <article class="stats-summary-card">

          <div class="stats-summary-icon overdue">
            ×
          </div>

          <div>

            <span>
              Vencidas
            </span>

            <strong>
              ${stats.overdue}
            </strong>

            <p>
              requieren atención
            </p>

          </div>

        </article>

      </section>


      <section class="stats-main-grid">


        <article
          class="stats-panel general-progress-panel"
        >

          <div class="stats-panel-header">

            <div>

              <h3>
                Progreso general
              </h3>

              <p>
                Actividades completadas hasta
                el momento.
              </p>

            </div>

          </div>


          <div class="general-progress-content">

            <div
              class="progress-circle"
              style="
                background:
                  conic-gradient(
                    #5b5be8 0%
                    ${stats.progress}%,
                    #edf0f5
                    ${stats.progress}%
                    100%
                  );
              "
            >

              <div class="progress-circle-inner">

                <strong>
                  ${stats.progress}%
                </strong>

                <span>
                  Completado
                </span>

              </div>

            </div>


            <div class="general-progress-info">

              <div class="progress-info-row">

                <div>
                  <span
                    class="status-dot completed"
                  ></span>

                  Completadas
                </div>

                <strong>
                  ${stats.completed}
                </strong>

              </div>


              <div class="progress-info-row">

                <div>
                  <span
                    class="status-dot pending"
                  ></span>

                  Pendientes
                </div>

                <strong>
                  ${stats.pending}
                </strong>

              </div>


              <div class="progress-info-row">

                <div>
                  <span
                    class="status-dot overdue"
                  ></span>

                  Vencidas
                </div>

                <strong>
                  ${stats.overdue}
                </strong>

              </div>

            </div>

          </div>

        </article>


        <article class="stats-panel">

          <div class="stats-panel-header">

            <div>

              <h3>
                Resumen actual
              </h3>

              <p>
                Estado general de tus actividades.
              </p>

            </div>

          </div>


          <div class="weekly-stats">

            <div class="weekly-stat">

              <span>
                Total de tareas
              </span>

              <strong>
                ${stats.total}
              </strong>

            </div>


            <div class="weekly-stat">

              <span>
                Prioridad alta
              </span>

              <strong>
                ${stats.highPriority}
              </strong>

            </div>


            <div class="weekly-stat">

              <span>
                Para hoy
              </span>

              <strong>
                ${stats.dueToday}
              </strong>

            </div>

          </div>


          <div class="weekly-message">

            <span>
              ↑
            </span>

            <div>

              <strong>
                ${stats.progress}% completado
              </strong>

              <p>
                Continúa organizando tus actividades
                para avanzar con tus pendientes.
              </p>

            </div>

          </div>

        </article>

      </section>


      <section
        class="stats-panel category-progress-panel"
      >

        <div class="stats-panel-header">

          <div>

            <h3>
              Progreso por categoría
            </h3>

            <p>
              Revisa el avance individual
              de cada área.
            </p>

          </div>

        </div>


        <div class="category-progress-list">

          ${categoriesHTML}

        </div>

      </section>

    </section>
  `
}