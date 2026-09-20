export function agendaView() {
  return `
    <section class="agenda-page">

      <!-- ENCABEZADO -->
      <div class="page-heading">

        <div>
          <p class="page-eyebrow">
            Planificación
          </p>

          <h2>Mi agenda</h2>

          <p class="page-description">
            Consulta tus próximas actividades organizadas por fecha.
          </p>
        </div>

      </div>


      <!-- MES -->
      <section class="agenda-calendar">

        <div class="agenda-calendar-header">

          <div>
            <span class="agenda-month-label">
              Calendario
            </span>

            <h3>Septiembre 2026</h3>
          </div>

          <button
            class="agenda-today-button"
            type="button"
          >
            Hoy
          </button>

        </div>


        <!-- DÍAS -->
        <div class="agenda-days">

          <button class="agenda-day active">
            <span>Dom</span>
            <strong>20</strong>
          </button>

          <button class="agenda-day">
            <span>Lun</span>
            <strong>21</strong>
          </button>

          <button class="agenda-day has-task">
            <span>Mar</span>
            <strong>22</strong>
          </button>

          <button class="agenda-day">
            <span>Mié</span>
            <strong>23</strong>
          </button>

          <button class="agenda-day has-task">
            <span>Jue</span>
            <strong>24</strong>
          </button>

          <button class="agenda-day">
            <span>Vie</span>
            <strong>25</strong>
          </button>

          <button class="agenda-day has-task">
            <span>Sáb</span>
            <strong>26</strong>
          </button>

        </div>

      </section>


      <!-- ACTIVIDADES -->
      <section class="agenda-content">

        <div class="agenda-section-header">
          <div>
            <h3>Próximas actividades</h3>

            <p>
              Tus tareas ordenadas cronológicamente.
            </p>
          </div>
        </div>


        <!-- HOY -->
        <div class="agenda-group">

          <div class="agenda-date">

            <span class="agenda-date-day">
              Hoy
            </span>

            <span>
              20 de septiembre
            </span>

          </div>


          <div class="agenda-events">

            <article class="agenda-event">

              <div class="agenda-event-time">
                09:00
              </div>

              <div class="agenda-event-line"></div>

              <div class="agenda-event-card">

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
                  Repasar las diapositivas y organizar los apuntes.
                </p>

              </div>

            </article>


            <article class="agenda-event">

              <div class="agenda-event-time">
                16:00
              </div>

              <div class="agenda-event-line"></div>

              <div class="agenda-event-card">

                <div class="task-meta">

                  <span class="category-badge">
                    Desarrollo Web
                  </span>

                  <span class="priority medium">
                    Media
                  </span>

                </div>

                <h4>
                  Avanzar proyecto Organiza+
                </h4>

                <p>
                  Continuar con las vistas principales de la aplicación.
                </p>

              </div>

            </article>

          </div>

        </div>


        <!-- 22 SEPTIEMBRE -->
        <div class="agenda-group">

          <div class="agenda-date">

            <span class="agenda-date-day">
              Martes
            </span>

            <span>
              22 de septiembre
            </span>

          </div>


          <div class="agenda-events">

            <article class="agenda-event">

              <div class="agenda-event-time">
                Todo el día
              </div>

              <div class="agenda-event-line"></div>

              <div class="agenda-event-card">

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
                  Completar la interfaz responsive y revisar la navegación.
                </p>

              </div>

            </article>

          </div>

        </div>


        <!-- 24 SEPTIEMBRE -->
        <div class="agenda-group">

          <div class="agenda-date">

            <span class="agenda-date-day">
              Jueves
            </span>

            <span>
              24 de septiembre
            </span>

          </div>


          <div class="agenda-events">

            <article class="agenda-event">

              <div class="agenda-event-time">
                18:00
              </div>

              <div class="agenda-event-line"></div>

              <div class="agenda-event-card">

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
                  Completar los problemas pendientes antes de clase.
                </p>

              </div>

            </article>

          </div>

        </div>


        <!-- 26 SEPTIEMBRE -->
        <div class="agenda-group">

          <div class="agenda-date">

            <span class="agenda-date-day">
              Sábado
            </span>

            <span>
              26 de septiembre
            </span>

          </div>


          <div class="agenda-events">

            <article class="agenda-event">

              <div class="agenda-event-time">
                10:00
              </div>

              <div class="agenda-event-line"></div>

              <div class="agenda-event-card">

                <div class="task-meta">

                  <span class="category-badge">
                    Personal
                  </span>

                  <span class="priority low">
                    Baja
                  </span>

                </div>

                <h4>
                  Organizar actividades de la semana
                </h4>

                <p>
                  Revisar las fechas importantes y preparar la siguiente semana.
                </p>

              </div>

            </article>

          </div>

        </div>

      </section>

    </section>
  `
}