"use strict";

var Max_element = 0;
var oList = [];

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


function ordenar(olist) {
    var i;
    var j;
    var tamano = olist.length;
    var aux = 0;

    for (i = 0; i < tamano; i++) {
        for (j = i + 1; j < tamano; j++) {
            if (olist[i] > olist[j]) {
                aux = olist[j];
                olist[j] = olist[i];
                olist[i] = aux;
            }
        }
    }
}


function create(Elem) {
    Max_element = Elem;
    for (var i = 0; i < Max_element; i++) {
        oList[i] = NaN;
    }
}


function isEmpty(oList) {
    return isNaN(oList[0]);
}

function isFull(oList) {
    return !isNaN(oList[Max_element - 1]);
}

function size(oList) {
    var i = 0;
    while ((!isNaN(oList[i])) && (i < Max_element)) {
        i++;
    }
    return i;
}

function add(oList, elemento) {
    var tamano = size(oList);
    var i = 0;
    var index;
    if (isNaN(elemento)) throw "El elemeto introducido no es un number";
    if (isFull(oList)) throw "La lista esta llena";

    while (oList[i] < elemento) {
        i++;
    }
    index = i;
    i = tamano;
    while (i > index) {
        oList[i] = oList[i - 1];
        i--;
    }
    oList[index] = elemento;
}

function get(oList, index) {
    var tamano = size(oList);
    if (isNaN(index)) throw "El indice introducido no es un number";
    if (index > tamano) throw "El índice está fuera de los límites de la lista";
    return oList[index];
}

function toString(oList) {
    var i;
    var result = "";
    var tamano = size(oList);
    for (i = 0; i < tamano; i++) {
        if (i !== 0) {
            result += "-" + oList[i];
        } else {
            result = oList[i];
        }
    }
    return result;
}

function indexOf(oList, elem) {
    var tamano = size(oList);
    var i = 0;
    if (isNaN(elem)) throw "El elemento introducido no es un number";
    while (i < tamano) {
        if (oList[i] === elem) {
            return i;
        }
        i++;
    }
    return -1;
}

function lastIndexOf(oList, elem) {
    var i = size(oList);

    if (isNaN(elem)) throw "El elemento introducido no es un number";

    while (i > 0) {
        if (oList[i] === elem) {
            return i;
        }
        i--;
    }
    return -1;
}

function capacity(oList) {
    return Max_element;
}

function clear(oList) {
    var i = 0;
    while (!isNaN(oList[i])) {
        oList[i] = NaN;
        i++;
    }
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

    var i = index;
    var aux = oList[index];

    while (i < tamano) {

        oList[i] = oList[i + 1];
        i++;
    }

    oList[tamano - 1] = NaN;

    return aux;

}

function removeElement(oList, elem) {
    var tamano = size(oList);
    var i = 0;

    if (isNaN(elem)) throw "El elemento introducido no es un number";
    while (i < tamano) {
        if (oList[i] === elem) {
            remove(oList, i);
            return true;
        }
        i++;
    }
    return false;
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

create(5);
test();