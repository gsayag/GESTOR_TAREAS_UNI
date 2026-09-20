export function categoriesView() {
  return `
    <section class="categories-page">

      <!-- ENCABEZADO -->
      <div class="page-heading">

        <div>
          <p class="page-eyebrow">
            Organización
          </p>

          <h2>Categorías</h2>

          <p class="page-description">
            Organiza tus actividades por cursos o áreas de estudio.
          </p>
        </div>

        <button
          type="button"
          class="primary-button categories-add-button"
        >
          + Nueva categoría
        </button>

      </div>


      <!-- RESUMEN -->
      <section class="categories-summary">

        <article class="category-summary-card">

          <span class="category-summary-label">
            Categorías
          </span>

          <strong>5</strong>

          <p>
            Áreas registradas
          </p>

        </article>


        <article class="category-summary-card">

          <span class="category-summary-label">
            Total de tareas
          </span>

          <strong>14</strong>

          <p>
            Entre todas las categorías
          </p>

        </article>


        <article class="category-summary-card">

          <span class="category-summary-label">
            Mejor progreso
          </span>

          <strong>75%</strong>

          <p>
            Programación
          </p>

        </article>

      </section>


      <!-- TÍTULO DE SECCIÓN -->
      <div class="categories-section-header">

        <div>
          <h3>Mis categorías</h3>

          <p>
            Revisa las tareas y el avance de cada área.
          </p>
        </div>

      </div>


      <!-- GRID DE CATEGORÍAS -->
      <section class="categories-grid">


        <!-- DESARROLLO WEB -->
        <article class="category-card">

          <div class="category-card-header">

            <div class="category-icon development">
              &lt;/&gt;
            </div>

            <button
              type="button"
              class="category-options-button"
              aria-label="Opciones de categoría"
            >
              ⋮
            </button>

          </div>


          <div class="category-card-content">

            <h3>
              Desarrollo Web
            </h3>

            <p>
              Proyectos y actividades relacionadas con desarrollo web.
            </p>

          </div>


          <div class="category-stats">

            <div>
              <span>Tareas</span>
              <strong>3</strong>
            </div>

            <div>
              <span>Pendientes</span>
              <strong>2</strong>
            </div>

          </div>


          <div class="category-progress">

            <div class="category-progress-header">
              <span>Progreso</span>
              <strong>67%</strong>
            </div>

            <div class="progress-bar">
              <div
                class="progress-value"
                style="width: 67%"
              ></div>
            </div>

          </div>

        </article>


        <!-- MATEMÁTICA -->
        <article class="category-card">

          <div class="category-card-header">

            <div class="category-icon mathematics">
              ∑
            </div>

            <button
              type="button"
              class="category-options-button"
              aria-label="Opciones de categoría"
            >
              ⋮
            </button>

          </div>


          <div class="category-card-content">

            <h3>
              Matemática
            </h3>

            <p>
              Ejercicios, prácticas y actividades del curso.
            </p>

          </div>


          <div class="category-stats">

            <div>
              <span>Tareas</span>
              <strong>2</strong>
            </div>

            <div>
              <span>Pendientes</span>
              <strong>1</strong>
            </div>

          </div>


          <div class="category-progress">

            <div class="category-progress-header">
              <span>Progreso</span>
              <strong>50%</strong>
            </div>

            <div class="progress-bar">
              <div
                class="progress-value"
                style="width: 50%"
              ></div>
            </div>

          </div>

        </article>


        <!-- PROGRAMACIÓN -->
        <article class="category-card">

          <div class="category-card-header">

            <div class="category-icon programming">
              { }
            </div>

            <button
              type="button"
              class="category-options-button"
              aria-label="Opciones de categoría"
            >
              ⋮
            </button>

          </div>


          <div class="category-card-content">

            <h3>
              Programación
            </h3>

            <p>
              Laboratorios, proyectos y ejercicios de programación.
            </p>

          </div>


          <div class="category-stats">

            <div>
              <span>Tareas</span>
              <strong>4</strong>
            </div>

            <div>
              <span>Pendientes</span>
              <strong>1</strong>
            </div>

          </div>


          <div class="category-progress">

            <div class="category-progress-header">
              <span>Progreso</span>
              <strong>75%</strong>
            </div>

            <div class="progress-bar">
              <div
                class="progress-value"
                style="width: 75%"
              ></div>
            </div>

          </div>

        </article>


        <!-- UNIVERSIDAD -->
        <article class="category-card">

          <div class="category-card-header">

            <div class="category-icon university">
              U
            </div>

            <button
              type="button"
              class="category-options-button"
              aria-label="Opciones de categoría"
            >
              ⋮
            </button>

          </div>


          <div class="category-card-content">

            <h3>
              Universidad
            </h3>

            <p>
              Actividades académicas generales y fechas importantes.
            </p>

          </div>


          <div class="category-stats">

            <div>
              <span>Tareas</span>
              <strong>3</strong>
            </div>

            <div>
              <span>Pendientes</span>
              <strong>2</strong>
            </div>

          </div>


          <div class="category-progress">

            <div class="category-progress-header">
              <span>Progreso</span>
              <strong>33%</strong>
            </div>

            <div class="progress-bar">
              <div
                class="progress-value"
                style="width: 33%"
              ></div>
            </div>

          </div>

        </article>


        <!-- PERSONAL -->
        <article class="category-card">

          <div class="category-card-header">

            <div class="category-icon personal">
              P
            </div>

            <button
              type="button"
              class="category-options-button"
              aria-label="Opciones de categoría"
            >
              ⋮
            </button>

          </div>


          <div class="category-card-content">

            <h3>
              Personal
            </h3>

            <p>
              Actividades personales y organización de la semana.
            </p>

          </div>


          <div class="category-stats">

            <div>
              <span>Tareas</span>
              <strong>2</strong>
            </div>

            <div>
              <span>Pendientes</span>
              <strong>2</strong>
            </div>

          </div>


          <div class="category-progress">

            <div class="category-progress-header">
              <span>Progreso</span>
              <strong>0%</strong>
            </div>

            <div class="progress-bar">
              <div
                class="progress-value"
                style="width: 0%"
              ></div>
            </div>

          </div>

        </article>

      </section>

    </section>
  `
}