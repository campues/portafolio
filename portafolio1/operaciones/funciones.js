// OPERACIONES EN CLASES========================================>
function factorial() {

    var n = parseInt(prompt("Ingresa un numero"));
    var f = 1;
    for (var i = 1; i <= n; i++) {
        f *= i;
    }
    document.write("El factorial es: " + f);
}

function suma() {
    var n1 = parseInt(prompt("Ingrese Valor Uno"));
    var n2 = parseInt(prompt("Ingrese Valor Dos"));
    var s = n1 + n2;
    document.write("La suma es: " + s);
}

function mostrar() {
    document.write("HOLA MUNDO");
}

function fechaActual() {
    var fecha = new Date();
    document.write("Hoy es: " + fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear());
}

function mostrarDatos() {
    var nom = prompt("Ingrese el Nombre:");
    var ed = prompt("Ingrese su Edad:");
    document.write("Nombre: " + nom + "<br>" + "Edad: " + ed);
}
//  DEBER=======================================================>

function opciones() {
    var seleccion = parseInt(prompt(
        "1. Factorial" + "\n" +
        "2. Suma" + "\n" +
        "3. Mostar" + "\n" +
        "4. Fecha Actual" + "\n" +
        "5. Mostrar Datos" + "\n" +
        "6. Calcular Sueldo" + "\n" +
        "7. Generar Numeros" + "\n" + "\n" +
        "Selecione una Opcion:"));
    if (seleccion == 1) {
        factorial();
    }
    if (seleccion == 2) {
        suma();
    }
    if (seleccion == 3) {
        mostar();
    }
    if (seleccion == 4) {
        fechaActual();
    }
    if (seleccion == 5) {
        mostrarDatos();
    }
    if (seleccion == 6) {
        var sueldo=new Array(2);
        cargarSueldos(sueldo);
          document.write("El sueldo es: "+calcularGastos(sueldo));
    }if (seleccion == 7) {
        generarNumeros();
    } if (seleccion == 8) {
        return;
    }

}
//  OPERACIONES EN CLASES=======================================>

function menus() {
    document.write(
        "1. Funciones" + "<br>" +
        "2. Suma"
    );
}

function casos() {
    var op = parseInt(document.getElementById("txtOpcion").value);
    alert("seleciono: " + op);
    switch (op) {
        case 1:
            factorial();
            break;
        case 2:
            sumar();
            break;
        case 3:
                mostrar();
            break;
        case 4:
                fechaActual();
            break;
        case 5:
            mostrarDatos();
            break;

    }
}
function cargarSueldos(array){
    for(var i=0;i<array.length;i++){
        array[i]=parseInt(prompt("Ingrese sueldo"));
    }
}

function calcularGastos(pagos){
    var acu=0;
    for(var i=0;i<pagos.length;i++){
        acu+=pagos[i];
    }
    return acu;
}

function generarNumeros(){
    var dim=parseInt(prompt("Ingresa la dimencion"));
    var listaNum=new Array(dim);
    for(var i=0;i<listaNum.length;i++){
        listaNum[i]=parseInt(Math.random()*5);
    }
    document.write(listaNum.toString());
}