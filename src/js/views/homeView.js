import {
  getTaskStats,
  getUpcomingTasks
} from '../stats.js'


const priorityLabels = {
  high: 'Alta',
  medium: 'Media',
  low: 'Baja'
}


function formatDate(dateString) {
  const [year, month, day] = dateString
    .split('-')
    .map(Number)

  const date = new Date(
    year,
    month - 1,
    day
  )

  return date.toLocaleDateString(
    'es-PE',
    {
      day: 'numeric',
      month: 'long'
    }
  )
}


function getCurrentDateLabel() {
  const date = new Date()

  return date.toLocaleDateString(
    'es-PE',
    {
      day: 'numeric',
      month: 'long'
    }
  )
}


function createUpcomingTaskCard(task) {
  return `
    <article class="task-card">

      <div class="task-main">

        <div class="task-check"></div>

        <div class="task-info">

          <div class="task-meta">

            <span class="category-badge">
              ${task.category}
            </span>

            <span class="priority ${task.priority}">
              ${priorityLabels[task.priority]}
            </span>

          </div>

          <h4>
            ${task.title}
          </h4>

          <p>
            ${task.description}
          </p>

          <span class="task-date">
            📅 ${formatDate(task.date)}
          </span>

        </div>

      </div>

    </article>
  `
}


export function homeView() {
  const stats = getTaskStats()

  const upcomingTasks =
    getUpcomingTasks(3)


  const upcomingTasksHTML =
    upcomingTasks.length > 0
      ? upcomingTasks
          .map(createUpcomingTaskCard)
          .join('')
      : `
        <div class="tasks-empty-state">

          <div class="empty-state-icon">
            ✓
          </div>

          <h3>
            No tienes tareas próximas
          </h3>

          <p>
            Cuando registres nuevas actividades
            aparecerán aquí.
          </p>

        </div>
      `


  return `
    <section class="welcome-section">

      <div>

        <p class="welcome-label">
          ${getCurrentDateLabel()}
        </p>

        <h2>
          Buenos días 👋
        </h2>

        <p>
          Organiza tus actividades y aprovecha mejor tu día.
        </p>

      </div>

    </section>


    <section class="summary-grid">

      <article class="summary-card">

        <div class="summary-icon pending">
          !
        </div>

        <div>
          <span>Pendientes</span>

          <strong>
            ${stats.pending}
          </strong>
        </div>

      </article>


      <article class="summary-card">

        <div class="summary-icon completed">
          ✓
        </div>

        <div>
          <span>Completadas</span>

          <strong>
            ${stats.completed}
          </strong>
        </div>

      </article>


      <article class="summary-card">

        <div class="summary-icon today">
          ▣
        </div>

        <div>
          <span>Para hoy</span>

          <strong>
            ${stats.dueToday}
          </strong>
        </div>

      </article>

    </section>


    <section class="tasks-section">

      <div class="section-header">

        <div>

          <h3>
            Próximas tareas
          </h3>

          <p>
            Estas son tus actividades más cercanas.
          </p>

        </div>

      </div>


      <div class="task-list">

        ${upcomingTasksHTML}

      </div>

    </section>
  `
}