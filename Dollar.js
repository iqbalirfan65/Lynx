var baris = 3;
var polaBintang = "*";
var dolar = "$"
var polaSamaDengan = "=";
var hasil = "";

console.log(baris)
for (let index = 2; index < 5; index++) {

  if ((index % 2) == 0) {
    hasil = hasil.concat(polaSamaDengan);
  } else {
    hasil = hasil.concat(polaBintang);
  }

}
console.log("" + dolar + hasil + dolar);

hasil = "";

for (let index = 2; index < 3; index++) {
  if ((index % 2) == 0) {
    hasil = hasil.concat(polaSamaDengan);
  } else {
    hasil = hasil.concat(polaBintang);
  }

}
console.log(" " + dolar+ hasil+dolar);
console.log("  " + dolar);


//cepat 
var baris=16;
var polaBintang= "*";
var polaSamaDengan= "=";
var spasi =  "";
var dolar = "$";
for(let index = baris; index > 0; index--){

    var hasil="";

    var jmplhcell = (index*2)-1;
    //console.log(jmplhcell);

    for (let index2 = jmplhcell; index2 > 1; index2--){
        if ((index2 %2)==0){
         hasil = hasil.concat(polaSamaDengan);
        }else if((index2 /1)==jmplhcell){
          hasil = hasil.concat(dolar);
        }else{
         hasil = hasil.concat(polaBintang);
        } 
   
    }
    console.log(spasi+hasil+dolar)
    spasi += " ";
}