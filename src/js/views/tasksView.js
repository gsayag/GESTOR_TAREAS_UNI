export function tasksView() {
  return `
    <section class="tasks-page">

      <!-- ENCABEZADO -->
      <div class="page-heading">

        <div>
          <p class="page-eyebrow">
            Gestión de actividades
          </p>

          <h2>Mis tareas</h2>

          <p class="page-description">
            Organiza y controla todas tus actividades pendientes.
          </p>
        </div>

        <button
          class="primary-button tasks-add-button"
          id="new-task-button"
        >
          + Nueva tarea
        </button>

      </div>


      <!-- BUSCADOR -->
      <div class="tasks-toolbar">

        <div class="search-box">

          <span class="search-icon">
            ⌕
          </span>

          <input
            type="search"
            id="task-search"
            placeholder="Buscar tareas..."
            autocomplete="off"
          >

        </div>


        <!-- FILTROS -->
        <div class="task-filters">

          <button
            class="filter-button active"
            data-filter="all"
          >
            Todas
            <span>4</span>
          </button>

          <button
            class="filter-button"
            data-filter="pending"
          >
            Pendientes
            <span>3</span>
          </button>

          <button
            class="filter-button"
            data-filter="completed"
          >
            Completadas
            <span>1</span>
          </button>

        </div>

      </div>


      <!-- RESULTADOS -->
      <div class="tasks-results-header">

        <div>
          <h3>Todas las tareas</h3>
          <p>4 actividades registradas</p>
        </div>

      </div>


      <!-- LISTA -->
      <div class="task-list">


        <!-- TAREA 1 -->
        <article class="task-card">

          <div class="task-main">

            <button
              class="task-check"
              aria-label="Marcar tarea como completada"
            ></button>

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
                Completar la interfaz responsive y revisar
                la navegación de la aplicación.
              </p>

              <div class="task-footer">

                <span class="task-date">
                  📅 22 de septiembre
                </span>

                <div class="task-actions">

                  <button
                    class="task-action-button"
                    aria-label="Editar tarea"
                  >
                    Editar
                  </button>

                  <button
                    class="task-action-button delete"
                    aria-label="Eliminar tarea"
                  >
                    Eliminar
                  </button>

                </div>

              </div>

            </div>

          </div>

        </article>


        <!-- TAREA 2 -->
        <article class="task-card">

          <div class="task-main">

            <button
              class="task-check"
              aria-label="Marcar tarea como completada"
            ></button>

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
                Resolver los ejercicios pendientes antes
                de la siguiente clase.
              </p>

              <div class="task-footer">

                <span class="task-date">
                  📅 24 de septiembre
                </span>

                <div class="task-actions">

                  <button class="task-action-button">
                    Editar
                  </button>

                  <button class="task-action-button delete">
                    Eliminar
                  </button>

                </div>

              </div>

            </div>

          </div>

        </article>


        <!-- TAREA 3 -->
        <article class="task-card">

          <div class="task-main">

            <button
              class="task-check"
              aria-label="Marcar tarea como completada"
            ></button>

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
                Repasar las diapositivas y organizar
                los apuntes de la semana.
              </p>

              <div class="task-footer">

                <span class="task-date">
                  📅 26 de septiembre
                </span>

                <div class="task-actions">

                  <button class="task-action-button">
                    Editar
                  </button>

                  <button class="task-action-button delete">
                    Eliminar
                  </button>

                </div>

              </div>

            </div>

          </div>

        </article>


        <!-- TAREA COMPLETADA -->
        <article class="task-card completed-task">

          <div class="task-main">

            <button
              class="task-check checked"
              aria-label="Tarea completada"
            >
              ✓
            </button>

            <div class="task-info">

              <div class="task-meta">

                <span class="category-badge">
                  Programación
                </span>

                <span class="priority medium">
                  Media
                </span>

              </div>

              <h4>
                Configurar proyecto Vite
              </h4>

              <p>
                Crear el proyecto y preparar la arquitectura inicial.
              </p>

              <div class="task-footer">

                <span class="task-date">
                  ✓ Completada
                </span>

                <div class="task-actions">

                  <button class="task-action-button">
                    Editar
                  </button>

                  <button class="task-action-button delete">
                    Eliminar
                  </button>

                </div>

              </div>

            </div>

          </div>

        </article>

      </div>

    </section>
  `
}