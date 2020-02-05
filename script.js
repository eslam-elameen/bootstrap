$(".nav-link").on('click', function () {
  $(".nav-link").removeClass('active');
  $(this).addClass('active');
})


var ar = document.getElementById("ar")
var eng = document.getElementById("eng")
var lang = document.getElementById("lang")


ar.addEventListener('click', function(){
  lang.setAttribute("href","https://cdn.rtlcss.com/bootstrap/v4.2.1/css/bootstrap.min.css")
})

eng.addEventListener('click', function(){
  lang.setAttribute("href","./bootstrap-4.4.1-dist/css/bootstrap.min.css")
})
