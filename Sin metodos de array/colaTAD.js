"use strict";

var Max_element = 0;
var queue = [];

function create(Elemento) {
    Max_element = Elemento;
    for (var i = 0; i < Max_element; i++) {
        queue[i] = NaN;
    }
}


function isEmpty(queue) {
    return isNaN(queue[0]);
}

function isFull(queue) {
    return !isNaN(queue[Max_element - 1]);
}

function size(queue) {//probarrr
    var i = 0;
    while ((!isNaN(queue[i])) && (i < Max_element)) {
        i++;
    }

    return i;
}

/*function add(elemento) {
    var tamano = size();
    var i = tamano;
    if ((tamano < Max_element)) {

        while (i > 0) {
            cola[i] = cola[i - 1];
            i--;
        }
        cola[0] = elemento;
        return size();
    } else {
        console.log("La pila esta llena");
        return size();
    }

}*/
function add(queue) {
    var tamano = size(queue);
    var elemento = document.getElementById("txt").value
    if ((tamano < Max_element)) {
        queue[tamano] = elemento;
        console.log("Se ha añadido " + queue[tamano]);
        return size(queue);
    } else {
        resultado.innerHTML = "La pila esta llena";
        return size(queue);
    }
}

function poll(queue) {
    var tamano = size(queue);
    var aux;
    var i = 0;
    if ((tamano > 0)) {
        aux = queue[0];
        while (i < tamano) {
            queue[i] = queue[i + 1];
            i++;
        }
        return aux;
    } else {
        resultado.innerHTML = "La pila esta vacia";
        return size(queue);
    }

}

function peek(queue) {
    var tamano = size();

    if ((tamano > 0)) {

        return queue[0];
    } else {
        console.log("No se puede añadir, la pila esta vacia");
        return size(queue);
    }
}

function toString(queue) {

    var i;
    var result = "";
    var tamano = size(queue)
    for (i = 0; i < tamano; i++) {
        if (i != 0) {
            result += "-" + queue[i];
        } else {
            result = queue[i];
        }
    }
    resultado.innerHTML = result;
    return result;
}

function search(queue, elemento) {
    var i = 0;
    var maximo = size(queue);
    while (i < maximo) {
        if (queue[i] == elemento) {
            return i;
        }
        i++;
    }
    return -1;
}

function capacity(queue) {
    return Max_element;
}

function clear(queue) {
    var maximo = size(queue);
    var i;
    for (i = 0; i < maximo; i++) {
        queue[i] = NaN;
    }
}

function firstElement(queue) {

    if (size(queue) > 0) {
        return queue[0];
    }

    return -1;

}

function lastElement(queue) {
    return queue[size(queue) - 1];

}

create(5);


