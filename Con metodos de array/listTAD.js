"use strict";

var Max_element = 0;
list = create(5);

function create(Elemento) {
    Max_element = Elemento;
    return [];

}

function isEmpty(list) {
    return list.length = 0;
}

function isFull(list) {
    return list.length == Max_element;
}

function size(list) {
    return list.length;
}

function add(list, elemento) {
    if (isNaN(elemento)) throw "El elemeto introducido no es un number";
    if (isFull(list)) throw "La lista esta llena";

    return list.push(elemento);
}

function addAt(list, elemento, index) {
    var tamano = size(list);
    var i = tamano;

    if (isNaN(elemento)) throw "El elemento introducido no es un number";
    if (isNaN(index)) throw "El índice introducido no es un number";
    if (isFull(list)) throw "La lista esta llena";
    if (index > tamano) throw "El índice está fuera de los límites de la lista";

    list.splice(index, 0, elemento);

    return size(list);
}

function get(list, index) {
    var tamano = size(list);
    if (isNaN(index)) throw "El indice introducido no es un number";
    if (index > tamano) throw "El índice está fuera de los límites de la lista";
    return list[index];
}

function toString(list) {
    return list.toString();
}

function indexOf(list, elem) {
    var i = 0;
    if (isNaN(elem)) throw "El elemento introducido no es un number";
    list.indexOf(elem);
}

function lastIndexOf(list, elem) {

    if (isNaN(elem)) throw "El elemento introducido no es un number";

    return list.lastIndexOf();
}

function capacity(list) {
    return Max_element;
}

function clear(list) {
    list.splice(0, size(list));
}

function firstElement(list) {

    if (isEmpty(list)) throw "La lista está vacia";
    return list[0];
}

function lastElement(list) {
    if (isEmpty(list)) throw "La lista está vacia";
    var fin = size(list);
    return list[fin];
}

function remove(list, index) {

    if (isNaN(index)) throw "El índice introducido no es un number";
    var tamano = size(list);
    if (index > tamano) throw "El índice está fuera de los límites de la lista";

    var aux = list[index];
    list.splice(index, 1);
    return aux;

}