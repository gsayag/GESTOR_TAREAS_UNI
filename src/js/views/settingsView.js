export function settingsView() {
  return `
    <section class="settings-page">

      <!-- ENCABEZADO -->
      <div class="page-heading">

        <div>
          <p class="page-eyebrow">
            Preferencias
          </p>

          <h2>Ajustes</h2>

          <p class="page-description">
            Personaliza Organiza+ y administra las preferencias
            de tu aplicación.
          </p>
        </div>

      </div>


      <div class="settings-layout">


        <!-- PERFIL -->
        <section class="settings-card">

          <div class="settings-card-header">

            <div class="settings-icon">
              U
            </div>

            <div>
              <h3>Perfil</h3>

              <p>
                Información básica del usuario.
              </p>
            </div>

          </div>


          <div class="settings-form">

            <div class="form-group">

              <label for="settings-name">
                Nombre
              </label>

              <input
                type="text"
                id="settings-name"
                value="Usuario"
                placeholder="Tu nombre"
              >

            </div>


            <div class="form-group">

              <label for="settings-email">
                Correo electrónico
              </label>

              <input
                type="email"
                id="settings-email"
                value="usuario@universidad.edu.pe"
                placeholder="correo@ejemplo.com"
              >

            </div>

          </div>

        </section>


        <!-- APARIENCIA -->
        <section class="settings-card">

          <div class="settings-card-header">

            <div class="settings-icon">
              ◐
            </div>

            <div>
              <h3>Apariencia</h3>

              <p>
                Configura cómo quieres visualizar la aplicación.
              </p>
            </div>

          </div>


          <div class="setting-option">

            <div>

              <strong>
                Modo oscuro
              </strong>

              <p>
                Utiliza una apariencia oscura en la aplicación.
              </p>

            </div>


            <label class="switch">

              <input
                type="checkbox"
                id="dark-mode-toggle"
              >

              <span class="switch-slider"></span>

            </label>

          </div>


          <div class="setting-option">

            <div>

              <strong>
                Vista compacta
              </strong>

              <p>
                Reduce el espacio entre las tarjetas y elementos.
              </p>

            </div>


            <label class="switch">

              <input
                type="checkbox"
                id="compact-mode-toggle"
              >

              <span class="switch-slider"></span>

            </label>

          </div>

        </section>


        <!-- NOTIFICACIONES -->
        <section class="settings-card">

          <div class="settings-card-header">

            <div class="settings-icon">
              🔔
            </div>

            <div>
              <h3>Recordatorios</h3>

              <p>
                Configura las alertas de tus actividades.
              </p>
            </div>

          </div>


          <div class="setting-option">

            <div>

              <strong>
                Recordar tareas pendientes
              </strong>

              <p>
                Mostrar avisos sobre actividades que aún
                no has completado.
              </p>

            </div>


            <label class="switch">

              <input
                type="checkbox"
                checked
              >

              <span class="switch-slider"></span>

            </label>

          </div>


          <div class="setting-option">

            <div>

              <strong>
                Avisos de fechas próximas
              </strong>

              <p>
                Avisar cuando una tarea esté cerca de su fecha límite.
              </p>

            </div>


            <label class="switch">

              <input
                type="checkbox"
                checked
              >

              <span class="switch-slider"></span>

            </label>

          </div>

        </section>


        <!-- DATOS -->
        <section class="settings-card">

          <div class="settings-card-header">

            <div class="settings-icon">
              ▤
            </div>

            <div>
              <h3>Datos de la aplicación</h3>

              <p>
                Administra la información almacenada localmente.
              </p>
            </div>

          </div>


          <div class="data-info">

            <div>

              <span>
                Almacenamiento
              </span>

              <strong>
                Navegador local
              </strong>

            </div>


            <p>
              Tus tareas se almacenarán en este dispositivo
              mediante localStorage.
            </p>

          </div>


          <button
            type="button"
            class="danger-button"
            id="clear-data-button"
          >
            Eliminar todos los datos
          </button>

        </section>

      </div>


      <!-- INFORMACIÓN -->
      <section class="settings-about">

        <div>

          <div class="about-logo">
            O+
          </div>

          <div>

            <strong>
              Organiza+
            </strong>

            <p>
              Gestor académico de tareas y actividades.
            </p>

          </div>

        </div>


        <span>
          Versión 1.0.0
        </span>

      </section>

    </section>
  `
}