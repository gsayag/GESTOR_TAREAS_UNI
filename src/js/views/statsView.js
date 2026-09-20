export function statsView() {
  return `
    <section class="stats-page">

      <!-- ENCABEZADO -->
      <div class="page-heading">

        <div>
          <p class="page-eyebrow">
            Rendimiento
          </p>

          <h2>Mi progreso</h2>

          <p class="page-description">
            Revisa el avance de tus actividades y tu rendimiento general.
          </p>
        </div>

      </div>


      <!-- TARJETAS DE RESUMEN -->
      <section class="stats-summary">

        <article class="stats-summary-card">

          <div class="stats-summary-icon completed">
            ✓
          </div>

          <div>
            <span>Completadas</span>
            <strong>9</strong>
            <p>de 14 tareas</p>
          </div>

        </article>


        <article class="stats-summary-card">

          <div class="stats-summary-icon pending">
            !
          </div>

          <div>
            <span>Pendientes</span>
            <strong>5</strong>
            <p>actividades por terminar</p>
          </div>

        </article>


        <article class="stats-summary-card">

          <div class="stats-summary-icon overdue">
            ×
          </div>

          <div>
            <span>Vencidas</span>
            <strong>1</strong>
            <p>requiere atención</p>
          </div>

        </article>

      </section>


      <!-- BLOQUE PRINCIPAL -->
      <section class="stats-main-grid">


        <!-- PROGRESO GENERAL -->
        <article class="stats-panel general-progress-panel">

          <div class="stats-panel-header">

            <div>
              <h3>Progreso general</h3>

              <p>
                Actividades completadas hasta el momento.
              </p>
            </div>

          </div>


          <div class="general-progress-content">

            <div class="progress-circle">

              <div class="progress-circle-inner">

                <strong>64%</strong>

                <span>
                  Completado
                </span>

              </div>

            </div>


            <div class="general-progress-info">

              <div class="progress-info-row">

                <div>
                  <span class="status-dot completed"></span>
                  Completadas
                </div>

                <strong>9</strong>

              </div>


              <div class="progress-info-row">

                <div>
                  <span class="status-dot pending"></span>
                  Pendientes
                </div>

                <strong>5</strong>

              </div>


              <div class="progress-info-row">

                <div>
                  <span class="status-dot overdue"></span>
                  Vencidas
                </div>

                <strong>1</strong>

              </div>

            </div>

          </div>

        </article>


        <!-- RESUMEN SEMANAL -->
        <article class="stats-panel">

          <div class="stats-panel-header">

            <div>
              <h3>Esta semana</h3>

              <p>
                Resumen de tus actividades recientes.
              </p>
            </div>

          </div>


          <div class="weekly-stats">

            <div class="weekly-stat">

              <span>
                Tareas creadas
              </span>

              <strong>
                6
              </strong>

            </div>


            <div class="weekly-stat">

              <span>
                Tareas completadas
              </span>

              <strong>
                4
              </strong>

            </div>


            <div class="weekly-stat">

              <span>
                Cumplimiento
              </span>

              <strong>
                67%
              </strong>

            </div>

          </div>


          <div class="weekly-message">

            <span>
              ↑
            </span>

            <div>

              <strong>
                Buen progreso
              </strong>

              <p>
                Completaste más de la mitad de tus tareas de esta semana.
              </p>

            </div>

          </div>

        </article>

      </section>


      <!-- PROGRESO POR CATEGORÍA -->
      <section class="stats-panel category-progress-panel">

        <div class="stats-panel-header">

          <div>

            <h3>
              Progreso por categoría
            </h3>

            <p>
              Revisa el avance individual de cada área.
            </p>

          </div>

        </div>


        <div class="category-progress-list">


          <!-- DESARROLLO WEB -->
          <div class="stats-category-row">

            <div class="stats-category-header">

              <div>
                <span class="stats-category-icon development">
                  &lt;/&gt;
                </span>

                <div>
                  <strong>
                    Desarrollo Web
                  </strong>

                  <span>
                    2 de 3 tareas
                  </span>
                </div>
              </div>

              <strong>
                67%
              </strong>

            </div>


            <div class="progress-bar">

              <div
                class="progress-value"
                style="width: 67%"
              ></div>

            </div>

          </div>


          <!-- PROGRAMACIÓN -->
          <div class="stats-category-row">

            <div class="stats-category-header">

              <div>
                <span class="stats-category-icon programming">
                  { }
                </span>

                <div>
                  <strong>
                    Programación
                  </strong>

                  <span>
                    3 de 4 tareas
                  </span>
                </div>
              </div>

              <strong>
                75%
              </strong>

            </div>


            <div class="progress-bar">

              <div
                class="progress-value"
                style="width: 75%"
              ></div>

            </div>

          </div>


          <!-- MATEMÁTICA -->
          <div class="stats-category-row">

            <div class="stats-category-header">

              <div>
                <span class="stats-category-icon mathematics">
                  ∑
                </span>

                <div>
                  <strong>
                    Matemática
                  </strong>

                  <span>
                    1 de 2 tareas
                  </span>
                </div>
              </div>

              <strong>
                50%
              </strong>

            </div>


            <div class="progress-bar">

              <div
                class="progress-value"
                style="width: 50%"
              ></div>

            </div>

          </div>


          <!-- UNIVERSIDAD -->
          <div class="stats-category-row">

            <div class="stats-category-header">

              <div>
                <span class="stats-category-icon university">
                  U
                </span>

                <div>
                  <strong>
                    Universidad
                  </strong>

                  <span>
                    1 de 3 tareas
                  </span>
                </div>
              </div>

              <strong>
                33%
              </strong>

            </div>


            <div class="progress-bar">

              <div
                class="progress-value"
                style="width: 33%"
              ></div>

            </div>

          </div>


          <!-- PERSONAL -->
          <div class="stats-category-row">

            <div class="stats-category-header">

              <div>
                <span class="stats-category-icon personal">
                  P
                </span>

                <div>
                  <strong>
                    Personal
                  </strong>

                  <span>
                    2 de 2 tareas
                  </span>
                </div>
              </div>

              <strong>
                100%
              </strong>

            </div>


            <div class="progress-bar">

              <div
                class="progress-value"
                style="width: 100%"
              ></div>

            </div>

          </div>

        </div>

      </section>

    </section>
  `
}