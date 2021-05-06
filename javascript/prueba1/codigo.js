//diremos que pueden comprar con el dinero que tienen y si le sobra algo en su rango

dineroCofla = prompt("cuanto dinero tienes cofla?");
dineroRoberto = prompt("cuanto dinero tienes roberto?");
dineroPedro = prompt("cuanto dinero tienes pedro?");

dineroCofla = parseInt(dineroCofla);

//si cofla tiene entre 60 centimos y un euro
//>= mayor o igual
//&& si es igual a

//en este caso se da la posibilidad de que tenga

//codigo para Cofla

if (dineroCofla >= 0.6 && dineroCofla < 1) {
	alert("cofla; comprate el helado de agua");
	alert("y te sobran" + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6){
    alert("cofla, comprate una cola");
    alert("y te sobran" + (dineroCofla - 1));
}

else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
	alert("cofla; comprate el helado de heladix");
	alert("y te sobran" + (dineroCofla - 1.6));
}

else {
	alert("lo siento cofla, pobre de mierda, no te da para ningun helado");
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro, comprate una revista");
    alert("y te sobraran" + (dineroPedro - 1));
}

else if (dineroPedro >= 1 && dineroPedro < 2) {
    alert("Pedro, comrate un bocadillo");
    alert("y te sobra" + (dineroPedro - dineroPedro - 2))
}

else {
    alert("Pedro si no tienes dinero, buscate un empleo")
}

if (dineroRoberto >=0.6 && dineroRoberto < 1 ){
    alert("Roberto, puedes comprar un huevo")
    alert("y te sobra" + (dineroRoberto - 1 ));
}

else if  (dineroRoberto >= 1 && dineroRoberto < 2){
    alert("Roberto comprate una gallina");
    alert("y te sobraran"  + (dineroRoberto - 2));
}

else {
    alert("Roberto vete si no vas a comparar")
}