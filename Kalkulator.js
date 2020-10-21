function tampillayar(nilai){
  var lyr = document.getElementById("layar");
  var hasil = lyr.value;
  lyr.value = hasil+nilai;
  }
  function clean(){
    document.getElementById("layar").value="";
  }
  function backspace() {
    var lyr = document.getElementById("layar").value;
    document.getElementById("layar").value = lyr.substring(
      0,
      lyr.length - 1
    );
  }

  function equal() {
    var lyr = document.getElementById("layar").value;
    if (lyr) {
      document.getElementById("layar").value = eval(lyr);
    }
  }