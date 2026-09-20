import {
  getPendingTasksSorted
} from '../stats.js'


const priorityLabels = {
  high: 'Alta',
  medium: 'Media',
  low: 'Baja'
}


function getDateKey(date) {
  const year = date.getFullYear()

  const month = String(
    date.getMonth() + 1
  ).padStart(2, '0')

  const day = String(
    date.getDate()
  ).padStart(2, '0')

  return `${year}-${month}-${day}`
}


function parseTaskDate(dateString) {
  const [year, month, day] =
    dateString.split('-').map(Number)

  return new Date(
    year,
    month - 1,
    day
  )
}


function capitalize(text) {
  return (
    text.charAt(0).toUpperCase() +
    text.slice(1)
  )
}


function createCalendarDays(tasks) {
  const today = new Date()

  const days = []


  for (let index = 0; index < 7; index++) {
    const date = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + index
    )

    const dateKey = getDateKey(date)

    const hasTask = tasks.some(
      (task) => task.date === dateKey
    )

    const dayName = capitalize(
      date
        .toLocaleDateString(
          'es-PE',
          {
            weekday: 'short'
          }
        )
        .replace('.', '')
    )


    days.push(`
      <button
        class="agenda-day
        ${index === 0 ? 'active' : ''}
        ${hasTask ? 'has-task' : ''}"
        type="button"
      >
        <span>
          ${dayName}
        </span>

        <strong>
          ${date.getDate()}
        </strong>

      </button>
    `)
  }


  return days.join('')
}


function createAgendaGroups(tasks) {
  if (tasks.length === 0) {
    return `
      <div class="tasks-empty-state">

        <div class="empty-state-icon">
          📅
        </div>

        <h3>
          No tienes actividades pendientes
        </h3>

        <p>
          Las próximas tareas aparecerán
          automáticamente en tu agenda.
        </p>

      </div>
    `
  }


  const groups = {}


  tasks.forEach((task) => {
    if (!groups[task.date]) {
      groups[task.date] = []
    }

    groups[task.date].push(task)
  })


  return Object.entries(groups)
    .map(([date, dateTasks]) => {

      const parsedDate =
        parseTaskDate(date)

      const formattedDate =
        capitalize(
          parsedDate.toLocaleDateString(
            'es-PE',
            {
              weekday: 'long',
              day: 'numeric',
              month: 'long'
            }
          )
        )


      const eventsHTML = dateTasks
        .map((task) => {
          return `
            <article class="agenda-event">

              <div class="agenda-event-time">
                Tarea
              </div>

              <div class="agenda-event-line"></div>

              <div class="agenda-event-card">

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

              </div>

            </article>
          `
        })
        .join('')


      return `
        <div class="agenda-group">

          <div class="agenda-date">

            <span class="agenda-date-day">
              ${formattedDate}
            </span>

          </div>

          <div class="agenda-events">
            ${eventsHTML}
          </div>

        </div>
      `
    })
    .join('')
}


export function agendaView() {
  const tasks =
    getPendingTasksSorted()

  const today =
    new Date()

  const monthLabel =
    capitalize(
      today.toLocaleDateString(
        'es-PE',
        {
          month: 'long',
          year: 'numeric'
        }
      )
    )


  return `
    <section class="agenda-page">

      <div class="page-heading">

        <div>

          <p class="page-eyebrow">
            Planificación
          </p>

          <h2>
            Mi agenda
          </h2>

          <p class="page-description">
            Consulta tus próximas actividades
            organizadas por fecha.
          </p>

        </div>

      </div>


      <section class="agenda-calendar">

        <div class="agenda-calendar-header">

          <div>

            <span class="agenda-month-label">
              Calendario
            </span>

            <h3>
              ${monthLabel}
            </h3>

          </div>

        </div>


        <div class="agenda-days">

          ${createCalendarDays(tasks)}

        </div>

      </section>


      <section class="agenda-content">

        <div class="agenda-section-header">

          <div>

            <h3>
              Próximas actividades
            </h3>

            <p>
              Tus tareas pendientes ordenadas
              cronológicamente.
            </p>

          </div>

        </div>


        ${createAgendaGroups(tasks)}

      </section>

    </section>
  `
}