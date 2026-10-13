(() => {
  const modal = document.getElementById('plot-modal')
  if (!modal) {
    return
  }

  const openers = [
    document.getElementById('btn-open-plot'),
    document.getElementById('btn-open-plot-footer'),
  ].filter(Boolean)

  const focusableSelector
    = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

  let lastFocus = null

  function openModal() {
    lastFocus = document.activeElement
    modal.hidden = false
    document.body.classList.add('modal-open')
    const closeBtn = modal.querySelector('[data-close].icon-btn')
    if (closeBtn) {
      closeBtn.focus()
    }
  }

  function closeModal() {
    modal.hidden = true
    document.body.classList.remove('modal-open')
    if (lastFocus && typeof lastFocus.focus === 'function') {
      lastFocus.focus()
    }
  }

  openers.forEach((btn) => {
    btn.addEventListener('click', openModal)
  })

  modal.querySelectorAll('[data-close]').forEach((el) => {
    el.addEventListener('click', closeModal)
  })

  document.addEventListener('keydown', (event) => {
    if (modal.hidden) {
      return
    }
    if (event.key === 'Escape') {
      closeModal()
      return
    }
    if (event.key !== 'Tab') {
      return
    }
    const nodes = [...modal.querySelectorAll(focusableSelector)].filter(
      el => !el.hasAttribute('disabled') && el.offsetParent !== null,
    )
    if (!nodes.length) {
      return
    }
    const first = nodes[0]
    const last = nodes[nodes.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
      return
    }
    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  })
})()
