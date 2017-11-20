"use strict";

var Max_element = 0;
var list = [];


//funciones pagina.

function addPag() {
    var elem = document.getElementById("txt").value;
    txt.value = "";
    try {
        add(list, elem);
        resultado.innerHTML = toString(list);
    } catch (err) {
        resultado.innerHTML = "Error! " + err;

    }
}

function removePag() {
    var elem = document.getElementById("txt").value;
    txt.value = "";
    try {
        removeElement(list, elem);
        resultado.innerHTML = toString(list);
    } catch (err) {
        resultado.innerHTML = "Error! " + err;

    }
}


// funciones.
function create(Elemento) {
    Max_element = Elemento;
    for (var i = 0; i < Max_element; i++) {
        list[i] = NaN;
    }
}

function isEmpty(list) {
    return isNaN(list[0]);
}

function isFull(list) {
    return !isNaN(list[Max_element - 1]);
}

function size(list) {
    var i = 0;
    while ((!isNaN(list[i])) && (i < Max_element)) {
        i++;
    }

    return i;
}

function add(list, elemento) {
    var tamano = size(list);
    if (isNaN(elemento)) throw "El elemeto introducido no es un number";
    if (isFull(list)) throw "La lista esta llena";

    list[tamano] = elemento;
    console.log("Se ha añadido " + list[tamano]);
    return size(list);
}

function addAt(list, elemento, index) {
    var tamano = size(list);
    var i = tamano;

    if (isNaN(elemento)) throw "El elemento introducido no es un number";
    if (isNaN(index)) throw "El índice introducido no es un number";
    if (isFull(list)) throw "La lista esta llena";
    if (index > tamano) throw "El índice está fuera de los límites de la lista";

    while (i > index) {
        list[i] = list[i - 1];
        i--;
    }
    list[index] = elemento;
    return size(list);
}

function get(list, index) {
    var tamano = size(list);
    if (isNaN(index)) throw "El indice introducido no es un number";
    if (index > tamano) throw "El índice está fuera de los límites de la lista";
    return list[index];
}

function toString(list) {
    var i;
    var result = "";
    var tamano = size(list);
    for (i = 0; i < tamano; i++) {
        if (i !== 0) {
            result += "-" + list[i];
        } else {
            result = list[i];
        }
    }
    return result;
}

function indexOf(list, elem) {
    var tamano = size(list);
    var i = 0;
    if (isNaN(elem)) throw "El elemento introducido no es un number";
    while (i < tamano) {
        if (list[i] === elem) {
            return i;
        }
        i++;
    }
    return -1;
}

function lastIndexOf(list, elem) {
    var i = size(list);

    if (isNaN(elem)) throw "El elemento introducido no es un number";

    while (i > 0) {
        if (list[i] === elem) {
            return i;
        }
        i--;
    }
    return -1;
}

function capacity(list) {
    return Max_element;
}

function clear(list) {
    var i = 0;
    while (!isNaN(list[i])) {
        list[i] = NaN;
        i++;
    }
}

function firstElement(list) {

    if (isEmpty(list)) throw "La lista está vacia";
    return list[0];
}

function lastElement(list) {
    if (isEmpty(list)) throw "La lista está vacia";

    var fin = size(list) - 1;
    return list[fin];
}

function remove(list, index) {

    if (isNaN(index)) throw "El índice introducido no es un number";
    var tamano = size(list);
    if (index > tamano) throw "El índice está fuera de los límites de la lista";

    var i = index;
    var aux = list[index];

    while (i < tamano) {

        list[i] = list[i + 1];
        i++;
    }

    list[tamano - 1] = NaN;

    return aux;

}

function removeElement(list, elem) {
    var tamano = size(list);
    var i = 0;

    if (isNaN(elem)) throw "El elemento introducido no es un number";
    while (i < tamano) {
        if (list[i] === elem) {
            remove(list, i);
            return true;
        }
        i++;
    }
    return false;
}

function set(list, elem, index) {

    if (isNaN(elem)) throw "El elemento introducido no es un number";
    if (isNaN(index)) throw "El índice introducido no es un number";
    if (index > size(list)) throw "El índice está fuera de los límites de la lista";

    var aux = list[index];

    list[index] = elem;

    return aux;
}

function test() {
    try {
        // Probamos la funcion add
        console.log("Probamos la funcion add");
        add(list, 1);
        console.log(list);
        add(list, 2);
        console.log(list);
        add(list, 3);
        console.log(list);
        add(list, 5);
        console.log(list);
        //probamos la funcion addAt
        console.log("probamos la funcion addAt");
        addAt(list, 5, 2);
        console.log(list);
        // probamos la funcion get
        console.log("probamos la funcion get");
        console.log(get(list, 2));
        // probamos la funcion toString
        console.log("probamos la funcion toString");
        console.log(toString(list));
        // probamos la funcion indexof y lastIndexOf
        console.log("probamos la funcion indexof y lastIndexOf");
        console.log(indexOf(list, 5));
        console.log(lastIndexOf(list, 5));
        // probamos la funcion capacity
        console.log("probamos la funcion capacity");
        console.log(capacity(list));
        console.log(list);
        // probamos las funciones firsElement y lastElement
        console.log("probamos las funciones firsElement y lastElement");
        console.log(firstElement(list));
        console.log(lastElement(list));
        // probamos la funcion remove
        console.log("probamos la funcion remove");
        console.log(remove(list, 2));
        console.log(list);
        //probamos la funcion removeElement
        console.log("probamos la funcion removeElement");
        console.log(removeElement(list, 5));
        console.log(list);
        //probamos la funcion set
        console.log("probamos la funcion set");
        set(list, 5, 1);
        console.log(list);
        //probamos la funcion clear
        console.log("probamos la funcion clear");
        clear(list);
        console.log(list);

    } catch (err) {

        console.log("Error! " + err);
    }
}

// main
create(5);
test();