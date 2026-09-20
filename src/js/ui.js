export function showToast(
  message,
  type = 'success'
) {
  let container = document.querySelector(
    '.toast-container'
  )

  if (!container) {
    container = document.createElement('div')

    container.className = 'toast-container'

    container.setAttribute(
      'aria-live',
      'polite'
    )

    document.body.appendChild(container)
  }


  const toast = document.createElement('div')

  toast.className = `app-toast ${type}`

  toast.textContent = message


  container.appendChild(toast)


  setTimeout(() => {
    toast.classList.add('toast-visible')
  }, 10)


  setTimeout(() => {
    toast.classList.remove('toast-visible')

    setTimeout(() => {
      toast.remove()
    }, 250)
  }, 2500)
}