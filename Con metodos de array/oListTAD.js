"use strict";

var Max_element = 0;
var oList = create(5);

//funciones pagina.

function addPag() {
    var elem = document.getElementById("txt").value;
    txt.value = "";
    try {
        add(oList, elem);
        resultado.innerHTML = toString(oList);
    } catch (err) {
        resultado.innerHTML = "Error! " + err;

    }
}

function removePag() {
    var elem = document.getElementById("txt").value;
    txt.value = "";
    try {
        removeElement(oList, elem);
        resultado.innerHTML = toString(oList);
    } catch (err) {
        resultado.innerHTML = "Error! " + err;

    }
}

// funciones.
function create(Elemento) {
    Max_element = Elemento;
    return [];

}

function isEmpty(oList) {
    return oList.length == 0;
}

function isFull(oList) {
    return oList.length == Max_element;
}

function size(oList) {
    return oList.length;
}


function add(oList, elemento) {
    var index;
    if (isNaN(elemento)) throw "El elemeto introducido no es un number";
    if (isFull(oList)) throw "La lista esta llena";

    index = oList.findIndex(function (elem) {

        return elem > elemento;
    });
    oList.splice(index, 0, elemento);
}

function get(oList, index) {
    var tamano = size(oList);
    if (isNaN(index)) throw "El indice introducido no es un number";
    if (index > tamano) throw "El índice está fuera de los límites de la lista";
    return oList[index];
}

function toString(oList) {
    return oList.toString();
}

function indexOf(oList, elem) {
    var i = 0;
    if (isNaN(elem)) throw "El elemento introducido no es un number";
    return oList.indexOf(elem);
}

function lastIndexOf(oList, elem) {

    if (isNaN(elem)) throw "El elemento introducido no es un number";

    return oList.lastIndexOf(elem);
}

function capacity(oList) {
    return Max_element;
}

function clear(oList) {
    oList.splice(0, size(oList));
}

function firstElement(oList) {

    if (isEmpty(oList)) throw "La lista está vacia";
    return oList[0];
}

function lastElement(oList) {
    if (isEmpty(oList)) throw "La lista está vacia";
    var fin = size(oList) - 1;
    return oList[fin];
}

function remove(oList, index) {

    if (isNaN(index)) throw "El índice introducido no es un number";
    var tamano = size(oList);
    if (index > tamano) throw "El índice está fuera de los límites de la lista";

    var aux = oList[index];
    oList.splice(index, 1);
    return aux;

}

function removeElement(oList, elem) {
    if (isNaN(elem)) throw "El elemento introducido no es un number";

    var index = oList.indexOf(elem);

    oList.splice(index, 1);

    if (index >= 0) {
        return true;
    } else {
        return false;
    }
}

function test() {
    try {
        // Probamos la funcion add
        console.log("Probamos la funcion add");
        add(oList, 5);
        console.log(oList);
        add(oList, 5);
        console.log(oList);
        add(oList, 3);
        console.log(oList);
        add(oList, 1);
        console.log(oList);
        add(oList, 2);
        console.log(oList);
        // probamos la funcion get
        console.log("probamos la funcion get");
        console.log(get(oList, 3));
        // probamos la funcion toString
        console.log("probamos la funcion toString");
        console.log(toString(oList));
        // probamos la funcion indexof y lastIndexOf
        console.log("probamos la funcion indexof y lastIndexOf");
        console.log(indexOf(oList, 5));
        console.log(lastIndexOf(oList, 5));
        // probamos la funcion capacity
        console.log("probamos la funcion capacity");
        console.log(capacity(oList));
        console.log(oList);
        // probamos las funciones firsElement y lastElement
        console.log("probamos las funciones firsElement y lastElement");
        console.log(firstElement(oList));
        console.log(lastElement(oList));
        // probamos la funcion remove
        console.log("probamos la funcion remove");
        console.log(remove(oList, 2));
        console.log(oList);
        //probamos la funcion removeElement
        console.log("probamos la funcion removeElement");
        console.log(removeElement(oList, 5));
        console.log(oList);
        //probamos la funcion clear
        console.log("probamos la funcion clear");
        clear(oList);
        console.log(oList);

    } catch (err) {

        console.log("Error! " + err);
    }
}

test();