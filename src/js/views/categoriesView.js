import {
  getCategories,
  getCategoriesSummary
} from '../categories.js'


function createCategoryCard(category) {
  return `
    <article class="category-card">

      <div class="category-card-header">

        <div
          class="category-icon ${category.className}"
        >
          ${category.icon}
        </div>

      </div>


      <div class="category-card-content">

        <h3>
          ${category.name}
        </h3>

        <p>
          ${category.description}
        </p>

      </div>


      <div class="category-stats">

        <div>
          <span>Tareas</span>

          <strong>
            ${category.total}
          </strong>
        </div>


        <div>
          <span>Pendientes</span>

          <strong>
            ${category.pending}
          </strong>
        </div>

      </div>


      <div class="category-progress">

        <div class="category-progress-header">

          <span>
            Progreso
          </span>

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

    </article>
  `
}


export function categoriesView() {
  const categories =
    getCategories()

  const summary =
    getCategoriesSummary()


  const categoriesHTML =
    categories
      .map(createCategoryCard)
      .join('')


  return `
    <section class="categories-page">

      <div class="page-heading">

        <div>

          <p class="page-eyebrow">
            Organización
          </p>

          <h2>
            Categorías
          </h2>

          <p class="page-description">
            Organiza tus actividades por cursos
            o áreas de estudio.
          </p>

        </div>

      </div>


      <section class="categories-summary">

        <article class="category-summary-card">

          <span class="category-summary-label">
            Categorías
          </span>

          <strong>
            ${summary.totalCategories}
          </strong>

          <p>
            Áreas disponibles
          </p>

        </article>


        <article class="category-summary-card">

          <span class="category-summary-label">
            Total de tareas
          </span>

          <strong>
            ${summary.totalTasks}
          </strong>

          <p>
            Entre todas las categorías
          </p>

        </article>


        <article class="category-summary-card">

          <span class="category-summary-label">
            Mejor progreso
          </span>

          <strong>
            ${summary.bestProgress}%
          </strong>

          <p>
            ${summary.bestCategory}
          </p>

        </article>

      </section>


      <div class="categories-section-header">

        <div>

          <h3>
            Mis categorías
          </h3>

          <p>
            Revisa las tareas y el avance de cada área.
          </p>

        </div>

      </div>


      <section class="categories-grid">

        ${categoriesHTML}

      </section>

    </section>
  `
}