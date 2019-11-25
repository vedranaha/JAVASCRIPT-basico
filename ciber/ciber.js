// Ejercicio 1 //
console.log("hola mundo");

// Ejercicio 2 //
alert("me llamo vedrana");

// Ejercicio 3 //
var nombre="Vedrana ";
var apellido="Hasanbasic";
console.log(nombre + apellido);

// Ejercicio 4//
var a=34;
var b=56;
sum=a+b;
console.log("la suma entre " + a + " y " + b + " es " + sum);

// Ejercicio 5//
var nota_examen=4.6;
if(nota_examen>5){
  alert("has aprobado examen " + nota_examen)
}
else {
  alert("ups has suspendido examen con un " + nota_examen)
}

// Ejercicio 6//
var colores;
colores=["blau", "verde"];
coche=["coche", "cuche"];
color=["color", "culur"];
console.log("Tengo un " + coche[0] +  " de " + color[0] + " " + colores[0]);
console.log("Tengo un " + coche[0] +  " de " + color[0] + " " + colores[1]);
console.log("Tengo un " + coche[1] +  " de " + color[1] + " " + colores[1]);

// Ejercicio 7//
var muebles=["taula", "cadira","ordinador","libreta"];
var text="";
var i=0;
while (i<4) {
  text += "El objeto " + muebles[i] + " esta en la posicion " + i + "\n"; i++
}
console.log(text);



// Ejercicio 8 //
function calculadora(operador, a, b) {
  console.log(operador);
  if(operador=='suma') return a+b;
  else if(operador=='resta') return a-b;
  else if(operador=='multiplicacion') return a*b;
}
var resultat=calculadora("resta",40,20);
console.log("resultado es: " + resultat);








