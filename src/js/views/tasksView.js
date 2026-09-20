import {
  getTasks,
  addTask,
  toggleTaskCompleted
} from '../tasks.js'

function getPriorityLabel(priority) {
  const labels = {
    high: 'Alta',
    medium: 'Media',
    low: 'Baja'
  }

  return labels[priority] || 'Sin prioridad'
}


function formatTaskDate(date) {
  const [year, month, day] = date.split('-')

  const formattedDate = new Date(
    Number(year),
    Number(month) - 1,
    Number(day)
  )

  return formattedDate.toLocaleDateString('es-PE', {
    day: 'numeric',
    month: 'long'
  })
}

export function tasksView() {
    const tasks = getTasks()

    const counters = getTaskCounters(tasks)

    const tasksHTML = createTasksList(tasks)
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
            <span>${counters.total}</span>
          </button>

          <button
            class="filter-button"
            data-filter="pending"
          >
            Pendientes
            <span></span>
          </button>

          <button
            class="filter-button"
            data-filter="completed"
          >
            Completadas
            <span>${counters.completed}</span>
          </button>

        </div>

      </div>


      <!-- RESULTADOS -->
      <div class="tasks-results-header">

        <div>
          <h3>Todas las tareas</h3>
          <p>${counters.total} actividades registradas</p>
        </div>

      </div>


      <div class="task-list">
        ${tasksHTML}
      </div>


        

    </section>
          <!-- MODAL NUEVA TAREA -->
      <dialog class="task-modal" id="task-modal">

        <div class="task-modal-content">

          <div class="modal-header">

            <div>
              <p class="page-eyebrow">
                Nueva actividad
              </p>

              <h2>Crear tarea</h2>

              <p>
                Agrega la información de tu nueva actividad.
              </p>
            </div>

            <button
              type="button"
              class="modal-close-button"
              id="close-task-modal"
              aria-label="Cerrar formulario"
            >
              ×
            </button>

          </div>


          <form id="task-form" class="task-form">

            <!-- TÍTULO -->
            <div class="form-group">

              <label for="task-title">
                Título
              </label>

              <input
                type="text"
                id="task-title"
                name="title"
                placeholder="Ej. Terminar informe"
                maxlength="80"
                required
              >

            </div>


            <!-- DESCRIPCIÓN -->
            <div class="form-group">

              <label for="task-description">
                Descripción
              </label>

              <textarea
                id="task-description"
                name="description"
                placeholder="Describe brevemente la actividad..."
                rows="4"
                maxlength="250"
              ></textarea>

            </div>


            <!-- DOS COLUMNAS -->
            <div class="form-row">

              <div class="form-group">

                <label for="task-category">
                  Categoría
                </label>

                <select
                  id="task-category"
                  name="category"
                  required
                >
                  <option value="">
                    Seleccionar categoría
                  </option>

                  <option value="Desarrollo Web">
                    Desarrollo Web
                  </option>

                  <option value="Matemática">
                    Matemática
                  </option>

                  <option value="Programación">
                    Programación
                  </option>

                  <option value="Universidad">
                    Universidad
                  </option>

                  <option value="Personal">
                    Personal
                  </option>

                </select>

              </div>


              <div class="form-group">

                <label for="task-priority">
                  Prioridad
                </label>

                <select
                  id="task-priority"
                  name="priority"
                  required
                >
                  <option value="">
                    Seleccionar prioridad
                  </option>

                  <option value="high">
                    Alta
                  </option>

                  <option value="medium">
                    Media
                  </option>

                  <option value="low">
                    Baja
                  </option>

                </select>

              </div>

            </div>


            <!-- FECHA -->
            <div class="form-group">

              <label for="task-date">
                Fecha límite
              </label>

              <input
                type="date"
                id="task-date"
                name="date"
                required
              >

            </div>


            <!-- BOTONES -->
            <div class="form-actions">

              <button
                type="button"
                class="secondary-button"
                id="cancel-task-button"
              >
                Cancelar
              </button>

              <button
                type="submit"
                class="primary-button form-submit-button"
              >
                Guardar tarea
              </button>

            </div>

          </form>

        </div>

      </dialog>
  `
}


export function initTasksView() {
  const newTaskButton = document.querySelector('#new-task-button')
  const modal = document.querySelector('#task-modal')
  const closeButton = document.querySelector('#close-task-modal')
  const cancelButton = document.querySelector('#cancel-task-button')
  const taskForm = document.querySelector('#task-form')
  const taskList = document.querySelector('.task-list')

  if (!modal) return


  // =============================
  // ABRIR MODAL
  // =============================

  newTaskButton?.addEventListener('click', () => {
    modal.showModal()
  })


  // =============================
  // CERRAR CON X
  // =============================

  closeButton?.addEventListener('click', () => {
    taskForm?.reset()

    modal.close()
  })


  // =============================
  // CERRAR CON CANCELAR
  // =============================

  cancelButton?.addEventListener('click', () => {
    taskForm?.reset()

    modal.close()
  })


  // =============================
  // CERRAR HACIENDO CLIC FUERA
  // =============================

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      taskForm?.reset()

      modal.close()
    }
  })


  // =============================
  // ACCIONES DE LAS TAREAS
  // =============================

  taskList?.addEventListener('click', (event) => {
    const actionButton = event.target.closest(
      '[data-action]'
    )

    if (!actionButton) return

    const action = actionButton.dataset.action

    const taskId = Number(
      actionButton.dataset.taskId
    )


    // MARCAR COMO COMPLETADA O PENDIENTE
    if (action === 'toggle') {
      toggleTaskCompleted(taskId)

      refreshTasksView()
    }
  })


  // =============================
  // CREAR NUEVA TAREA
  // =============================

  taskForm?.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(taskForm)

    const taskData = {
      title: formData.get('title').trim(),
      description: formData.get('description').trim(),
      category: formData.get('category'),
      priority: formData.get('priority'),
      date: formData.get('date')
    }


    addTask(taskData)

    refreshTasksView()

    taskForm.reset()

    modal.close()
  })
}



function createTaskCard(task) {
  const completedClass = task.completed
    ? 'completed-task'
    : ''

  const checkClass = task.completed
    ? 'task-check checked'
    : 'task-check'

  const checkContent = task.completed
    ? '✓'
    : ''

  const dateContent = task.completed
    ? '✓ Completada'
    : `📅 ${formatTaskDate(task.date)}`

  return `
    <article
      class="task-card ${completedClass}"
      data-task-id="${task.id}"
    >

      <div class="task-main">

        <button
          class="${checkClass}"
          data-action="toggle"
          data-task-id="${task.id}"
          aria-label="${
            task.completed
              ? 'Marcar tarea como pendiente'
              : 'Marcar tarea como completada'
          }"
        >
          ${checkContent}
        </button>


        <div class="task-info">

          <div class="task-meta">

            <span class="category-badge">
              ${task.category}
            </span>

            <span class="priority ${task.priority}">
              ${getPriorityLabel(task.priority)}
            </span>

          </div>


          <h4>
            ${task.title}
          </h4>


          <p>
            ${task.description}
          </p>


          <div class="task-footer">

            <span class="task-date">
              ${dateContent}
            </span>


            <div class="task-actions">

              <button
                class="task-action-button"
                data-action="edit"
                data-task-id="${task.id}"
              >
                Editar
              </button>

              <button
                class="task-action-button delete"
                data-action="delete"
                data-task-id="${task.id}"
              >
                Eliminar
              </button>

            </div>

          </div>

        </div>

      </div>

    </article>
  `
}

function createTasksList(tasks) {
  return tasks
    .map((task) => createTaskCard(task))
    .join('')
}

function getTaskCounters(tasks) {
  const completed = tasks.filter(
    (task) => task.completed
  ).length

  const pending = tasks.filter(
    (task) => !task.completed
  ).length

  return {
    total: tasks.length,
    completed,
    pending
  }
}

function refreshTasksView() {
  const tasks = getTasks()

  const counters = getTaskCounters(tasks)

  const taskList = document.querySelector('.task-list')

  const totalCounter = document.querySelector(
    '[data-filter="all"] span'
  )

  const pendingCounter = document.querySelector(
    '[data-filter="pending"] span'
  )

  const completedCounter = document.querySelector(
    '[data-filter="completed"] span'
  )

  const resultsText = document.querySelector(
    '.tasks-results-header p'
  )


  if (taskList) {
    taskList.innerHTML = createTasksList(tasks)
  }


  if (totalCounter) {
    totalCounter.textContent = counters.total
  }


  if (pendingCounter) {
    pendingCounter.textContent = counters.pending
  }


  if (completedCounter) {
    completedCounter.textContent = counters.completed
  }


  if (resultsText) {
    const label =
      counters.total === 1
        ? 'actividad registrada'
        : 'actividades registradas'

    resultsText.textContent =
      `${counters.total} ${label}`
  }
}