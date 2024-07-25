const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit')
console.log("Hello world")
form.addEventListener('submit', (e) => {
  submitButton.disabled = true
  e.preventDefault()
  window.location.href = window.location.origin + '/success.html'
})